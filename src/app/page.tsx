const quickFacts = [
  "深圳工作 / 后台开发工程师",
  "主线：HCI 平台功能开发与维护",
  "长期关注：AI Agent、自动化、个人产品",
  "日常工具：VS Code、ChatGPT、Codex、Claude Code",
];

const featuredTopics = [
  {
    title: "AI Agent 实战",
    description:
      "围绕 Agent 工作流、工具调用、长期记忆、自动化编排和真实业务接入，沉淀能直接复用的工程套路。",
    tag: "Agents",
  },
  {
    title: "后端工程与系统设计",
    description:
      "聚焦平台能力建设、接口设计、稳定性、错误恢复与长期演进，把复杂系统拆成能持续交付的模块。",
    tag: "Backend",
  },
  {
    title: "个人产品与自动化",
    description:
      "从 idea 到上线，持续实验博客、自动化脚本、个人工作流和轻量 SaaS，验证独立开发者的产品路径。",
    tag: "Build",
  },
];

const writingPlans = [
  {
    status: "准备中",
    title: "把 AI Agent 从 demo 做成可长期运行的产品",
    summary:
      "我会拆开讲工具接入、状态持久化、失败重试、权限边界和成本控制，尽量写成一篇工程师看完就能照着搭的文章。",
    meta: "专题长文 · 预计 12 分钟",
  },
  {
    status: "准备中",
    title: "后端工程师为什么应该尽早做自己的个人站点",
    summary:
      "不是为了好看，而是为了沉淀方法论、项目资产和长期信用，让你的能力不只存在于公司代码库里。",
    meta: "思考随笔 · 预计 6 分钟",
  },
  {
    status: "准备中",
    title: "从 0 到 1 做一个个人博客：架构、部署与内容组织",
    summary:
      "记录这个站点本身的搭建过程，包括 Next.js 页面结构、免费部署、路径适配，以及后续如何接入文章系统。",
    meta: "实战笔记 · 预计 8 分钟",
  },
  {
    status: "长期更新",
    title: "AI 工具怎么真正接进日常工程流程",
    summary:
      "我会持续记录在开发、调试、部署、桌面自动化、消息代办场景里，哪些 AI 用法是真能节省时间的，哪些只是看起来厉害。",
    meta: "长期专栏 · 持续更新",
  },
];

const projects = [
  {
    name: "HCI 平台能力建设",
    description:
      "当前工作的主战场。重点是平台功能开发与维护，把需求、接口、权限、稳定性与可维护性组合成一条可持续演进的交付链。",
    stack: "Backend · Platform · Reliability",
  },
  {
    name: "AI Agent 自动化实验室",
    description:
      "围绕工具调用、浏览器操作、桌面自动化、消息编排和工作流执行，持续探索 AI 真正替人完成任务的边界。",
    stack: "AI Agent · Workflow · Automation",
  },
  {
    name: "个人品牌与内容系统",
    description:
      "把博客、项目展示、思考笔记和产品实验串成同一套长期资产，而不是零散地散落在聊天记录和本地文档里。",
    stack: "Brand · Blog · Product",
  },
];

const timeline = [
  {
    year: "Now",
    title: "深圳 · 后台开发工程师",
    description:
      "主要负责 HCI 超融合产品的平台功能开发与维护。日常关注的是系统稳定性、接口设计、复杂需求落地和长期可维护性。",
  },
  {
    year: "2025",
    title: "系统化研究 AI 工具链",
    description:
      "开始把 ChatGPT、Codex、Claude Code 等工具从“辅助问答”升级到“直接接入开发流程”，逐步形成自己的 AI 协作方式。",
  },
  {
    year: "Next",
    title: "构建自己的产品矩阵",
    description:
      "从个人博客与项目主页开始，继续延展到 AI 工作流、效率工具和能真实服务于个人生产力的轻量产品。",
  },
];

const principles = [
  {
    title: "先跑起来，再持续重构",
    description:
      "我更相信小步快跑、快速验证和持续演进，而不是一开始就追求过度设计。",
  },
  {
    title: "技术必须服务真实问题",
    description:
      "无论是平台开发还是 AI agent，我更关注它是否真的省时间、降复杂度、能稳定交付。",
  },
  {
    title: "把零散经验整理成资产",
    description:
      "写博客、做主页、做自动化，本质上都是把短期经验变成长期可复用的积累。",
  },
];

const toolbox = [
  "Java / Go / Backend Engineering",
  "Next.js / TypeScript / Tailwind CSS",
  "ChatGPT / Codex / Claude Code",
  "Agent Workflow / Automation / Integration",
  "GitHub / Git / GitHub Pages",
  "个人知识沉淀与产品化思维",
];

