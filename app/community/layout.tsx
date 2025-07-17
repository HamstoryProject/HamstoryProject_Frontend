import Sidebar from "@/components/layout/sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen">
            <Sidebar />
            {children}
        </div>
    );
}
