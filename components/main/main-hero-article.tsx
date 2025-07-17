import Image from "next/image";
import Link from "next/link";

interface MainHeroArticleProps {
    category: string;
    title: string;
    description: string;
    linkURL: string;
    imageSrc: string;
}

export default function MainHeroArticle({
    category,
    title,
    description,
    linkURL,
    imageSrc,
}: MainHeroArticleProps) {
    return (
        <article className="w-full flex items-center gap-14">
            <Image
                src={imageSrc}
                alt={title}
                width={480}
                height={256}
                className="object-cover"
            />
            <div className="md:max-w-md px-10 flex flex-col gap-4 items-center md:items-start">
                <h2 className="md:text-lg text-base font-bold self-start">
                    {category}
                </h2>
                <h1 className="md:text-xl text-lg font-bold">{title}</h1>
                <p className="md:text-base text-sm font-light md:text-start text-center ">
                    {description}
                </p>
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
