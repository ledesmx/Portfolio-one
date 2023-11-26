import Project from "./Project"

export default function Work() {
    return(
        <div className="bg-dark-secondary rounded-5xl py-10 flex justify-center">
            <section className="w-[86%] max-w-[1100.8px]] text-dark-neutral">
                <h2 className="font-jetbrains uppercase text-3xl text-center mb-10">My work</h2>
                <Project
                id="01"
                title="E-commerce product page"
                description="A single product page with a lightbox product gallery and cart functionality"
                skills={["React JS", "CSS", "BEM", "HTML"]}
                site=""
                code=""
                img="public/project-01-preview.jpg"
                color="coral" />
            </section>
        </div>
    )
}