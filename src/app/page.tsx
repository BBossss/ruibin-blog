const featuredTopics = [
  {
    title: "AI Agent 实战",
    description:
      "围绕 Agent 工作流、工具调用、记忆系统与自动化编排，记录真实项目中的可复用打法。",
    tag: "Agents",
  },
  {
    title: "后端工程与系统设计",
    description:
      "关注平台功能开发、接口设计、可观测性与稳定性建设，把复杂系统拆成能持续演进的模块。",
    tag: "Backend",
  },
  {
    title: "个人产品与自动化",
    description:
      "从 idea 到上线，持续实验 AI 工具、自动化脚本与轻量 SaaS，把效率变成真正可交付的产品。",
    tag: "Build",
  },
];

const writings = [
  {
    title: "把 AI Agent 从 demo 做成可长期运行的产品",
    summary:
      "从工具接入、错误恢复、状态持久化到成本控制，整理一套适合工程团队落地的实践框架。",
    meta: "专题长文 · 预计 12 分钟",
  },
  {
    title: "个人开发者如何快速搭一个能上线的博客 / 产品主页",
    summary:
      "用最少的依赖做出清晰的信息结构、品牌感和部署链路，让主页既像名片也像内容入口。",
    meta: "实战笔记 · 预计 6 分钟",
  },
  {
    title: "后端工程师做产品时，最值得先补的三种能力",
    summary:
      "不是盲目补前端，而是优先建立叙事、交互抽象和快速验证的能力闭环。",
    meta: "思考随笔 · 预计 5 分钟",
  },
];

const projects = [
  {
    name: "HCI 平台能力建设",
    description:
      "聚焦平台功能开发与维护，把复杂需求落成稳定、可扩展、可协作的后端模块。",
    stack: "Backend · Platform · Reliability",
  },
  {
    name: "AI Agent 自动化实验室",
    description:
      "围绕工具调用、桌面自动化、消息编排和工作流执行，持续探索 AI 真正替人干活的边界。",
    stack: "AI Agent · Workflow · Automation",
  },
  {
    name: "个人品牌与内容系统",
    description:
      "把博客、项目展示、笔记输出与产品落地串成同一套个人增长基础设施。",
    stack: "Brand · Blog · Product",
  },
];

const timeline = [
  {
    year: "Now",
    title: "深圳 · 后端开发工程师",
    description:
      "主力投入平台功能开发与维护，同时把 AI agent、自动化和个人产品化能力纳入长期主线。",
  },
  {
    year: "2025",
    title: "系统化研究 AI 工具链",
    description:
      "持续使用 ChatGPT、Codex、Claude Code 等工具，把“会用 AI”升级为“能把 AI 接进工程流程”。",
  },
  {
    year: "Next",
    title: "构建自己的产品矩阵",
    description:
      "从个人博客开始，逐步延展到 AI 工作流、效率工具和可持续迭代的轻量 SaaS。",
  },
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
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#topics">
              主题
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#writing">
              文章
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#projects">
              项目
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-400/40 hover:text-white" href="#contact">
              联系
            </a>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl shadow-cyan-950/20 sm:p-10">
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Backend Engineer · AI Agent Builder · 深圳
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              把后端工程能力、AI Agent 和产品思维，
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
                连接成一套能持续放大的个人系统。
              </span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              我在深圳做平台功能开发，也在持续构建自己的内容与产品基础设施。这个站点会记录我如何用工程化方式落地
              AI agent、自动化工作流与个人项目，把想法变成真正可运行、可部署、可迭代的系统。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#writing"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-cyan-200"
              >
                阅读最新文章
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                查看项目与方向
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-black/25 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Focus</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-3xl font-semibold text-white">AI Agent</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    工具调用、自动化编排、长期记忆、可恢复执行。
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">Backend</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    平台能力建设、接口设计、稳定性与工程质量。
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">Build</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    个人博客、产品主页、自动化工具与小型 SaaS 实验。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Now Building</p>
              <p className="mt-4 text-xl font-semibold text-white">
                一个面向长期积累的个人博客与项目入口
              </p>
              <p className="mt-3 text-sm leading-7 text-cyan-50/80">
                不是只放简历，而是把文章、项目、实验与思考都沉淀为自己的公开资产。
              </p>
            </div>
          </div>
        </section>

        <section id="topics" className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Topics</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">我会长期写的三个方向</h3>
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

        <section id="writing" className="mt-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-black/20 p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Writing</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">精选文章</h3>
            <div className="mt-8 space-y-5">
              {writings.map((post, index) => (
                <article
                  key={post.title}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">0{index + 1}</p>
                  <h4 className="mt-3 text-xl font-medium text-white">{post.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{post.summary}</p>
                  <p className="mt-4 text-sm text-cyan-200/85">{post.meta}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-7 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Perspective</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">我想把这个站点写成什么样</h3>
            <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-300">
              <p>
                我不想做一个只有头像、职位和联系方式的静态名片，而是想把这个站点当成一个长期演进的个人操作系统。
              </p>
              <p>
                对外，它是个人品牌、内容与项目展示的入口；对内，它会倒逼我把散落在对话、代码和实验中的想法整理成可复用的方法论。
              </p>
              <p>
                所以这里的文章不会只讲概念，我会更偏向记录真实项目里怎么做、为什么这么做、踩过哪些坑，以及哪些流程可以沉淀成标准化资产。
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Projects</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">正在做和接下来会做的事</h3>
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
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/70">Profile</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">工作与成长时间线</h3>
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
            这个站点接下来会继续补充文章、项目细节和实验记录。你也可以把它理解成我公开构建个人产品矩阵的起点。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">所在地：深圳</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">身份：后台开发工程师</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">关注：AI Agent / 自动化 / 产品化</span>
          </div>
        </section>

        <footer className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 黄瑞彬 · Built with Next.js & Tailwind CSS</p>
          <p>用一个持续演进的站点，记录技术、产品与长期主义。</p>
        </footer>
      </div>
    </main>
  );
}
