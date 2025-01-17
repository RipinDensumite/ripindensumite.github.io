import HoverCard from "../../components/cards/HoverCard"

export default function CertificatesModule() {
    const certificates = [
        {
            title: "IT Essentials: PC Hardware and Software",
            image: "https://images.credly.com/size/680x680/images/04e8034c-81f5-4f7f-ab23-e8b428c31ce9/ITE.png",
            href: "https://www.credly.com/badges/8abe8eba-64e9-41ac-bea6-3a2e74918fd3/linked_in?t=skeynp",
            bgColor: "bg-gradient-to-bl from-cyan-300 to-cyan-600",
        },
        {
            title: "GitHub Foundations",
            image: "https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
            href: "https://www.credly.com/badges/a2a9b748-5314-40d1-81ae-bb8279ba4109/public_url",
            bgColor: "bg-gradient-to-bl from-slate-400 to-slate-900",
        },
    ]

    return (
        <section id="certificates">
            <h2 className="text-2xl font-bold mb-4">CERTIFICATES</h2>
            <div className='flex gap-4 items-center justify-center sm:justify-start flex-wrap'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {certificates.map((certificate, index) => (
                        <HoverCard
                            key={index}
                            className="border border-stone-500/10 bg-stone-400/10 group-hover:border-stone-500/50 group-hover:bg-stone-400/25 h-72 w-56"
                            columns={10}
                            containerClassName="h-72 w-56"
                            maxXrotation={15}
                            maxYrotation={15}
                            rows={12}
                        >
                            <a href={certificate.href} target="_blank" rel="noreferrer">
                                <div className={`w-full h-full ${certificate.bgColor} `}>
                                    <img className="h-full w-full object-contain p-3 border-2 " src={certificate.image} />
                                </div>
                            </a>
                            <div className="-bottom-8 absolute font-medium text-neutral-500 text-sm leading-3 tracking-tighter transition-opacity delay-100 duration-300 ease-in-out">
                                {certificate.title}
                            </div>
                        </HoverCard>
                    ))
                    }
                </div>
            </div>
        </section>)
}