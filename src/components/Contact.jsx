import { motion } from "framer-motion";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
    return(
        <section id="contact"
        className="w-[86%] max-w-[1100.8px] mx-auto pb-12 pt-20 overflow-hidden lg:pt-40 lg:grid lg:grid-cols-4">
            <h2 className="font-jetbrains uppercase text-light-txt dark:text-dark-txt text-3xl text-center mb-[50px] lg:mb-[0] lg:col-span-1 lg:text-left">Contact</h2>
            <div className="text-light-txt dark:text-dark-txt lg:col-span-3 lg:text-lg">
                <motion.div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 mt-0 lg:mt-2 lg:my-[60px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: .4, delay: 0 }}
                />
                <motion.div
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, delay: .3 }}
                >
                    <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">I’m always up for a chat.</h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, delay: .6 }}
                >
                    <p className="font-encode mt-6 leading-7 lg:mx-[80px]">If you have any queries, feel free to contact me! I would be glad to schedule a video call with you. You can drop me an email at alberto.ledesma.dev@gmail.com.</p>
                </motion.div>
                <motion.div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[60px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: .4, delay: 0 }}
                />
                <motion.div
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, delay: .3 }}
                >
                    <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">Frontend mentor community.</h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, delay: .6 }}
                >
                    <p className="font-encode mt-6 leading-7 lg:mx-[80px]">I have initiated assisting others with their code in the Frontend Mentor community. You can spot me there.</p>
                </motion.div>
                <motion.div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[60px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: .4, delay: 0 }}
                />
            </div>
            <motion.div className="bg-light-txt text-light-secondary dark:bg-dark-txt dark:text-dark-secondary px-5 py-8 rounded-2xl space-y-5 flex flex-col items-center lg:col-span-4 lg:mt-12 lg:flex-row lg:space-y-0 lg:py-10 lg:justify-evenly"
                initial={{ opacity: 0, translateY: 80 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6, delay: .6 }}
            >
                <p className="font-koulen text-5xl text-center max-w-[280px] sm:max-w-none lg:text-5.5xl">Let’s get in touch <span className="font-fira">{"=>"}</span></p>
                <div className="flex space-x-8 text-4xl lg:text-5xl">
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href="https://github.com/AlbertoLed"
                    target="_blank"
                    ><FaGithub /></a>
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href="https://www.frontendmentor.io/profile/AlbertoLed"
                    target="_blank"
                    ><SiFrontendmentor /></a>
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href="mailto:alberto.ledesma.dev@gmail.com"
                    ><IoMdMail /></a>
                </div>
            </motion.div>
        </section>
    )
}