export default function SkillsModule() {

    const skills = [
        {
            title: "Languages",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Java",
                "SQL",
                "C"
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                "React.js",
                "Next.js",
                "Node.js",
                "Vite",
                "Tailwind CSS",
            ]
        },
        {
            title: "Developer Tools",
            skills: [
                "Docker",
                "Git",
                "Caddy",
                "Pocketbase",
                "XAMPP",
            ]
        }
    ]

    return (
        <section id="skills">
            <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
            <div className="flex flex-col gap-5">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="flex flex-col">
                            <h1 className="mb-2 font-semibold text-lg">{skill.title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {
                                    skill.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 h-fit w-fit bg-zinc-700/10 text-slate-700 rounded-md text-sm font-medium hover:bg-blue-500/20 transition-colors duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}