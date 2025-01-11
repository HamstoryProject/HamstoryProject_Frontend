import { motion } from "framer-motion";
import ScrollIndicator from "./scroll-indicator";

export default function Landing() {
    return (
        <section className="pt-20 w-screen h-screen flex flex-col">
            <motion.section
                className="relative flex-1 flex"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <article className="flex flex-col items-center bg-[#3B3B41]/25 z-10 w-full h-full justify-center text-white backdrop-blur-sm gap-1">
                    <h1 className="font-bold text-3xl">HAMSTORY</h1>
                    <div className="flex flex-col items-center text-xl">
                        <h2>햄스터들의 모든 이야기</h2>
                        <h2>햄스토리 웹서비스에서 공유해보세요</h2>
                    </div>
                </article>
                <div className="absolute h-full inset-0 grid grid-cols-4 grid-rows-3 my-auto">
                    {/* 애니메이션 느림, 속도 조정 필요 */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="m-1 rounded-md bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/jpgs/${i + 1}.jpg')`,
                            }}
                            animate={{
                                opacity: [0, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1 + Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </motion.section>
            <ScrollIndicator />
        </section>
    );
}