const stackCards = [
  {
    name: "Claude / Codex",
    role: "编码 · AI Coding",
    cost: "$20/月级别",
    status: "已在日常使用",
    description: "用于页面开发、代码重构、调试分析和工作流加速，是当前个人开发的第一生产力层。",
  },
  {
    name: "Vercel",
    role: "部署 · Deploy",
    cost: "Free 起步",
    status: "预留接入",
    description: "未来切换到更完整的动态部署时，会优先接到 Vercel，承接 Next.js 的正式生产环境。",
  },
  {
    name: "Supabase",
    role: "后端 · Backend / DB",
    cost: "Free 起步",
    status: "架构已预留",
    description: "后续会承接文章、项目、访客线索、订阅数据和个人内容后台，作为托管数据库与后端能力底座。",
  },
  {
    name: "Namecheap",
    role: "域名 · Domain",
    cost: "$12/年级别",
    status: "待购买",
    description: "当站点稳定后，会切到独立域名，形成真正属于自己的长期品牌资产。",
  },
  {
    name: "GitHub",
    role: "版本控制 · Git",
    cost: "Free",
    status: "已接入",
    description: "当前代码托管、版本历史与公开协作入口，已经作为源码主仓库使用。",
  },
  {
    name: "Clerk",
    role: "认证 · Auth",
    cost: "Free 起步",
    status: "预留接入",
    description: "后续如果开放后台、会员区或订阅用户访问，将优先使用 Clerk 承接登录与用户身份体系。",
  },
  {
    name: "Stripe",
    role: "支付 · Payment",
    cost: "2.9%+",
    status: "预留接入",
    description: "等个人产品或付费内容真正跑起来后，再接入订阅和支付闭环。",
  },
  {
    name: "Resend",
    role: "邮件 · Email",
    cost: "Free 起步",
    status: "预留接入",
    description: "用于订阅通知、文章更新、联系表单自动回复和未来产品邮件能力。",
  },
  {
    name: "Cloudflare",
    role: "DNS · CDN",
    cost: "Free",
    status: "预留接入",
    description: "后续绑定独立域名后，用于 DNS、CDN 和基础安全加速层。",
  },
  {
    name: "Sentry",
    role: "错误追踪 · Error",
    cost: "Free 起步",
    status: "预留接入",
    description: "当站点进入真正运营状态后，会接入错误监控，避免线上问题只靠手工发现。",
  },
  {
    name: "PostHog",
    role: "分析 · Analytics",
    cost: "Free 起步",
    status: "预留接入",
    description: "用于观察访问来源、页面行为、文章点击和后续产品转化，而不是只凭感觉改页面。",
  },
  {
    name: "Upstash",
    role: "Redis · Cache",
    cost: "Free 起步",
    status: "预留接入",
    description: "后续如果有订阅、限流、缓存或异步任务，会作为轻量缓存/消息能力优先接入。",
  },
  {
    name: "Pinecone",
    role: "向量数据库 · Vector",
    cost: "Free 起步",
    status: "预留接入",
    description: "如果后面做 AI 知识库、内容检索或个人知识问答，会用它承接向量检索层。",
  },
];

const architecture = [
  {
    layer: "展示层",
    value: "Next.js + Tailwind CSS",
    description: "负责首页、文章、项目展示和后续内容页，当前已经跑在静态导出模式。",
  },
  {
    layer: "代码与协作",
    value: "GitHub",
    description: "承接源码、提交历史、分支协作和后续自动化部署触发点。",
  },
  {
    layer: "正式部署",
    value: "Vercel",
    description: "当前先用 GitHub Pages 公开上线，后续切到 Vercel 承接完整动态能力。",
  },
  {
    layer: "数据库与后端",
    value: "Supabase",
    description: "后续放文章数据、项目数据、订阅线索与内容后台，同时承接存储与服务端能力。",
  },
  {
    layer: "认证与用户",
    value: "Clerk",
    description: "如果未来开放后台、私密内容或会员功能，用来承接登录、会话与身份管理。",
  },
  {
    layer: "支付闭环",
    value: "Stripe + Resend",
    description: "将来一旦有付费内容、服务或产品，就把支付和邮件通知一起补上。",
  },
  {
    layer: "观测与增长",
    value: "Sentry + PostHog + Upstash",
    description: "分别负责错误监控、行为分析、缓存/限流，让站点从展示页进化成能运营的系统。",
  },
  {
    layer: "AI 能力层",
    value: "Pinecone",
    description: "为后续个人知识库问答、内容语义检索和 Agent 内容能力预留扩展位。",
  },
];

const nextSteps = [
  "补充真实文章内容，而不是只放文章计划",
  "增加项目详情页与文章详情页",
  "切换到 Vercel + Supabase 的正式动态架构",
  "接入统计、错误监控、邮件订阅与独立域名",
];

export default function Home() {
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
                <p>3. 已经预留出向正式动态架构迁移的方向，后续不需要推倒重来。</p>
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
