-- The Phase 1 UI (admin "make student / remove status" toggle, and the
-- student-only "study"/"knowledge" tabs) expects a profiles.student flag.
-- 0001 never added one. Add it now under the clearer name is_student;
-- admin-only write is already covered by the existing
-- profiles_update_own_or_admin policy.
alter table public.profiles
  add column if not exists is_student boolean not null default false;
