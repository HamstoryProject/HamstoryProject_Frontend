import Link from "next/link";

export default function Feedback() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <article className="w-full h-1/2 flex flex-col items-center justify-center bg-neutral-600 gap-6 p-10">
                <h1 className="md:text-2xl text-xl font-bold">
                    홈페이지는 계속 성장중
                </h1>
                <h2 className="md:text-lg text-base">
                    여러분들의 소중한 의견을 항상 환영합니다.
                </h2>
                <Link
                    href={"/feedback"}
                    className="text-sm bg-neutral-500 rounded-full px-5 py-2"
                >
                    피드백 보내기
                </Link>
            </article>
        </section>
    );
}
