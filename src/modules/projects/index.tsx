import { IconType } from 'react-icons';
import { SiNextdotjs, SiTailwindcss, SiVite, SiPocketbase, SiReact, SiDocker, SiMysql, SiPhp, SiC } from 'react-icons/si';

const techStackIcons: { [key: string]: IconType } = {
    'Next.js': SiNextdotjs,
    'React.js': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Docker': SiDocker,
    'Vite': SiVite,
    'Pocketbase': SiPocketbase,
    'MySQL': SiMysql,
    'PHP': SiPhp,
    'C': SiC
};

export default function ProjectsModule() {

    const projects = [
        {
            name: "Marketing And Management System",
            description: "Web-based marketing and management system to streamline marketing efforts for staff and enhancing their ability to attract visitors and access materials efficiently.",
            techStack: ["Next.js", "React.js", "Tailwind CSS", "Pocketbase", "Docker"],
            url: "https://mams.site/",
            status: "live",
            isWorkingOn: true
        },
        // {
        //     name: "SWEspace",
        //     description: "",
        //     techStack: ["Vite", "React.js", "Tailwind CSS"],
        //     url: "https://swespace.vercel.app/",
        //     status: "live"
        // },
        {
            name: "PharmaGains",
            description: "Simple shopping cart system made during web development course.",
            techStack: ["PHP", "MySQL"],
            url: "https://pharmagains.ripin.live/",
            status: "live",
            isWorkingOn: false
        },
        {
            name: "KUDO QUIZ",
            description: "An interactive quiz application in C featuring user authentication, administrative controls for quiz management, and automated scoring system.",
            techStack: ["C"],
            url: "https://github.com/RipinDensumite/KUDO-QUIZ",
            status: "",
            isWorkingOn: false
        }
    ]

    return (
        <section id="projects">
            <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
            <div className="space-y-4">
                {
                    projects.map((project, index) => (
                        <a
                            onClick={() => window.open(project.url, "_blank")}
                            key={index}
                            className="bg-slate-50 border-2 rounded-md border-gray-800 p-5 flex flex-row justify-between transition-transform duration-300 hover:scale-105"
                        >
                            <section>
                                <h3 className="font-bold text-slate-800 flex items-center">
                                    {project.name}
                                    {project.isWorkingOn && (
                                        <span className="ml-2 flex items-center">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                            </span>
                                            <span className="ml-2 text-sm text-green-700">Working on</span>
                                        </span>
                                    )}
                                </h3>
                                <p className='text-slate-600 text-md'>{project.description}</p>
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
                            {project.status === "live" && <span className="bg-emerald-100 px-2.5 py-0.5 border-2 border-emerald-700 text-emerald-700 h-fit">live</span>}
                            {project.status === "offline" && <span className="bg-red-100 px-2.5 py-0.5 border-2 border-red-700 text-red-700 h-fit">offline</span>}
                        </a>
                    ))
                }
            </div>
        </section>
    )
}