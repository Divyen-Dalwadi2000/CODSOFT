import Aboutprofile from "../assets/1.png"
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion"
import { ABOUT_IMG } from "../constants/index";
const About = () => {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1
                 whileInView={{y:0 , opacity:1}}
                 initial={{y:-100 , opacity:0}}
                 transition={{duration:1.5}}
                className="my-20 text-center text-4xl">About<span className="text-neutral-500 bg-gradient-to-r from-pink-500  to-purple-500 bg-clip-text text-transparent"> Me</span>
                </motion.h1>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="flex items-center justify-center relative bg-gradient-to-b from-yellow-500 rounded-3xl">
                            <img src={ABOUT_IMG} alt="about image" className="w-auto transition-transform duration-200 hover:scale-105" />
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-center lg:justify-start">
                            <motion.p
                                whileInView={{ x: 0, opacity: 1 }}
                                initial={{ x: 100, opacity: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="my-2 max-w-xl py-20">{ABOUT_TEXT} </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;