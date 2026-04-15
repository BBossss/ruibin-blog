-- Homepage content schema for Supabase
-- Apply in Supabase SQL editor when you're ready to move from fallback content to database-driven content.

create table if not exists homepage_quick_facts (
  id bigint generated always as identity primary key,
  text text not null,
  sort_order int not null default 0
);

create table if not exists homepage_topics (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  tag text not null,
  sort_order int not null default 0
);

create table if not exists homepage_writing_plans (
  id bigint generated always as identity primary key,
  status text not null,
  title text not null,
  summary text not null,
  meta text not null,
  sort_order int not null default 0
);

create table if not exists homepage_projects (
  id bigint generated always as identity primary key,
  name text not null,
  description text not null,
  stack text not null,
  sort_order int not null default 0
);

create table if not exists homepage_timeline (
  id bigint generated always as identity primary key,
  year text not null,
  title text not null,
  description text not null,
  sort_order int not null default 0
);

create table if not exists homepage_principles (
  id bigint generated always as identity primary key,
  title text not null,
  description text not null,
  sort_order int not null default 0
);

create table if not exists homepage_toolbox (
  id bigint generated always as identity primary key,
  text text not null,
  sort_order int not null default 0
);

create table if not exists homepage_stack_cards (
  id bigint generated always as identity primary key,
  name text not null,
  role text not null,
  cost text not null,
  status text not null,
  description text not null,
  sort_order int not null default 0
);

create table if not exists homepage_architecture (
  id bigint generated always as identity primary key,
  layer text not null,
  value text not null,
  description text not null,
  sort_order int not null default 0
);

create table if not exists homepage_next_steps (
  id bigint generated always as identity primary key,
  text text not null,
  sort_order int not null default 0
);

alter table homepage_quick_facts enable row level security;
alter table homepage_topics enable row level security;
alter table homepage_writing_plans enable row level security;
alter table homepage_projects enable row level security;
alter table homepage_timeline enable row level security;
alter table homepage_principles enable row level security;
alter table homepage_toolbox enable row level security;
alter table homepage_stack_cards enable row level security;
alter table homepage_architecture enable row level security;
alter table homepage_next_steps enable row level security;

create policy if not exists "public read homepage_quick_facts"
  on homepage_quick_facts for select to anon using (true);
create policy if not exists "public read homepage_topics"
  on homepage_topics for select to anon using (true);
create policy if not exists "public read homepage_writing_plans"
  on homepage_writing_plans for select to anon using (true);
create policy if not exists "public read homepage_projects"
  on homepage_projects for select to anon using (true);
create policy if not exists "public read homepage_timeline"
  on homepage_timeline for select to anon using (true);
create policy if not exists "public read homepage_principles"
  on homepage_principles for select to anon using (true);
create policy if not exists "public read homepage_toolbox"
  on homepage_toolbox for select to anon using (true);
create policy if not exists "public read homepage_stack_cards"
  on homepage_stack_cards for select to anon using (true);
create policy if not exists "public read homepage_architecture"
  on homepage_architecture for select to anon using (true);
create policy if not exists "public read homepage_next_steps"
  on homepage_next_steps for select to anon using (true);
