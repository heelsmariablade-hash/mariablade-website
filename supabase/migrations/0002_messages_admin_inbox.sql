-- Let students message "Maria" without ever needing to know her profile id:
-- recipient_id = null means "addressed to admin". Students can't set an
-- explicit recipient_id (only admin can reply to a specific student).

alter table public.messages alter column recipient_id drop not null;

drop policy if exists "messages_select_participant_or_admin" on public.messages;
create policy "messages_select_participant_or_admin" on public.messages
  for select using (sender_id = auth.uid() or recipient_id = auth.uid() or public.is_admin());

drop policy if exists "messages_insert_as_self" on public.messages;
create policy "messages_insert_as_self" on public.messages
  for insert with check (
    sender_id = auth.uid()
    and (recipient_id is null or public.is_admin())
  );
