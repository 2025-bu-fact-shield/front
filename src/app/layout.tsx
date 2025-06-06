import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts (Geist Sans & Mono)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 프로젝트에 맞게 메타데이터 수정
export const metadata: Metadata = {
  title: "FactShield - 뉴스 팩트체크 시각화",
  description: "뉴스 URL 기반으로 팩트 점수를 시각화하는 Next.js 애플리케이션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
