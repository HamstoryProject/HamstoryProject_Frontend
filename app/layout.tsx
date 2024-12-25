import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    style: ["normal"],
});

export const metadata: Metadata = {
    title: "Hamstory",
    description: "햄스토리입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr">
            <body className={`${outfit.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
