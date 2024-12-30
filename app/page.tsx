"use client";

import Landing from "@/components/landing";
import MainHeroArticle from "@/components/main-hero-article";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Landing />
            <section className="max-w-screen-xl py-20 flex flex-col gap-20">
                <MainHeroArticle
                    category={"커뮤니티"}
                    title={
                        "햄스터들의 다채로운 일상들을 커뮤니티에서 만나보세요"
                    }
                    description={
                        "홈페이지 이용자분들이 공유해주신 사랑스러운 가족분들을 만나보실 수 있어요. 햄스터들의 다양한 일상을 함께 공유해보세요."
                    }
                    linkURL={"/community"}
                />
                <MainHeroArticle
                    category={"위키"}
                    title={"클릭하는 순간, 당신도 햄스터 박사"}
                    description={"다양한 종류의 햄스터를 알아가보세요."}
                    linkURL={"/wiki"}
                />
            </section>
            <section className="w-screen h-screen flex flex-col items-center justify-center">
                <article className="w-full h-1/2 flex flex-col items-center justify-center bg-neutral-100 gap-4">
                    <h1 className="font-bold">홈페이지는 계속 성장중</h1>
                    <h4>여러분들의 소중한 의견을 항상 환영합니다.</h4>
                    <Link
                        href={"/feedback"}
                        className="bg-neutral-200 text-black rounded-full px-5 py-2"
                    >
                        피드백 보내기
                    </Link>
                </article>
            </section>
        </>
    );
}
