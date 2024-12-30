import { motion } from "framer-motion";
import Image from "next/image";

export default function Landing() {
    return (
        <section className="pt-20 w-screen h-screen flex flex-col">
            <motion.article
                className="relative flex-1 flex flex-col gap-4 items-center justify-center bg-[#3B3B41]/5"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                }}
            >
                <h1 className="font-bold">HAMSTORY</h1>
                <div className="flex flex-col items-center">
                    <h2>햄스터들의 모든 이야기</h2>
                    <h2>햄스토리 웹서비스에서 공유해보세요</h2>
                </div>
                <div className="absolute h-3/4 inset-0 grid grid-cols-5 grid-rows-3 my-auto">
                    {/* 애니메이션 느림, 속도 조정 필요 */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-neutral-300/30 m-1 rounded-lg"
                            animate={{
                                opacity: [0, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: Math.random() * 2.5,
                            }}
                        />
                    ))}
                </div>
            </motion.article>
            <article className="h-20 flex flex-col items-center pt-2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
                    transition={{
                        duration: 2.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8,
                    }}
                >
                    <Image
                        src={"/svgs/arrow-down.svg"}
                        alt="arrow-down"
                        width={40}
                        height={40}
                    />
                </motion.div>
            </article>
        </section>
    );
}
