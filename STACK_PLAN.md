# Tool Stack Plan

这是当前个人博客/个人主页项目的下一阶段接入路线，按你给的截图组件做了对应规划。

## 已经落地

- GitHub：源码托管
- GitHub Pages：免费公开部署
- Next.js + Tailwind CSS：站点展示层
- Claude / Codex：开发提效

## 已经在页面里体现但尚未接入凭据

- Vercel：正式动态部署
- Supabase：数据库与后端
- Clerk：认证与用户身份
- Stripe：支付闭环
- Resend：邮件通知
- Cloudflare：DNS / CDN / 域名层
- Sentry：错误监控
- PostHog：行为分析
- Upstash：缓存 / 限流
- Pinecone：向量检索 / AI 知识能力

## 推荐接入顺序

1. Vercel
2. Supabase
3. Clerk
4. PostHog + Sentry
5. Resend
6. 独立域名 + Cloudflare
7. Stripe
8. Upstash
9. Pinecone

## 为什么这样排序

- 先解决正式部署和数据库，站点才从“展示页”变成“内容系统”
- 再补用户体系、监控和分析，站点才具备运营能力
- 最后接支付、缓存和向量检索，才适合进一步产品化
