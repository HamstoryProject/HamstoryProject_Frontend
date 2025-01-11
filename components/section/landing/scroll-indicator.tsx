import { motion } from "framer-motion";
import Image from "next/image";

export default function ScrollIndicator() {
    return (
        <section className="h-20 flex flex-col items-center pt-2">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 1, 1, 1, 0],
                    y: [0, 12, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5,
                }}
            >
                <Image
                    src={"/svgs/arrow-down.svg"}
                    alt="arrow-down"
                    width={40}
                    height={40}
                />
            </motion.div>
        </section>
    );
}
