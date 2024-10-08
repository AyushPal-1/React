import "../EP.css"
import {useState } from "react"
export const State = () => {
    const [count, setCount] = useState(0)
    const handleButtonClick = () => {
        setCount( () => count + 1)
    }
    return (
        <>
        <section className="main">
            <h1 className="main-hading">{count}</h1>
            <button className="button-main" onClick={handleButtonClick}>Increment</button>
        </section>
        </>
    )
}