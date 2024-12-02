import { CalendarDays } from "lucide-react"

export default function AchievementsModule() {

    const achievements = [
        {
            title: "Facilitator – Mobile Application Introduction Day Camp",
            date: "24 July 2024"
        },
        {
            title: "WorldSkills Malaysia Belia (WSMB) 2023 - IT Software Solution for Business, Pre-Qualification Stage",
            date: "10 May 2023"
        },
        // {
        //     title: "Cisco Networking Academy: IT Essentials: PC Hardware and Software",
        //     date: "18 January 2023"
        // }
    ]

    return (
        <section id="achievements">
            <h2 className="text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
            <ul className="list-disc list-inside flex flex-col gap-5">
                {
                    achievements.map(achievement => (
                        <li className="flex flex-row items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <span>{achievement.title}</span>
                                <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />{achievement.date}</span>
                            </div>
                            {/* <a
                                className="inline-block rounded border border-black bg-black px-3 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
                                href="#"
                            >
                                View
                            </a> */}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}