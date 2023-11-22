import personalPhoto from "../../public/personal-photo.png"

export default function About() {
    return(
        <section className="w-[86%] mx-[7%]">
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:grid-rows-1">
                <h2 className="font-jetbrains uppercase text-dark-txt text-3xl text-center lg:col-span-1">Who I am?</h2>
                <img 
                className="w-full"
                src={personalPhoto} 
                alt="personal photo" />
                <div className="border-2 border-dark-txt lg:col-span-2 rounded-xl p-5 text-lg">
                    <p className="text-dark-txt font-encode">I’m from Parral, México. I love build apps that solve real-world problems, and that are delightful to use.</p>
                </div>
            </div>
        </section>
    )
}