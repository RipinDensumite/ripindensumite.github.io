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
            status: "",
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
            status: "",
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
                        <div
                            key={index}
                            className="bg-slate-50 border-2 rounded-md border-gray-800 p-5 flex flex-row justify-between transition-transform duration-300"
                        >
                            <section className='w-full'>
                                <div className='flex items-center justify-between'>
                                    <h3 className="font-bold text-slate-800 flex items-center">
                                        {project.name}
                                        {project.isWorkingOn && (
                                            <span className="ml-2 hidden items-center sm:flex">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                </span>
                                                <span className="ml-2 text-sm text-green-700">Working on</span>
                                            </span>
                                        )}
                                    </h3>
                                    {project.status === "live" && <span className="bg-emerald-100 px-2.5 py-0.5 border-2 border-emerald-700 text-emerald-700 h-fit w-fit">live</span>}
                                    {project.status === "offline" && <span className="bg-red-100 px-2.5 py-0.5 border-2 border-red-700 text-red-700 h-fit w-fit">offline</span>}
                                </div>
                                <p className='text-slate-600 text-sm'>{project.description}</p>
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
                                <div className='ml-auto w-max'>
                                    <button onClick={() => window.location.href = project.url} className="rounded-md border-2 border-dashed border-black bg-slate-50 px-4 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                                        View Project
                                    </button>
                                </div>
                            </section>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}