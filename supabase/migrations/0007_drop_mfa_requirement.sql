-- Admin access is now password-only (no TOTP step in the UI) per request.
-- is_admin() must no longer require an aal2 session, or every RLS policy
-- gating admin actions (bookings, slots, reviews, materials...) would
-- reject a correctly-authenticated admin who never completes MFA.
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
  );
$$;
