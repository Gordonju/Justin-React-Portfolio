import { RiReactjsLine } from "react-icons/ri"; 
import { TbBrandNextjs } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <div className="mt-2">React</div>
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <TbBrandNextjs className="text-7xl text-black" />
                    <div className="mt-2">Next.js</div>
                </motion.div>

                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <SiPhp className="text-7xl text-blue-600" />
                    <div className="mt-2">PHP</div>
                </motion.div>

                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <SiTailwindcss className="text-7xl text-sky-400" />
                    <div className="mt-2">Tailwind CSS</div>
                </motion.div>

                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                    <div className="mt-2">Node.js</div>
                </motion.div>

                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
                >
                    <SiMysql className="text-7xl text-orange-600" />
                    <div className="mt-2">MySQL</div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
