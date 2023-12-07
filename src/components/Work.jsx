import Project from "./Project"
import { projects } from "../projects-info"

export default function Work() {
    return(
        <div id="work"
        className="bg-light-secondary dark:bg-dark-secondary rounded-5xl py-20 flex justify-center lg:py-40">
            <section className="w-[86%] max-w-[1100.8px] mx-auto text-light-neutral dark:text-dark-neutral">
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
        </div>
    )
}