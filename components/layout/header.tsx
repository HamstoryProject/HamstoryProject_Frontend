import Link from "next/link";

export default function Header() {
    return (
        <header>
            <ul className="w-screen h-20 px-16 flex items-center bg-neutral-900 border-b border-b-neutral-900/50 fixed z-50 top-0 gap-4">
                <li className="mr-2">
                    <Link href="/" className="font-bold text-lg">
                        HAMSTORY
                    </Link>
                </li>
                <li>
                    <Link href="/community" className="text-base">
                        커뮤니티
                    </Link>
                </li>
                <li>
                    <Link href="/wiki" className="text-base">
                        위키
                    </Link>
                </li>
                <li className="ml-auto">
                    <Link href="/login" className="text-base">
                        로그인
                    </Link>
                </li>
            </ul>
        </header>
    );
}
