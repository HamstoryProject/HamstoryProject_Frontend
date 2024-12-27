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
            <div className="w-[480px] h-64 bg-neutral-300" />
            <div className="max-w-md flex flex-col gap-4">
                <h4 className="font-bold">{category}</h4>
                <h2 className="font-bold">{title}</h2>
                <h4 className="font-light">{description}</h4>
                <div className="flex">
                    <Link
                        href={linkURL}
                        className="bg-neutral-200 text-black rounded-full px-5 py-2"
                    >
                        이동하기
                    </Link>
                </div>
            </div>
        </article>
    );
}
