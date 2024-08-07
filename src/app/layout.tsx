import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {GoogleTagManager} from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Font To SVG",
    description: "Generated SVG from Font",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <GoogleTagManager gtmId="G-D4D02KX33M"/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
