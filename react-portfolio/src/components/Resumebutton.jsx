import Resume from "../assets/resume.pdf"
import { motion } from "framer-motion";

const Resumebutton = () => {
    return (
        <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center items-center">
            <button className="bg-purple-800 px-4 py-2 rounded">
                <a href={Resume} download='resume'>Resume</a>
            </button>
        </motion.div>
    )
}

export default Resumebutton;