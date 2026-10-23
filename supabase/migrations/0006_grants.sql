-- 0001 defined RLS policies but never granted the base table privileges
-- those policies filter. Without GRANT, PostgREST gets a flat
-- "permission denied" before RLS is even consulted — this is why every
-- client query (including an admin reading their own profile) was failing.
-- RLS still does the actual row-level gatekeeping; these grants just let
-- each role attempt the statement types its RLS policies expect.

grant usage on schema public to anon, authenticated;

grant select, update on public.profiles to authenticated;

grant select on public.slots to anon, authenticated;
grant insert, update, delete on public.slots to authenticated;

grant insert on public.bookings to anon, authenticated;
grant select, update on public.bookings to authenticated;

grant select, insert, update, delete on public.lessons to authenticated;

grant select, insert, update on public.messages to authenticated;

grant select, insert on public.reviews to anon, authenticated;
grant update on public.reviews to authenticated;

grant select, insert, update, delete on public.materials to authenticated;

grant select, insert, delete on public.material_access to authenticated;
