import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Connection_404() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center h-screen gap-5">
            <h1 className="scroll-m-20 border-b pb-2 text-6xl sm:text-9xl font-semibold tracking-tight first:mt-0">404</h1>
            <Button onClick={() => { navigate('/') }} className="sm:w-52">Back</Button>
        </section>
    );
}