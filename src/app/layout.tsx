import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {GoogleTagManager} from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "实用工具集 | 提升工作效率的精选工具",
    description: "精选高质量工具网站集合，包括 SVG 生成器、思维导图工具等，帮助您提升工作效率。",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
        <GoogleTagManager gtmId="G-D4D02KX33M"/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
