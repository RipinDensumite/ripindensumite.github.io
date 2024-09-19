export default function ProjectsModule() {

    const projects = [
        {
            name: "Marketing And Management System",
            description: "",
            techStack: ["Next.js", "Pocketbase", "Tailwind CSS"],
            url: "Project URL"
        },
        {
            name: "SWEspace",
            description: "",
            techStack: ["Vite", "React", "Tailwind CSS"],
            url: "Project URL"
        }
    ]

    return (
        <section id="projects">
            <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
            <div className="space-y-4">
                {
                    projects.map((project, index) => (
                        <div key={index} className="border p-5">
                            <h3 className="font-bold">{project.name}</h3>
                            <p>{project.description}</p>
                            <p>Tech stack: {project.techStack.join(", ")}</p>
                            <a href={project.url} className="underline">View Project</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}