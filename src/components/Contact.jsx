export default function Contact() {
    return(
        <section className="w-[86%] max-w-[1100.8px] mx-auto py-12">
            <h2 className="font-jetbrains uppercase text-dark-txt text-3xl text-center">Contact</h2>
            <div className="text-dark-txt">
                <div className="h-[2px] w-full bg-dark-txt my-7"></div>
                <h3 className="font-koulen text-4xl">I’m always up for a chat.</h3>
                <p className="font-encode mt-4 leading-7">Please reach out if you have any questions! I'm happy to jump on a video call. Send me an email at alberto.ledesma.dev@gmail.com</p>
                <div className="h-[2px] w-full bg-dark-txt my-7"></div>
                <h3 className="font-koulen text-4xl">Frontend mentor community.</h3>
                <p className="font-encode mt-4 leading-7">You can find me in the Frontend Mentor community, where I've started helping others with their code.</p>
                <div className="h-[2px] w-full bg-dark-txt my-7"></div>
            </div>
            <div className="bg-dark-txt text-dark-secondary px-5 py-8 rounded-3xl">
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