import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "公司章程逐條互動問卷｜AiTOM",
  description: "源點品牌顧問股份有限公司章程逐條互動問卷。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
