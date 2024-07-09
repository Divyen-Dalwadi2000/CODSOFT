import { PROJECTS } from "../constants/index"
import { motion } from "framer-motion"


const Project = () => {
    return (
        <div className="border-b border-neutral-900 mb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center text-4xl py-20   text-neutral-500 bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">Projects</motion.h1>
            {PROJECTS.map((project, index) => {
                return (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/4 flex justify-center">
                            <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-xl lg:w-3/4 py-2">
                            <h6>{project.title}</h6>
                            <p className="mb-4 text-sm text-neutral-500">{project.description}</p>
                            {
                                project.technologies.map((tech, index) => {
                                    return (
                                        <span key={index} className="mr-3 mt-4  bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-600">
                                            {tech}
                                        </span>
                                    )
                                })
                            }
                        </motion.div>
                    </div>

                )
            })}
        </div>
    )
}

export default Project;

