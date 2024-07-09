import { RiReactjsLine } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
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
            repeatType: "reverse"
        },
    },
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <motion.h1
            whileInView={{y:0 , opacity:1}}
            initial={{y:-100 , opacity:0}}
            transition={{duration:1.5}}
            className="py-20 text-center text-4xl text-neutral-500 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">Technologies</motion.h1>
            <motion.div
                whileInView={{x:0 ,opacity:1}}
                initial={{x:-100 , opacity:0 }}
                transition={{duration:1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"

                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <DiRuby className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <SiRubyonrails className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <FaJava className="text-7xl text-cyan-900" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <FaNode className="text-7xl text-green-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <RiJavascriptFill className="text-7xl text-yellow-200" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="border-4 rounded-2xl border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-cyan-700" />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Technologies;