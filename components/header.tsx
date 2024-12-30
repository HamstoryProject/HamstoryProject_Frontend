import Link from "next/link";

export default function Header() {
    return (
        <ul className="w-screen h-20 px-16 flex items-center bg-white border-b border-b-neutral-200/50 fixed z-10 top-0 gap-4">
            <li className="mr-2">
                <Link href="/">
                    <h2 className="font-bold">HAMSTORY</h2>
                </Link>
            </li>
            <li>
                <Link href="/community">
                    <h3 className="font-normal">커뮤니티</h3>
                </Link>
            </li>
            <li>
                <Link href="/wiki">
                    <h3 className="font-normal">위키</h3>
                </Link>
            </li>
            <li className="ml-auto">
                <Link href="/login">
                    <h3 className="font-normal">로그인</h3>
                </Link>
            </li>
        </ul>
    );
}
