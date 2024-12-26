import Link from "next/link";

export default function Header() {
    return (
        <ul className="w-screen h-24 px-16 flex items-center bg-white border-b border-b-neutral-50 fixed z-10 top-0 gap-4">
            <li className="mr-2">
                <Link href="/">
                    <h2>HAMSTORY</h2>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <h3>커뮤니티</h3>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <h3>위키</h3>
                </Link>
            </li>
            <li className="ml-auto">
                <Link href="/">
                    <h3>로그인</h3>
                </Link>
            </li>
        </ul>
    );
}
