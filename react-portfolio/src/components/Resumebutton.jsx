import Resume from "../assets/resume.pdf"
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";


const Resumebutton = () => {
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center">
            <button className="flex justify-center items-center bg-purple-800 px-4 py-2 rounded">
                <FaDownload />
                <a href={Resume} download='resume' className="px-2">Resume</a>
            </button>
        </motion.div>
    )
}

export default Resumebutton;