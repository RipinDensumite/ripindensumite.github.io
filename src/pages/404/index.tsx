import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
    const navigate = useNavigate();

    return (
        <main className="min-h-screen flex flex-col gap-3 items-center justify-center">
            <h1>Page does not exist</h1>
            <button onClick={() => navigate("/")} className="cursor-pointer flex items-center fill-lime-400 bg-zinc-950 hover:bg-zinc-700 active:border active:border-lime-400 rounded-md duration-100 p-2">
                <span className="text-sm text-white font-bold pr-1">Go back Home</span>
            </button>
        </main>
    )
}