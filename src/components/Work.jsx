import Project from "./Project"
import { projects } from "../projects-info"

export default function Work() {
    const getBgCircles = (n) => {
        let circles = []
        for(let i = 0; i < n; i++) {
            circles.push(<div className="bg-gradient-to-b from-light-neutral dark:from-dark-neutral shadow-light-neutral dark:shadow-dark-neutral opacity-30 w-[4px] h-[16px] rounded-full"></div>)
        }
        return circles
    }

    return(
        <div id="work"
        className="bg-light-secondary dark:bg-dark-secondary rounded-5xl py-20 flex justify-center relative lg:py-40">
            <section className="z-10 w-[86%] max-w-[1100.8px] mx-auto text-light-neutral dark:text-dark-neutral">
                <h2 className="font-jetbrains uppercase text-3xl text-center mb-[50px] lg:mb-[90px] lg:text-left">My work</h2>
                <div className="space-y-[40px] lg:space-y-[80px]">
                    {projects.map(project => 
                    <>
                        <Project
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                        site={project.site}
                        code={project.code}
                        img={project.img}
                        color={project.color}
                        />
                        {project.id === "03" ? null : 
                            <div className="h-[10px] w-2/5 border-[2px] rounded-full mx-auto opacity-60 border-light-neutral dark:border-dark-neutral"></div>
                        }
                        
                    </>
                    )}
                </div>
            </section>
            <div className="absolute w-full h-full top-0 rounded-5xl overflow-hidden z-0">
                <div className="grid place-items-start justify-items-center  gap-y-[80px] animate-up-infinity-sm max-w-[1600px] mx-auto grid-cols-6 md:grid-cols-8 md:gap-y-[140px] md:animate-up-infinity-lg xl:grid-cols-10">
                    {getBgCircles(190)}
                </div>
                
            </div>
        </div>
    )
}