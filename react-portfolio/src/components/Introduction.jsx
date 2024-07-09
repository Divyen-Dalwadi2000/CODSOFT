import { INTRO_CONTENT } from "../constants/index";
import Profile from "../assets/profile.jpg"
import { motion } from "framer-motion"
import { PROFILE_IMG } from "../constants/index";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Introduction = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-12 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Divyen Dalwadi</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-500 via-yellow-600 to-purple-500 bg-clip-text text-transparent text-1xl tracking-tight lg:text-2xl ">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light ">
                            {INTRO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={PROFILE_IMG} alt="Profile Image" className="rounded-3xl  max-w-86 transition-transform duration-200 hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction; 