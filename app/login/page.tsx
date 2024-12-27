import Link from "next/link";

export default function Login() {
    return (
        <section className="pt-24 h-screen flex flex-col items-center justify-center">
            <h1>HAMSTORY</h1>
            <article className="flex w-full">
                <Link
                    href="/login"
                    className="bg-neutral-200 w-1/2 py-2 text-center"
                >
                    로그인
                </Link>
                <Link
                    href="/join"
                    className="bg-neutral-200 w-1/2 py-2 text-center"
                >
                    회원가입
                </Link>
            </article>
            <form className="flex flex-col w-full">
                <input className="w-96 py-2" />
                <input className="w-96 py-2" />
                <button className="bg-neutral-200 py-2">로그인</button>
            </form>
        </section>
    );
}
