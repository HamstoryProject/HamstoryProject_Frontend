"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isBoardOpen, setIsBoardOpen] = useState(true);
    const [isHelpOpen, setIsHelpOpen] = useState(true);

    const toggleBoardDropdown = () => setIsBoardOpen((prev) => !prev);
    const toggleHelp = () => setIsHelpOpen((prev) => !prev);

    return (
        <aside className="pt-4 w-72 px-6 h-full fixed gap-2 flex flex-col border-r border-neutral-700 bg-neutral-950">
            {/* 상단 메인 영역 */}
            <ul className="pb-4 border-b border-neutral-800 flex flex-col gap-1">
                <li>
                    <Link
                        href="/community"
                        className="flex gap-3 rounded-xl px-5 py-3 items-center hover:bg-neutral-800"
                    >
                        <Image
                            src="/icons/home.png"
                            alt="home"
                            width={24}
                            height={24}
                        />
                        <p>Home</p>
                    </Link>
                </li>
                <li className="hover:bg-neutral-800 rounded-xl">
                    <Link
                        href={"/community/trending"}
                        className="flex gap-3 px-5 py-3 items-center"
                    >
                        <Image
                            src="/icons/chart.png"
                            alt="chart"
                            width={24}
                            height={24}
                        />
                        <p>실시간 인기글</p>
                    </Link>
                </li>
                <li className="hover:bg-neutral-800 rounded-xl">
                    <Link
                        href={"/community/hot"}
                        className="flex gap-3 px-5 py-3 items-center"
                    >
                        <Image
                            src="/icons/hot.png"
                            alt="hot"
                            width={24}
                            height={24}
                        />
                        <p>HOT 게시물</p>
                    </Link>
                </li>
                <li className="hover:bg-neutral-800 rounded-xl">
                    <Link
                        href={"/community/best"}
                        className="flex gap-3 px-5 py-3 items-center"
                    >
                        <Image
                            src="/icons/crown.png"
                            alt="crown"
                            width={24}
                            height={24}
                        />
                        <p>BEST 게시물</p>
                    </Link>
                </li>
                <li className="hover:bg-neutral-800 rounded-xl">
                    <Link
                        href={"/community/bookmark"}
                        className="flex gap-3 px-5 py-3 items-center"
                    >
                        <Image
                            src="/icons/star.png"
                            alt="star"
                            width={24}
                            height={24}
                        />
                        <p>북마크한 게시글</p>
                    </Link>
                </li>
            </ul>
            {/* 게시판 영역 */}
            <ul className="pb-4 border-b border-neutral-800 flex flex-col gap-1">
                <li
                    className="px-2 flex items-center cursor-pointer"
                    onClick={toggleBoardDropdown}
                >
                    <h1 className="text-neutral-400 flex-auto">게시판</h1>
                    <Image
                        src="/icons/chevronDown.png"
                        alt="chevronDown"
                        width={24}
                        height={24}
                        className="size-2.5 flex-end"
                    />
                </li>
                {isBoardOpen && (
                    <>
                        <li>
                            <Link
                                href={"/community/free"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/pencilText.png"
                                    alt="pencilText"
                                    width={24}
                                    height={24}
                                />
                                <p>자유게시판</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/community/question"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/speechBubble.png"
                                    alt="speechBubble"
                                    width={24}
                                    height={24}
                                />
                                <p>질문게시판</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/community/info"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/note.png"
                                    alt="note"
                                    width={24}
                                    height={24}
                                />
                                <p>정보게시판</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/community/secret"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/lock.png"
                                    alt="lock"
                                    width={24}
                                    height={24}
                                />
                                <p>비밀게시판</p>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
            {/* 도움 및 지원 영역 */}
            <ul className="pb-4 flex flex-col gap-1">
                <li
                    className="px-2 flex items-center cursor-pointer"
                    onClick={toggleHelp}
                >
                    <h1 className="text-neutral-400 flex-auto">도움 및 지원</h1>
                    <Image
                        src="/icons/chevronDown.png"
                        alt="chevronDown"
                        width={24}
                        height={24}
                        className="size-2.5 flex-end"
                    />
                </li>
                {isHelpOpen && (
                    <>
                        <li>
                            <Link
                                href={"/community/notice"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/light.png"
                                    alt="light"
                                    width={24}
                                    height={24}
                                />
                                <p>공지사항</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/community/other"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/other.png"
                                    alt="other"
                                    width={24}
                                    height={24}
                                />
                                <p>기타</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/community/help"}
                                className="px-5 py-3 flex items-center rounded-lg gap-3 hover:bg-neutral-800"
                            >
                                <Image
                                    src="/icons/question.png"
                                    alt="question"
                                    width={24}
                                    height={24}
                                />
                                <p>도움</p>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </aside>
    );
}
