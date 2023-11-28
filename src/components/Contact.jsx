import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
    return(
        <section id="contact"
        className="w-[86%] max-w-[1100.8px] mx-auto pb-12 pt-40 lg:grid lg:grid-cols-4">
            <h2 className="font-jetbrains uppercase text-light-txt dark:text-dark-txt text-3xl text-center lg:col-span-1 lg:text-left">Contact</h2>
            <div className="text-light-txt dark:text-dark-txt lg:col-span-3 lg:text-lg">
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:mt-2 lg:my-[60px]"></div>
                <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">I’m always up for a chat.</h3>
                <p className="font-encode mt-6 leading-7 lg:mx-[80px]">Please reach out if you have any questions! I'm happy to jump on a video call. Send me an email at alberto.ledesma.dev@gmail.com</p>
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[60px]"></div>
                <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">Frontend mentor community.</h3>
                <p className="font-encode mt-6 leading-7 lg:mx-[80px]">You can find me in the Frontend Mentor community, where I've started helping others with their code.</p>
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[60px]"></div>
            </div>
            <div className="bg-light-txt text-light-secondary dark:bg-dark-txt dark:text-dark-secondary px-5 py-8 rounded-2xl space-y-5 flex flex-col items-center lg:col-span-4 lg:mt-12 lg:flex-row lg:space-y-0 lg:py-10 lg:justify-evenly">
                <p className="font-koulen text-5xl text-center max-w-[280px] sm:max-w-none lg:text-5.5xl">Let’s get in touch <span className="font-fira">{"=>"}</span></p>
                <div className="flex space-x-8 text-4xl lg:text-5xl">
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href=""
                    ><FaGithub /></a>
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href=""
                    ><SiFrontendmentor /></a>
                    <a
                    className="hover:opacity-75 transition-opacity" 
                    href=""
                    ><IoMdMail /></a>
                </div>
            </div>
        </section>
    )
}