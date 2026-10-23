-- Protect the free tiers (Supabase row growth, Resend's daily email cap)
-- from being drained by a bot hammering the public insert endpoints
-- (bookings, reviews both allow anonymous inserts by design). Cap each to
-- 5 submissions per hour per client IP, server-side, so it can't be
-- bypassed by calling the REST API directly instead of the site's form.

alter table public.bookings add column if not exists client_ip inet;
alter table public.reviews add column if not exists client_ip inet;

create or replace function public.rl_bookings() returns trigger
language plpgsql security definer set search_path = public as $$
declare ip inet; recent_count int;
begin
  ip := nullif(current_setting('request.header.x-forwarded-for', true), '')::inet;
  new.client_ip := ip;
  if ip is not null then
    select count(*) into recent_count from public.bookings
      where client_ip = ip and created_at > now() - interval '1 hour';
    if recent_count >= 5 then
      raise exception 'Too many requests, please try again later.' using errcode = '42501';
    end if;
  end if;
  return new;
end; $$;

create or replace function public.rl_reviews() returns trigger
language plpgsql security definer set search_path = public as $$
declare ip inet; recent_count int;
begin
  ip := nullif(current_setting('request.header.x-forwarded-for', true), '')::inet;
  new.client_ip := ip;
  if ip is not null then
    select count(*) into recent_count from public.reviews
      where client_ip = ip and created_at > now() - interval '1 hour';
    if recent_count >= 5 then
      raise exception 'Too many submissions, please try again later.' using errcode = '42501';
    end if;
  end if;
  return new;
end; $$;

drop trigger if exists trg_rl_bookings on public.bookings;
create trigger trg_rl_bookings before insert on public.bookings
  for each row execute function public.rl_bookings();

drop trigger if exists trg_rl_reviews on public.reviews;
create trigger trg_rl_reviews before insert on public.reviews
  for each row execute function public.rl_reviews();
