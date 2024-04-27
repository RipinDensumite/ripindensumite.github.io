import { useState } from "react";

export default function Button() {
    const [num, setNum] = useState(0);

    return (
        <>
        <h1>{num}</h1>
            <button onClick={() => {setNum(num + 1)}}>Click me</button>
        </>
    )
}
