import personalPhoto from "../../public/personal-photo.png"

export default function About() {
    return(
        <section className="w-[86%] mx-[7%] grid gap-y-10">
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:grid-rows-1">
                <h2 className="font-jetbrains uppercase text-dark-txt text-3xl text-center lg:col-span-1">Who I am?</h2>
                <img 
                className="w-full"
                src={personalPhoto} 
                alt="personal photo" />
                <div className="border-2 border-dark-txt lg:col-span-2 rounded-xl p-5">
                    <p className="text-dark-txt font-encode text-lg">I’m from Parral, México. I love build apps that solve real-world problems, and that are delightful to use.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-y-10">
                <div className="border-2 border-dark-txt p-5 rounded-xl flex flex-col">
                    <p className="text-dark-txt font-encode text-lg">My background is in <span className="text-dark-primary font-semibold">Computer System Engineering</span>, and a have a <span className="text-dark-primary font-semibold">Responsive Web Design</span> certification in freeCodeCamp.</p>
                    <a 
                    className="text-dark-txt uppercase font-jetbrains font-bold self-end mt-4 mr-5 relative before:content-['{'] before:absolute before:left-[-10px] before:transition-transform before:hover:translate-x-[-10px] after:content-['}'] after:absolute after:right-[-10px] after:transition-transform after:hover:translate-x-[10px]"
                    href="">Certification</a>
                </div>
                <div className="border-2 border-dark-txt p-5 rounded-xl">
                    <p className="text-dark-txt font-encode text-lg">My specialties include <span className="text-dark-primary font-semibold">React JS</span> and <span className="text-dark-primary font-semibold">Tailwind CSS</span>.</p>
                </div>
            </div>
        </section>
    )
}