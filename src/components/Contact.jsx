export default function Contact() {
    return(
        <section className="w-[86%] max-w-[1100.8px] mx-auto py-12 lg:grid lg:grid-cols-4">
            <h2 className="font-jetbrains uppercase text-light-txt dark:text-dark-txt text-3xl text-center lg:col-span-1">Contact</h2>
            <div className="text-light-txt dark:text-dark-txt lg:col-span-3">
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:mt-2 lg:my-[55px]"></div>
                <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">I’m always up for a chat.</h3>
                <p className="font-encode mt-4 leading-7 lg:mx-[80px]">Please reach out if you have any questions! I'm happy to jump on a video call. Send me an email at alberto.ledesma.dev@gmail.com</p>
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[55px]"></div>
                <h3 className="font-koulen text-4xl lg:text-5xl lg:mx-[80px]">Frontend mentor community.</h3>
                <p className="font-encode mt-4 leading-7 lg:mx-[80px]">You can find me in the Frontend Mentor community, where I've started helping others with their code.</p>
                <div className="h-[2px] w-full bg-light-txt dark:bg-dark-txt my-7 lg:my-[55px]"></div>
            </div>
            <div className="bg-light-txt text-light-secondary dark:bg-dark-txt dark:text-dark-secondary px-5 py-8 rounded-3xl lg:col-span-4 lg:flex">
                <p className="font-koulen text-5xl">Let’s get in touch <span className="font-fira">{"=>"}</span></p>
                <div>
                    <a href="">github</a>
                    <a href="">mail</a>
                    <a href="">Frontend mentor</a>
                </div>
            </div>
        </section>
    )
}