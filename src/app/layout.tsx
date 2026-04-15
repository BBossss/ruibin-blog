import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruibin-blog.vercel.app"),
  title: {
    default: "黄瑞彬｜个人博客",
    template: "%s｜黄瑞彬",
  },
  description:
    "黄瑞彬的个人博客与项目主页，记录后端工程、AI Agent、自动化工作流与个人产品实践。",
  keywords: ["黄瑞彬", "个人博客", "后端开发", "AI Agent", "自动化", "深圳"],
  openGraph: {
    title: "黄瑞彬｜个人博客",
    description:
      "记录后端工程、AI Agent、自动化工作流与个人产品实践的个人站点。",
    url: "https://ruibin-blog.vercel.app",
    siteName: "黄瑞彬｜个人博客",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "黄瑞彬｜个人博客",
    description:
      "记录后端工程、AI Agent、自动化工作流与个人产品实践的个人站点。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
