export default function AboutModule() {
    return (
        <section id="about">
            {/* <h2 className="text-2xl font-bold mb-4">ABOUT ME</h2> */}
            <div className="max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg p-6 bg-gradient-to-br from-slate-50 to-slate-200">
                <h1 className="mb-3 text-center sm:block sm:text-left font-bold text-2xl">:MeCard:</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
                    <div className="max-w-52 max-h-52 sm:size-24 mb-4 sm:mb-0">
                        <img src="https://avatars.githubusercontent.com/u/52118329?v=4" alt="Profile" className="size-full rounded-lg border border-gray-300 object-cover" />
                    </div>
                    <div className="flex-1 w-full">
                        <h2 className="text-lg font-semibold">Mohamed Arifin Densumite bin Jamdi</h2>
                        <p className="text-sm text-gray-800"><strong>Alias:</strong> RipinDensumite</p>
                        <p className="text-sm text-gray-800"><strong>Status:</strong> 3rd Year German-Malaysian Institute Student</p>
                        <p className="text-sm text-gray-800"><strong>Nationality:</strong> Malaysian</p>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <p className="text-sm text-gray-800"><strong>User description:</strong></p>
                        <p className="text-sm">
                            passionate about creating efficient, user-friendly web applications and always eager to learn new technologies.
                        </p>
                    </div>
                    <div className="col-span-2 ml-auto space-x-1">
                        <button className="size-8 hover:bg-zinc-200 transition-all rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M 9 4 C 6.239 4 4 6.239 4 9 L 4 41 C 4 43.761 6.239 46 9 46 L 41 46 C 43.761 46 46 43.761 46 41 L 46 9 C 46 6.239 43.761 4 41 4 L 9 4 z M 11 16 L 39 16 L 39 16.521484 C 38.666397 16.789063 36.290926 18.694589 33.472656 20.960938 C 30.463284 23.380962 27.398547 25.847742 26.855469 26.306641 C 26.150643 26.902215 25.402874 27 25 27 C 24.595959 27 23.851004 26.902714 23.146484 26.306641 C 22.601383 25.845446 19.53673 23.380847 16.527344 20.960938 C 13.70906 18.694696 11.333601 16.789076 11 16.521484 L 11 16 z M 11 19.083984 C 12.001588 19.888112 13.095347 20.766513 15.275391 22.519531 C 16.691354 23.658138 17.187158 24.065728 18.371094 25.021484 L 11 30.917969 L 11 19.083984 z M 39 19.083984 L 39 30.917969 L 31.626953 25.021484 C 32.811211 24.065805 33.308354 23.658432 34.724609 22.519531 C 36.904662 20.766414 37.998415 19.88808 39 19.083984 z M 19.964844 26.308594 C 20.466406 26.715288 21.743306 27.740739 21.853516 27.833984 C 23.006996 28.809911 24.262041 29 25 29 C 25.739126 29 26.991357 28.80841 28.144531 27.833984 C 28.255302 27.740384 29.531503 26.715192 30.033203 26.308594 L 39 33.480469 L 39 34 L 11 34 L 11 33.480469 L 19.964844 26.308594 z"></path>
                            </svg>
                        </button>
                        <button className="size-8 hover:bg-zinc-200 transition-all rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                            </svg>
                        </button>
                        <button className="size-8 hover:bg-zinc-200 transition-all rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section >
    )
}