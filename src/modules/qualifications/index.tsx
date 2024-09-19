import { CalendarDays } from "lucide-react"

export default function QualificationsModule() {

    const qualifications = [
        {
            title: "Diploma in Software Engineering (Software Testing)",
            institution: "German-Malaysian Institute",
            duration: "July 2022 - June 2025"
        },
        {
            title: "Sijil Pelajaran Malaysia",
            institution: "Sekolah Menengah Teknik Kuala Lumpur",
            duration: "January 2020 - March 2022"
        }
    ]

    return (
        <section id="qualifications">
            <h2 className="text-2xl font-bold mb-4">QUALIFICATIONS</h2>
            <ul className="list-disc list-inside flex flex-col gap-5">
                {qualifications.map(qualification => (
                    <li className="flex flex-col gap-1">
                        <span>{qualification.title},</span>
                        <span>{qualification.institution},</span>
                        {/* <span className="whitespace-nowrap bg-black px-2.5 py-0.5 text-sm text-white w-fit">{qualification.duration}</span> */}
                        <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />{qualification.duration}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}