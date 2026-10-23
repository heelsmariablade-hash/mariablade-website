-- Maria Blade — initial schema, roles, RLS
-- Applied via Supabase Management API. Idempotent-ish: safe to re-run on a fresh project.

-- ========== extensions ==========
create extension if not exists pgcrypto;

-- ========== profiles ==========
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'student' check (role in ('student','admin')),
  full_name text,
  phone text,
  instagram text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- auto-create a profile row when a new auth user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ========== helper functions for RLS ==========
-- true if the current session belongs to an admin AND has completed MFA (aal2)
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  )
  and coalesce((auth.jwt()->>'aal'), 'aal1') = 'aal2';
$$;

-- ========== slots ==========
create table if not exists public.slots (
  id uuid primary key default gen_random_uuid(),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  practice_type text,
  capacity int not null default 1,
  is_open boolean not null default true,
  notes text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- ========== bookings (заявки) ==========
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.profiles(id) on delete set null,
  slot_id uuid references public.slots(id) on delete set null,
  practice_type text,
  message text,
  contact_name text not null,
  contact_phone text,
  contact_instagram text,
  contact_email text,
  status text not null default 'pending' check (status in ('pending','confirmed','declined','cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ========== lessons (занятия) ==========
create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.profiles(id) on delete cascade,
  slot_id uuid references public.slots(id) on delete set null,
  booking_id uuid references public.bookings(id) on delete set null,
  status text not null default 'scheduled' check (status in ('scheduled','completed','cancelled','no_show')),
  notes text,
  created_at timestamptz not null default now()
);

-- ========== messages ==========
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.profiles(id) on delete cascade,
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

-- ========== reviews (отзывы, с модерацией) ==========
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.profiles(id) on delete set null,
  author_name text not null,
  body text not null,
  rating int check (rating between 1 and 5),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  moderated_at timestamptz,
  moderated_by uuid references public.profiles(id)
);

-- ========== materials (Знання) ==========
create table if not exists public.materials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  storage_path text not null,
  kind text not null default 'article' check (kind in ('video','pdf','image','article')),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- per-student access grants for materials
create table if not exists public.material_access (
  id uuid primary key default gen_random_uuid(),
  material_id uuid not null references public.materials(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  granted_at timestamptz not null default now(),
  granted_by uuid references public.profiles(id),
  unique (material_id, student_id)
);

-- ========== updated_at triggers ==========
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists trg_bookings_updated_at on public.bookings;
create trigger trg_bookings_updated_at before update on public.bookings
  for each row execute function public.set_updated_at();

-- ========== RLS ==========
alter table public.profiles enable row level security;
alter table public.slots enable row level security;
alter table public.bookings enable row level security;
alter table public.lessons enable row level security;
alter table public.messages enable row level security;
alter table public.reviews enable row level security;
alter table public.materials enable row level security;
alter table public.material_access enable row level security;

-- profiles
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin" on public.profiles
  for update using (id = auth.uid() or public.is_admin());

-- slots: public can read open slots; only admin manages
drop policy if exists "slots_select_open_or_admin" on public.slots;
create policy "slots_select_open_or_admin" on public.slots
  for select using (is_open = true or public.is_admin());

drop policy if exists "slots_write_admin" on public.slots;
create policy "slots_write_admin" on public.slots
  for insert with check (public.is_admin());
drop policy if exists "slots_update_admin" on public.slots;
create policy "slots_update_admin" on public.slots
  for update using (public.is_admin());
drop policy if exists "slots_delete_admin" on public.slots;
create policy "slots_delete_admin" on public.slots
  for delete using (public.is_admin());

-- bookings: anyone (incl. anonymous) can submit a request; only the owning student or admin can read/update
drop policy if exists "bookings_insert_anyone" on public.bookings;
create policy "bookings_insert_anyone" on public.bookings
  for insert with check (student_id is null or student_id = auth.uid());

drop policy if exists "bookings_select_own_or_admin" on public.bookings;
create policy "bookings_select_own_or_admin" on public.bookings
  for select using (student_id = auth.uid() or public.is_admin());

drop policy if exists "bookings_update_admin" on public.bookings;
create policy "bookings_update_admin" on public.bookings
  for update using (public.is_admin());

-- lessons: student reads own; admin manages
drop policy if exists "lessons_select_own_or_admin" on public.lessons;
create policy "lessons_select_own_or_admin" on public.lessons
  for select using (student_id = auth.uid() or public.is_admin());

drop policy if exists "lessons_write_admin" on public.lessons;
create policy "lessons_write_admin" on public.lessons
  for insert with check (public.is_admin());
drop policy if exists "lessons_update_admin" on public.lessons;
create policy "lessons_update_admin" on public.lessons
  for update using (public.is_admin());
drop policy if exists "lessons_delete_admin" on public.lessons;
create policy "lessons_delete_admin" on public.lessons
  for delete using (public.is_admin());

-- messages: participants only
drop policy if exists "messages_select_participant_or_admin" on public.messages;
create policy "messages_select_participant_or_admin" on public.messages
  for select using (sender_id = auth.uid() or recipient_id = auth.uid() or public.is_admin());

drop policy if exists "messages_insert_as_self" on public.messages;
create policy "messages_insert_as_self" on public.messages
  for insert with check (sender_id = auth.uid());

drop policy if exists "messages_update_recipient_or_admin" on public.messages;
create policy "messages_update_recipient_or_admin" on public.messages
  for update using (recipient_id = auth.uid() or public.is_admin());

-- reviews: public reads approved; authors submit; admin moderates
drop policy if exists "reviews_select_approved_or_own_or_admin" on public.reviews;
create policy "reviews_select_approved_or_own_or_admin" on public.reviews
  for select using (status = 'approved' or student_id = auth.uid() or public.is_admin());

drop policy if exists "reviews_insert_self_or_anon" on public.reviews;
create policy "reviews_insert_self_or_anon" on public.reviews
  for insert with check (student_id is null or student_id = auth.uid());

drop policy if exists "reviews_update_admin" on public.reviews;
create policy "reviews_update_admin" on public.reviews
  for update using (public.is_admin());

-- materials: visible only to the students explicitly granted access, or admin
drop policy if exists "materials_select_granted_or_admin" on public.materials;
create policy "materials_select_granted_or_admin" on public.materials
  for select using (
    public.is_admin() or exists (
      select 1 from public.material_access ma
      where ma.material_id = materials.id and ma.student_id = auth.uid()
    )
  );

drop policy if exists "materials_write_admin" on public.materials;
create policy "materials_write_admin" on public.materials
  for insert with check (public.is_admin());
drop policy if exists "materials_update_admin" on public.materials;
create policy "materials_update_admin" on public.materials
  for update using (public.is_admin());
drop policy if exists "materials_delete_admin" on public.materials;
create policy "materials_delete_admin" on public.materials
  for delete using (public.is_admin());

-- material_access: student sees own grants; admin manages all
drop policy if exists "material_access_select_own_or_admin" on public.material_access;
create policy "material_access_select_own_or_admin" on public.material_access
  for select using (student_id = auth.uid() or public.is_admin());

drop policy if exists "material_access_write_admin" on public.material_access;
create policy "material_access_write_admin" on public.material_access
  for insert with check (public.is_admin());
drop policy if exists "material_access_delete_admin" on public.material_access;
create policy "material_access_delete_admin" on public.material_access
  for delete using (public.is_admin());

-- ========== private Storage bucket for materials ==========
insert into storage.buckets (id, name, public)
values ('materials', 'materials', false)
on conflict (id) do nothing;

drop policy if exists "materials_bucket_read_granted_or_admin" on storage.objects;
create policy "materials_bucket_read_granted_or_admin" on storage.objects
  for select using (
    bucket_id = 'materials' and (
      public.is_admin() or exists (
        select 1 from public.materials m
        join public.material_access ma on ma.material_id = m.id
        where m.storage_path = storage.objects.name
          and ma.student_id = auth.uid()
      )
    )
  );

drop policy if exists "materials_bucket_write_admin" on storage.objects;
create policy "materials_bucket_write_admin" on storage.objects
  for insert with check (bucket_id = 'materials' and public.is_admin());
drop policy if exists "materials_bucket_update_admin" on storage.objects;
create policy "materials_bucket_update_admin" on storage.objects
  for update using (bucket_id = 'materials' and public.is_admin());
drop policy if exists "materials_bucket_delete_admin" on storage.objects;
create policy "materials_bucket_delete_admin" on storage.objects
  for delete using (bucket_id = 'materials' and public.is_admin());

-- private bucket for avatars (each user manages their own folder: avatars/<uid>/...)
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', false)
on conflict (id) do nothing;

drop policy if exists "avatars_read_own_or_admin" on storage.objects;
create policy "avatars_read_own_or_admin" on storage.objects
  for select using (
    bucket_id = 'avatars' and (
      public.is_admin() or (storage.foldername(name))[1] = auth.uid()::text
    )
  );
drop policy if exists "avatars_write_own" on storage.objects;
create policy "avatars_write_own" on storage.objects
  for insert with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "avatars_update_own" on storage.objects;
create policy "avatars_update_own" on storage.objects
  for update using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "avatars_delete_own" on storage.objects;
create policy "avatars_delete_own" on storage.objects
  for delete using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
