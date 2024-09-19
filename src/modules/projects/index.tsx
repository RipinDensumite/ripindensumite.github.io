import { IconType } from 'react-icons';
import { SiNextdotjs, SiTailwindcss, SiVite, SiPocketbase, SiReact, SiDocker, SiMysql, SiPhp } from 'react-icons/si';

const techStackIcons: { [key: string]: IconType } = {
    'Next.js': SiNextdotjs,
    'React': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Docker': SiDocker,
    'Vite': SiVite,
    'Pocketbase': SiPocketbase,
    'MySQL': SiMysql,
    'PHP': SiPhp
};

export default function ProjectsModule() {

    const projects = [
        {
            name: "Marketing And Management System",
            description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            techStack: ["Next.js", "Pocketbase", "Tailwind CSS", "Docker"],
            url: "https://mams.site/",
            status: "live"
        },
        {
            name: "SWEspace",
            description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            techStack: ["Vite", "React", "Tailwind CSS"],
            url: "https://swespace.vercel.app/",
            status: "live"
        },
        {
            name: "PharmaGains",
            description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            techStack: ["PHP", "MySQL"],
            url: "https://github.com/RipinDensumite/PharmaGains",
            status: "offline"
        }
    ]

    return (
        <section id="projects">
            <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
            <div className="space-y-4">
                {
                    projects.map((project, index) => (
                        <main key={index} className="border border-gray-800 p-5 flex flex-row justify-between">
                            <section>
                                <h3 className="font-bold">{project.name}</h3>
                                <p>{project.description}</p>
                                <div className=' gap-2 items-center mt-2 mb-2'>
                                    <span className='w-28'>Tech stack</span>
                                    <div>
                                        {project.techStack.map((tech, index) => {
                                            const Icon = techStackIcons[tech] || (() => null);
                                            return (
                                                <span key={index} className="inline-flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm mx-1 my-1">
                                                    <Icon className="mr-1 text-lg" />
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <a href={project.url} className="underline">View Project</a>
                            </section>
                            {project.status === "live" && <span className="bg-emerald-100 px-2.5 py-0.5 border border-2 border-emerald-700 text-emerald-700 h-fit">live</span>}
                            {project.status === "offline" && <span className="bg-red-100 px-2.5 py-0.5 border border-2 border-red-700 text-red-700 h-fit">offline</span>}
                        </main>
                    ))
                }
            </div>
        </section>
    )
}