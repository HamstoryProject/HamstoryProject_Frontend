import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="pt-24 h-screen flex flex-col">
                <article className="h-5/6 flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-bold">HAMSTORY</h1>
                    <div className="flex flex-col items-center">
                        <h2>햄스터들의 모든 이야기</h2>
                        <h2>햄스토리 웹서비스에서 공유해보세요.</h2>
                    </div>
                </article>
                <h4 className="h-1/6 flex items-center justify-center">
                    아래로 스크롤 해 자세히 알아보기
                </h4>
            </section>
            <section className="max-w-screen-xl py-20 flex flex-col gap-20">
                <article className="flex items-center gap-14">
                    <div className="w-96 h-60 bg-neutral-300" />
                    <div className="max-w-md flex flex-col gap-4">
                        <h4 className="font-bold">커뮤니티</h4>
                        <h2 className="font-bold">
                            햄스터들의 다채로운 일상들을 커뮤니티에서 만나보세요
                        </h2>
                        <h4 className="font-light">
                            홈페이지 이용자분들이 공유해주신 사랑스러운
                            가족분들을 만나보실 수 있어요. 햄스터들의 다양한
                            일상을 함께 공유해보세요.
                        </h4>
                        <div className="flex">
                            <Link
                                href={"/"}
                                className="bg-blue-300/60 text-white rounded-full px-5 py-2"
                            >
                                이동하기
                            </Link>
                        </div>
                    </div>
                </article>
                <article className="flex items-center gap-14">
                    <div className="w-96 h-60 bg-neutral-300" />
                    <div className="max-w-md flex flex-col gap-4">
                        <h4 className="font-bold">위키</h4>
                        <h2 className="font-bold">
                            클릭하는 순간, 당신도 햄스터 박사
                        </h2>
                        <h4 className="font-light">
                            다양한 종류의 햄스터를 알아가보세요.
                        </h4>
                        <div className="flex">
                            <Link
                                href={"/"}
                                className="bg-blue-300/60 text-white rounded-full px-5 py-2"
                            >
                                이동하기
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
            <section className="w-screen h-screen flex flex-col items-center justify-center">
                <article className="w-full h-1/2 flex flex-col items-center justify-center bg-neutral-200 gap-4">
                    <h1 className="font-bold">홈페이지는 계속 성장중</h1>
                    <h4>여러분들의 소중한 의견을 항상 환영합니다.</h4>
                    <Link
                        href={"/"}
                        className="bg-blue-300/60 text-white rounded-full px-5 py-2"
                    >
                        피드백 보내기
                    </Link>
                </article>
            </section>
        </>
    );
}
