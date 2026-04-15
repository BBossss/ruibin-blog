"use client";

import { useEffect, useMemo, useState } from "react";

import {
  fallbackHomepageContent,
  type ArchitectureItem,
  type HomepageContent,
  type Principle,
  type ProjectItem,
  type StackCard,
  type TimelineItem,
  type Topic,
  type WritingPlan,
} from "@/lib/site-content";
import { getSupabaseBrowserClient } from "@/lib/supabase";

type LoaderProps = {
  initialContent: HomepageContent;
};

function mergeHomepageContent(partial: Partial<HomepageContent>): HomepageContent {
  return {
    ...fallbackHomepageContent,
    ...partial,
  };
}

export function HomepageContentLoader({ initialContent }: LoaderProps) {
  const [content, setContent] = useState<HomepageContent>(initialContent);

  useEffect(() => {
    const supabaseClient = getSupabaseBrowserClient();
    if (!supabaseClient) return;

    const supabase = supabaseClient;
    let cancelled = false;

    async function load() {
      try {
        const [
          quickFactsRes,
          topicsRes,
          writingPlansRes,
          projectsRes,
          timelineRes,
          principlesRes,
          toolboxRes,
          stackCardsRes,
          architectureRes,
          nextStepsRes,
        ] = await Promise.all([
          supabase.from("homepage_quick_facts").select("text,sort_order").order("sort_order"),
          supabase
            .from("homepage_topics")
            .select("title,description,tag,sort_order")
            .order("sort_order"),
          supabase
            .from("homepage_writing_plans")
            .select("status,title,summary,meta,sort_order")
            .order("sort_order"),
          supabase
            .from("homepage_projects")
            .select("name,description,stack,sort_order")
            .order("sort_order"),
          supabase
            .from("homepage_timeline")
            .select("year,title,description,sort_order")
            .order("sort_order"),
          supabase
            .from("homepage_principles")
            .select("title,description,sort_order")
            .order("sort_order"),
          supabase.from("homepage_toolbox").select("text,sort_order").order("sort_order"),
          supabase
            .from("homepage_stack_cards")
            .select("name,role,cost,status,description,sort_order")
            .order("sort_order"),
          supabase
            .from("homepage_architecture")
            .select("layer,value,description,sort_order")
            .order("sort_order"),
          supabase.from("homepage_next_steps").select("text,sort_order").order("sort_order"),
        ]);

        const results = [
          quickFactsRes,
          topicsRes,
          writingPlansRes,
          projectsRes,
          timelineRes,
          principlesRes,
          toolboxRes,
          stackCardsRes,
          architectureRes,
          nextStepsRes,
        ];

        if (results.some((result) => result.error)) {
          return;
        }

        if (cancelled) return;

        const partial: Partial<HomepageContent> = {
          quickFacts:
            quickFactsRes.data && quickFactsRes.data.length > 0
              ? quickFactsRes.data.map((item: { text: string }) => item.text)
              : initialContent.quickFacts,
          featuredTopics:
            topicsRes.data && topicsRes.data.length > 0
              ? (topicsRes.data as Topic[])
              : initialContent.featuredTopics,
          writingPlans:
            writingPlansRes.data && writingPlansRes.data.length > 0
              ? (writingPlansRes.data as WritingPlan[])
              : initialContent.writingPlans,
          projects:
            projectsRes.data && projectsRes.data.length > 0
              ? (projectsRes.data as ProjectItem[])
              : initialContent.projects,
          timeline:
            timelineRes.data && timelineRes.data.length > 0
              ? (timelineRes.data as TimelineItem[])
              : initialContent.timeline,
          principles:
            principlesRes.data && principlesRes.data.length > 0
              ? (principlesRes.data as Principle[])
              : initialContent.principles,
          toolbox:
            toolboxRes.data && toolboxRes.data.length > 0
              ? toolboxRes.data.map((item: { text: string }) => item.text)
              : initialContent.toolbox,
          stackCards:
            stackCardsRes.data && stackCardsRes.data.length > 0
              ? (stackCardsRes.data as StackCard[])
              : initialContent.stackCards,
          architecture:
            architectureRes.data && architectureRes.data.length > 0
              ? (architectureRes.data as ArchitectureItem[])
              : initialContent.architecture,
          nextSteps:
            nextStepsRes.data && nextStepsRes.data.length > 0
              ? nextStepsRes.data.map((item: { text: string }) => item.text)
              : initialContent.nextSteps,
        };

        setContent(mergeHomepageContent(partial));
      } catch {
        // Keep fallback content when Supabase is unavailable.
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [initialContent]);

  const renderedContent = useMemo(() => mergeHomepageContent(content), [content]);

  return <HomepagePage content={renderedContent} />;
}

type HomepagePageProps = {
  content: HomepageContent;
};

function HomepagePage({ content }: HomepagePageProps) {
  const {
    quickFacts,
    featuredTopics,
    writingPlans,
    projects,
    timeline,
    principles,
    toolbox,
    stackCards,
    architecture,
    nextSteps,
  } = content;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1f2a44_0%,#0b1020_35%,#050816_70%,#03060f_100%)] text-zinc-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="mb-16 flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
              Ruibin Huang · Personal Site
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">黄瑞彬</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#about">
              关于我
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#topics">
              主题
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#stack">
              Tool Stack
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#architecture">
              架构
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#writing">
              文章计划
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#contact">
              联系
            </a>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl shadow-cyan-950/20 sm:p-10">
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Backend Engineer · AI Agent Builder · 深圳
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              我想把后端工程能力、
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
                AI Agent 实践
              </span>
              与个人产品思维，连接成一套能持续放大的个人系统。
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              我目前在深圳做后台开发，主要参与 HCI 平台功能开发与维护。工作之外，我在持续搭建自己的内容、自动化与个人产品体系：把 AI 工具真正接进工程流程，把零散经验沉淀成长期资产，也把“会做技术”逐步延展成“能做产品”。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#stack"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-cyan-200"
              >
                看完整 Tool Stack
              </a>
              <a
                href="#architecture"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                查看下一步架构
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-black/25 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Quick Facts</p>
              <div className="mt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <div key={fact} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                    {fact}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Now Building</p>
              <p className="mt-4 text-xl font-semibold text-white">一个真正属于自己的个人博客与长期积累入口</p>
              <p className="mt-3 text-sm leading-7 text-cyan-50/80">
                这个站点不会只是个人介绍页，而会逐步补齐文章、项目、方法论、实验记录和后续产品入口。
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/20 p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">About</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">我是谁，我现在在做什么</h3>
            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-300">
              <p>
                我叫黄瑞彬，目前在深圳工作，是一名后台开发工程师。我的主线工作是平台功能开发与维护，长期关注如何把复杂需求拆解成稳定、可维护、可持续演进的系统能力。
              </p>
              <p>
                这两年我越来越关注另一件事：技术能力如何离开单一项目后，继续形成自己的长期资产。所以我开始系统化研究 AI agent、自动化工作流、个人博客、内容沉淀和产品化方法。
              </p>
              <p>
                这个站点就是我把这些东西重新组织起来的起点：一半是公开表达，一半是对自己长期主义的一种约束。
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Working Style</p>
              <div className="mt-6 space-y-5">
                {principles.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Toolbox</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {toolbox.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="topics" className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Topics</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">我会长期持续写的三个方向</h3>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/7"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
                  {topic.tag}
                </div>
                <h4 className="mt-5 text-xl font-semibold text-white">{topic.title}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="mt-20">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Tool Stack</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">按照截图思路补齐后的完整组件栈</h3>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-zinc-400">
            这部分我已经按你发的截图把主要组件都补进来了。当前真正落地并在运行的，是页面、代码仓库和公开部署；其余像数据库、认证、支付、邮件、监控、分析等，都已经在站点架构里预留了正式接入位。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stackCards.map((item) => (
              <article key={item.name} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.06]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                    <p className="mt-2 text-sm text-cyan-200/85">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                    {item.cost}
                  </span>
                </div>
                <div className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  {item.status}
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/20 p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Architecture</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">这个站下一步会如何从“展示页”进化成“完整系统”</h3>
            <div className="mt-8 space-y-5">
              {architecture.map((item) => (
                <div key={item.layer} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-lg font-semibold text-white">{item.layer}</h4>
                    <span className="text-sm text-cyan-200/85">{item.value}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Current State</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">现在已经落地了什么</h3>
              <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-300">
                <p>1. 个人站点首页已经搭好，并且已经公开部署上线。</p>
                <p>2. 页面结构、视觉风格、SEO 基础、公开地址和代码仓库已经具备。</p>
                <p>3. 现在已经预留 Supabase 内容层，之后可直接把页面内容迁到数据库驱动。</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Next on Site</p>
              <div className="mt-6 space-y-4">
                {nextSteps.map((step) => (
                  <div key={step} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-zinc-300">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="mt-20 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/20 p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Writing Plan</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">不是空文章区，而是明确的写作计划</h3>
            <div className="mt-8 space-y-5">
              {writingPlans.map((post, index) => (
                <article
                  key={post.title}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">0{index + 1}</p>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      {post.status}
                    </span>
                  </div>
                  <h4 className="mt-3 text-xl font-medium text-white">{post.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{post.summary}</p>
                  <p className="mt-4 text-sm text-cyan-200/85">{post.meta}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Perspective</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">我希望这里长期长成什么样</h3>
              <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-300">
                <p>
                  我不想做一个只有头像、职位和联系方式的静态名片，而是想把这个站点做成“个人工程系统”的公开入口。
                </p>
                <p>
                  对外，它展示我在做什么、在想什么、有哪些长期方向；对内，它逼着我把原本只存在于对话、代码和笔记里的经验整理成可复用的方法论。
                </p>
                <p>
                  所以接下来这里会优先补充真实文章、项目说明和实验记录，而不是堆砌花哨组件。
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Why This Matters</p>
              <div className="mt-6 space-y-4 text-sm leading-8 text-zinc-300">
                <p>如果站点只停在漂亮首页，那它更像一个模板；只有把文章、项目、数据库、监控和增长链路逐步补齐，它才会真正变成我的长期资产。</p>
                <p>你刚刚让我按截图组件继续搭，这一步的意义就是：把“未来要接什么”明确写进站点本身，让这个博客不只是展示结果，也展示演进路线。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Projects</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">当前投入的项目与长期方向</h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-950/10"
              >
                <h4 className="text-xl font-semibold text-white">{project.name}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
                <p className="mt-5 text-sm text-cyan-200/80">{project.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/20 p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Timeline</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">工作与成长时间线</h3>
            <p className="mt-5 text-sm leading-8 text-zinc-400">
              我不想把经历写成流水账，更想把它整理成“今天为什么会关注这些事情”的路径说明。
            </p>
          </div>
          <div className="space-y-5">
            {timeline.map((item) => (
              <article
                key={item.year + item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200/85">
                    {item.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/12 via-sky-400/8 to-indigo-400/10 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/75">Contact</p>
          <h3 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
            如果你也在做 AI agent、自动化、后端平台或个人产品，欢迎交流。
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-200/80">
            这个站点接下来会继续补充文章、项目细节和实验记录。你也可以把它理解成我公开构建个人产品矩阵的起点。当前我更适合交流的话题包括：后端工程、Agent 工作流、个人知识沉淀、博客与产品化实践。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">所在地：深圳</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">身份：后台开发工程师</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">关注：AI Agent / 自动化 / 产品化</span>
            <a
              href="https://github.com/BBossss/ruibin-blog"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 transition hover:bg-white/15"
            >
              GitHub 仓库
            </a>
          </div>
        </section>

        <footer className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 黄瑞彬 · Built with Next.js & Tailwind CSS</p>
          <p>用一个持续演进的站点，记录技术、产品、自动化与长期主义。</p>
        </footer>
      </div>
    </main>
  );
}
