import { motion } from "framer-motion";
import ScrollIndicator from "./scroll-indicator";

export default function Landing() {
    return (
        <section className="w-full h-screen flex flex-col">
            <motion.section
                className="relative flex-1 flex"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <div className="w-full h-full flex flex-col bg-gradient-to-b from-neutral-900/60 to-neutral-900 z-10 justify-center text-white backdrop-blur-sm">
                    <article className="flex flex-col items-center text-center px-10 gap-2">
                        <h1 className="font-bold md:text-3xl text-2xl">
                            HAMSTORY
                        </h1>
                        <div className="flex flex-col items-center md:text-xl text-lg">
                            <h2>햄스터들의 모든 이야기</h2>
                            <h2>오직 햄스토리 웹서비스에서</h2>
                        </div>
                    </article>
                </div>
                <div className="w-full absolute h-full inset-0 grid md:grid-cols-4 grid-cols-2 grid-rows-3 gap-1">
                    {/* 애니메이션 느림, 속도 조정 필요 */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="rounded-md bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/jpgs/${i + 1}.jpg')`,
                            }}
                            animate={{
                                opacity: [0, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 1 + Math.random(),
                            }}
                        />
                    ))}
                </div>
            </motion.section>
            <ScrollIndicator />
        </section>
    );
}
