import Link from "next/link";

interface MainHeroArticleProps {
    category: string;
    title: string;
    description: string;
    linkURL: string;
}

export default function MainHeroArticle({
    category,
    title,
    description,
    linkURL,
}: MainHeroArticleProps) {
    return (
        <article className="flex items-center gap-14">
            <div className="w-[480px] h-64 bg-neutral-500" />
            <div className="max-w-md flex flex-col gap-4">
                <h2 className="text-lg font-bold">{category}</h2>
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-base font-light">{description}</p>
                <div className="flex">
                    <Link
                        href={linkURL}
                        className="text-sm bg-neutral-500 rounded-full px-5 py-2"
                    >
                        이동하기
                    </Link>
                </div>
            </div>
        </article>
    );
}
