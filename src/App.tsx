import List from "./components/List"
import Input from "./Input"
import { useRef, useEffect, useState } from "react"
import Add from "./components/Add"
function App() {

    const title: any = useRef(null)
    const button: any = useRef(null)
    const [form, setForm] = useState<boolean>(false)
    const down: string[] = ["fixed, bottom-3", "right-0"]

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.getBoundingClientRect().top < -40) {
                // button.current.classList.add(...down)
            }
            else {
                // title.current.classList.remove(...down)
            }
        })
    }, [])


    return (
        <div className="flex flex-col px-3 w-full">
            <div className="flex justify-center items-center h-[40vh] gap-6 flex-col">
                <h1 ref={title} className="text-6xl font-bold text-primary ">Grievances.</h1>
                <button onClick={() => setForm(true)} ref={button} className="text-md transition-all transition-0.6s bg-primary p-3 text-white flex justify-center items-center py-0 rounded-md">+ Add a complaint</button>
            </div>
            {
                form && <Add setForm={setForm} />
            }
            <div className="flex flex-col  items-center w-full pt-6">
                <List />
            </div>
        </div>
    )
}

export default App