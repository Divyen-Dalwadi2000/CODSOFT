import { CONTACT } from "../constants/index"
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-4xl text-center py-10 text-neutral-500 bg-gradient-to-r from-red-700 to-blue-600 bg-clip-text text-transparent">Get in Touch</motion.div>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="my-4">{CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="my-4">{CONTACT.phoneNo}</motion.p>
                <a href="#" className="border-b">{CONTACT.email}</a>
            </div>
        </div>
    )
}


export default Contact;