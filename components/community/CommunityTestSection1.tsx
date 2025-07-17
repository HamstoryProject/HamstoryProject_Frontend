import Link from "next/link";

export default function CommunityTestSection1() {
    return (
        <section className="flex flex-col gap-4 bg-neutral-800/50 p-4 rounded-xl border border-neutral-800">
            <article className="w-full flex gap-2 items-center text-sm">
                <div className="size-6 rounded-full bg-white" />
                <Link href="/profile">Test</Link>
                <p>&#183;</p>
                <p className="text-neutral-400">21시간 전</p>
            </article>
            <article>
                <h1 className="text-xl font-bold my-2">
                    AITAH for not wanting to cook for my gf anymore because she
                    is a picky eater ?
                </h1>
                <p className="text-neutral-300">
                    My girlfriend however eats like a 7 year old on a chicken
                    nugget diet. She doesn’t eat beef, pork, or fish only
                    chicken. She doesn't eat most greens unless they’re in a
                    burger and the texture isn't noticeable. No mushrooms, no
                    beans etc..,
                </p>
            </article>
            <article className="w-full h-96 bg-neutral-300 rounded-xl" />
            <article className="flex gap-2 items-center text-neutral-300">
                <div className="px-2.5 py-1 bg-neutral-700 rounded-2xl">
                    3.4k
                </div>
                <div className="px-2.5 py-1 bg-neutral-700 rounded-2xl">
                    2.4k
                </div>
                <div className="px-2.5 py-1 bg-neutral-700 rounded-2xl">
                    Share
                </div>
            </article>
        </section>
    );
}
