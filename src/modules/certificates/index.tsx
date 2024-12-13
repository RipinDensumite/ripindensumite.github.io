import HoverCard from "../../components/cards/HoverCard"

export default function CertificatesModule() {
    // const certificates = [
    //     {
    //         title: "IT Essentials: PC Hardware and Software",
    //         image: "https://images.credly.com/size/680x680/images/04e8034c-81f5-4f7f-ab23-e8b428c31ce9/ITE.png",
    //         href: "https://www.credly.com/badges/8abe8eba-64e9-41ac-bea6-3a2e74918fd3/linked_in?t=skeynp"
    //     }
    // ]

    return (
        <section id="certificates">
            <h2 className="text-2xl font-bold mb-4">CERTIFICATES</h2>
            <div className='flex gap-4 items-center justify-center sm:justify-start flex-wrap'>
                <div className="flex flex-col gap-3 w-60">
                    <HoverCard
                        className="rounded-xl border border-stone-500/10 bg-stone-400/10 group-hover:border-stone-500/50 group-hover:bg-stone-400/25"
                        columns={10}
                        containerClassName="h-72 w-56"
                        maxXrotation={15}
                        maxYrotation={15}
                        rows={12}
                    >
                        <a href="google.com">
                            <div className="w-full h-full bg-blue-300/50 rounded-xl">
                                <img className="h-full object-contain p-3" src="https://images.credly.com/size/680x680/images/04e8034c-81f5-4f7f-ab23-e8b428c31ce9/ITE.png" />
                            </div>
                        </a>
                        <div className="-bottom-8 absolute font-medium text-neutral-500 text-sm leading-3 tracking-tighter transition-opacity delay-100 duration-300 ease-in-out">
                            IT Essentials: PC Hardware and Software
                        </div>
                    </HoverCard>

                    {/* <div className="ml-auto">
                        <button className="px-6 py-2 font-medium bg-slate-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            View cert
                        </button>
                    </div> */}
                </div>
            </div>
        </section>)
}