# 味 · Menu

Menu site at `adamcroft.me/menu`. Minimalist, traditional-Chinese-styled gallery: friends and family add dishes (photo + name) from any device — everything syncs live via Supabase.

## Features

- EN / 中文 toggle (top-right)
- Left sidebar filters by cuisine (Italian, Chinese, Japanese, …) with live counts
- AI classification (CLIP via Transformers.js, in-browser, no API key): dishes are auto-classified from their photo right after upload (keyword match on the name is applied instantly); the model (~150 MB) downloads on the first upload, then is cached
- Hover a card to remove it, or set its cuisine from a dropdown
- Realtime: everyone's browser updates instantly (Supabase realtime)
- Photos compressed to 1280px on upload; stored in Supabase Storage

## Supabase setup (one-time)

1. Create a free project at https://supabase.com (name e.g. `food-menu`)
2. **SQL Editor** → paste and Run:

```sql
create table public.dishes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image_url text not null,
  cuisine text not null default '',
  ai text not null default '',
  created_at timestamptz not null default now()
);

alter table public.dishes enable row level security;

create policy "public read"   on public.dishes for select using (true);
create policy "public insert" on public.dishes for insert with check (true);
create policy "public update" on public.dishes for update using (true);
create policy "public delete" on public.dishes for delete using (true);
```

3. **Storage → New bucket**: name `dishes`, **Public bucket: ON**
4. **Project Settings → API**: copy *Project URL* and *anon public key* into `config.js`

## Local dev

`python3 -m http.server` in this folder. (`config.js` must have the URL + key.)

> Anyone with the site URL can add/remove dishes (no login, by design for friends & family).
> The AI model (~150 MB) is downloaded from Hugging Face via jsDelivr on first use, then cached.
