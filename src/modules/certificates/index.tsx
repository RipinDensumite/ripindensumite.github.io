import TiltCard from "../../components/cards/TiltCard"

export default function CertificatesModule() {
    return (
        <section id="certificates">
            <h2 className="text-2xl font-bold mb-4">CERTIFICATES</h2>
            <div className='flex gap-4 items-center justify-center sm:justify-start flex-wrap'>
                <div className="flex flex-col gap-3 w-60">
                    <a href="https://www.credly.com/badges/8abe8eba-64e9-41ac-bea6-3a2e74918fd3/linked_in?t=skeynp">
                        <TiltCard />
                    </a>
                    <h1>IT Essentials: PC Hardware and Software</h1>
                    {/* <div className="ml-auto">
                        <button className="px-6 py-2 font-medium bg-slate-700 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            View cert
                        </button>
                    </div> */}
                </div>
            </div>
        </section>)
}