export default function AchievementsModule() {
    return (
        <section id="achievements">
            <h2 className="text-2xl font-bold mb-4">ACHIEVEMENTS</h2>
            <ul className="list-disc list-inside flex flex-col gap-5">
                <li className="flex flex-col">
                    <span>WorldSkills Malaysia Belia (WSMB) 2023 - IT Software Solution for Business, Pre-Qualification Stage</span>
                    <span className="whitespace-nowrap bg-black px-2.5 py-0.5 text-sm text-white w-fit">10 May 2023</span>
                </li>
                <li className="flex flex-col">
                    <span>Cisco Networking Academy: IT Essentials: PC Hardware and Software,</span>
                    <span className="whitespace-nowrap bg-black px-2.5 py-0.5 text-sm text-white w-fit">18 January 2023</span>
                </li>
            </ul>
        </section>
    )
}