import Footer from "@/components/footer";
import Header from "@/components/header";
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
            <body className={`${outfit.className} flex flex-col antialiased`}>
                <Header />
                <main className="flex-1 pt-24 min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
