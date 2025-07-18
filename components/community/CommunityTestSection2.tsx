import Image from "next/image";
import Link from "next/link";

export default function CommunityTestSection2() {
    return (
        <section className="flex flex-col gap-2 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
            <article className="w-full flex">
                <div className=" flex gap-2 items-center text-sm flex-auto">
                    <div className="size-6 rounded-full bg-white" />
                    <Link href="/profile">Test</Link>
                    <p>&#183;</p>
                    <p className="text-neutral-400">21시간 전</p>
                </div>
                <Image
                    src="/icons/meatballs.png"
                    alt="meatballs"
                    width={24}
                    height={24}
                    className="size-6"
                />
            </article>
            <article>
                <h1 className="text-xl font-bold my-2">Awesome</h1>
                <p className="text-neutral-300">WE LUV LAMA !!</p>
            </article>
            <article className="flex gap-2 text-neutral-300">
                <div className="flex gap-1 px-2.5 py-1 bg-neutral-800 rounded-2xl items-center">
                    <Image
                        src="/icons/bubble.png"
                        alt="bubble"
                        width={14}
                        height={14}
                        className="size-4"
                    />
                    <p className="text-sm">3.4k</p>
                </div>
                <div className="flex gap-1 px-2.5 py-1 bg-neutral-800 rounded-2xl items-center">
                    <Image
                        src="/icons/heart.png"
                        alt="heart"
                        width={14}
                        height={14}
                        className="size-4"
                    />
                    <p className="text-sm">2.4k</p>
                </div>
                <div className="flex gap-1 px-2.5 py-1 bg-neutral-800 rounded-2xl items-center">
                    <Image
                        src="/icons/share.png"
                        alt="share"
                        width={14}
                        height={14}
                        className="size-4"
                    />
                    <p className="text-sm">share</p>
                </div>
            </article>
        </section>
    );
}
