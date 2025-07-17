import CommunityTestSection1 from "@/components/community/CommunityTestSection1";
import CommunityTestSection2 from "@/components/community/CommunityTestSection2";
import Image from "next/image";
import Link from "next/link";

export default function Community() {
    return (
        <div className="w-full flex justify-center py-4">
            <section className="w-[840px] flex flex-col gap-4 relative">
                <section className="pb-4 flex border-b border-neutral-800 gap-2">
                    <article className="px-3 py-2 flex gap-1.5 items-center text-neutral-300 hover:bg-neutral-700 rounded-full text-sm">
                        <p>베스트</p>
                        <Image
                            src="/icons/chevronDown.png"
                            alt="chevronDown"
                            width={10}
                            height={10}
                            className="size-2.5"
                        />
                    </article>
                    <article className="px-3 py-2 flex gap-1.5 items-center text-neutral-300 hover:bg-neutral-700 rounded-full text-sm">
                        <p>최근</p>
                        <Image
                            src="/icons/chevronDown.png"
                            alt="chevronDown"
                            width={10}
                            height={10}
                            className="size-2.5"
                        />
                    </article>
                    <article className="px-3 py-2 flex gap-1.5 items-center text-neutral-300 hover:bg-neutral-700 rounded-full text-sm">
                        <Image
                            src="/icons/drop-down.png"
                            alt="drop-down"
                            width={18}
                            height={18}
                        />
                        <Image
                            src="/icons/chevronDown.png"
                            alt="chevronDown"
                            width={10}
                            height={10}
                            className="size-2.5"
                        />
                    </article>
                </section>
                <CommunityTestSection1 />
                <CommunityTestSection2 />
                <section className="w-80 flex flex-col absolute -right-[22rem] gap-4">
                    <article className="w-80 flex flex-col gap-2 p-4 border border-neutral-800 rounded-xl">
                        <div className="flex items-center">
                            <h1 className="text-lg font-bold flex-auto">
                                실시간 인기 글
                            </h1>
                            <Link
                                href="/community/trending"
                                className="flex-1 text-end text-sm text-neutral-400"
                            >
                                더 보기
                            </Link>
                        </div>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">WHAT ???</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">34</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">4</p>
                                </div>
                            </div>
                        </article>
                    </article>
                    <article className="w-80 flex flex-col gap-2 p-4 border border-neutral-800 rounded-xl">
                        <div className="flex items-center">
                            <h1 className="text-lg font-bold flex-auto">
                                HOT 게시물
                            </h1>
                            <Link
                                href="/community/hot"
                                className="flex-1 text-end text-sm text-neutral-400"
                            >
                                더 보기
                            </Link>
                        </div>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">
                                AITAH for not wanting to cook...
                            </h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">3424</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">2421</p>
                                </div>
                            </div>
                        </article>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">Awesome</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">224</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">124</p>
                                </div>
                            </div>
                        </article>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">WHAT ???</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">34</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">4</p>
                                </div>
                            </div>
                        </article>
                    </article>
                    <article className="w-80 flex flex-col gap-2 p-4 border border-neutral-800 rounded-xl">
                        <div className="flex items-center">
                            <h1 className="text-lg font-bold flex-auto">
                                BEST 게시물
                            </h1>
                            <Link
                                href="/community/best"
                                className="flex-1 text-end text-sm text-neutral-400"
                            >
                                더 보기
                            </Link>
                        </div>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">
                                AITAH for not wanting to cook...
                            </h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">3424</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">2421</p>
                                </div>
                            </div>
                        </article>
                        <article className="p-4 gap-1 flex flex-col font-light text-sm justify-center hover:bg-neutral-800">
                            <h2 className="font-bold">Awesome</h2>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/bubble.png"
                                        alt="awesomeBubble"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">224</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image
                                        src="/icons/heart.png"
                                        alt="awesomeHeart"
                                        width={14}
                                        height={14}
                                    />
                                    <p className="text-neutral-400">124</p>
                                </div>
                            </div>
                        </article>
                    </article>
                </section>
            </section>
        </div>
    );
}
