import Link from "next/link";

export default async function Header() {
    const user = null;

    return (
        <header>
            <ul className="w-full h-20 md:px-16 px-8 flex items-center bg-neutral-900 fixed z-50 top-0 gap-4">
                <li className="mr-2">
                    <Link href="/" className="md:text-lg text-base font-bold ">
                        HAMSTORY
                    </Link>
                </li>
                <li>
                    <Link href="/community" className="md:text-base text-sm">
                        커뮤니티
                    </Link>
                </li>
                <li>
                    <Link href="/wiki" className="md:text-base text-sm">
                        위키
                    </Link>
                </li>
                <li className="ml-auto">
                    {user ? (
                        <Link
                            href="/profile"
                            className="flex items-center gap-2"
                        >
                            <span className="md:text-base text-sm font-bold"></span>
                        </Link>
                    ) : (
                        <Link href="/login" className="text-base">
                            로그인
                        </Link>
                    )}
                </li>
            </ul>
        </header>
    );
}
