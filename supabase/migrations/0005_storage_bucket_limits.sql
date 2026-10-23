-- Guard the free-tier 1GB storage cap against an accidental huge upload.
update storage.buckets set
  file_size_limit = 5242880, -- 5MB
  allowed_mime_types = array['image/jpeg','image/png','image/webp']
where id = 'avatars';

update storage.buckets set
  file_size_limit = 52428800, -- 50MB
  allowed_mime_types = array['image/jpeg','image/png','image/webp','application/pdf','video/mp4','video/webm']
where id = 'materials';
