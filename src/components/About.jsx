import personalPhoto from "../../public/personal-photo.png"

export default function About() {
    return(
        <section id="about"
        className="w-[86%] max-w-[1100.8px] mx-auto grid gap-y-10 py-20 md:gap-y-5 lg:py-40">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:grid-rows-1">
                <h2 className="font-jetbrains uppercase text-3xl text-center text-light-txt dark:text-dark-txt md:col-span-3 lg:col-span-1 lg:text-left">Who I am?</h2>
                <img 
                className="w-full"
                src={personalPhoto} 
                alt="personal photo" />
                <div className="border-2 border-light-txt dark:border-dark-txt rounded-xl p-[6%] md:col-span-2 lg:col-span-2">
                    <p className="text-light-txt dark:text-dark-txt font-encode text-2.1xl xl:text-2.5xl">I’m from Chihuahua, México. I have a passion for building interactive and user-friendly websites that not only look great but also provide a seamless user experience.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-5 lg:grid-cols-12">
                <div className="border-2 border-light-txt dark:border-dark-txt p-[6%] rounded-xl flex flex-col md:col-span-2 lg:col-span-6 lg:col-start-2">
                    <p className="text-light-txt dark:text-dark-txt font-encode text-xl xl:text-2.2xl">My background is in <span className="text-light-primary dark:text-dark-primary font-semibold">Computer System Engineering</span>, and a have a <span className="text-light-primary dark:text-dark-primary font-semibold">Responsive Web Design</span> certification in freeCodeCamp.</p>
                    <a 
                    className="text-light-txt dark:text-dark-txt uppercase font-jetbrains font-bold self-end mt-4 mr-5 hover:text-light-txt-l dark:hover:text-dark-txt-l relative before:content-['{'] before:absolute before:left-[-10px] before:transition-transform before:hover:translate-x-[-10px] after:content-['}'] after:absolute after:right-[-10px] after:transition-transform after:hover:translate-x-[10px]"
                    href="https://www.freecodecamp.org/certification/fccfb0b985d-e8ba-4e85-a1e8-848f7c9a4368/responsive-web-design"
                    target="_blank">Certification</a>
                </div>
                <div className="border-2 border-light-txt dark:border-dark-txt p-[6%] rounded-xl md:aspect-square md:p-[12%] lg:col-span-3 lg:col-start-9">
                    <p className="text-light-txt dark:text-dark-txt font-encode text-xl xl:text-2.2xl">My specialties include <span className="text-light-primary dark:text-dark-primary font-semibold">React JS</span> and <span className="text-light-primary dark:text-dark-primary font-semibold">Tailwind CSS</span>.</p>
                </div>
            </div>
        </section>
    )
}