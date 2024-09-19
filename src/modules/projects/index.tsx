export default function ProjectsModule() {
    return (
        <section id="projects">
            <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold">Project 1: [Project Name]</h3>
                    <p>[Brief description of the project and your role]</p>
                    <p>Tech stack: [List of technologies used]</p>
                    <a href="[Project URL]" className="underline">View Project</a>
                </div>
                <div>
                    <h3 className="font-bold">Project 2: [Project Name]</h3>
                    <p>[Brief description of the project and your role]</p>
                    <p>Tech stack: [List of technologies used]</p>
                    <a href="[Project URL]" className="underline">View Project</a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    )
}