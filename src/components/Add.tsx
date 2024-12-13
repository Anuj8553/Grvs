import { useState, useEffect } from "react"
import { database, app } from "../../firebase"
import { addDoc, collection } from "@firebase/firestore"


function Add({ setForm }: {
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const db = collection(database, 'complaints');
    const [name, setName] = useState<string>("")
    const [complaint, setComplaint] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [category, setCategory] = useState<string>("safety")


    function addComplaint(e: any) {
        e.preventDefault();
        if (name !== "" && complaint !== "" && location !== "")
            addDoc(db, {
                key: Date.now(),
                name,
                location,
                complaint,
                categories: category
            })
                .then(() => setForm(false))
    }

    return (
        <div className="flex justify-center items-center ">
            <div onClick={() => setForm(false)} className="bg-black opacity-40 h-screen w-screen fixed z-70 top-0 left-0"></div>
            <form action="" className="fixed bg-white flex flex-col gap-6 p-3 rounded-lg max-w-[80vh]">
                <input value={name} onChange={(e) => setName(e.target.value)} className="p-3 border-[1px] rounded-md broder-solid border-primary" type="text" placeholder="Name" />
                <textarea value={complaint} onChange={(e) => setComplaint(e.target.value)} className="p-3 border-[1px] rounded-md broder-solid border-primary" placeholder="Complaint" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} className="p-3 border-[1px] rounded-md broder-solid border-primary" type="text" placeholder="Location" />
                <div className="flex  gap-3">
                    <div className="flex">
                        <label onClick={() => setCategory("safety")} className={`${category === "safety" ? "bg-blue-100 text-primary" : "bg-white text-black"} p-2 rounded-md cursor-pointer`} htmlFor="safety">Safety</label>
                        <input className="hidden border-[1px] rounded-md broder-solid border-primary" type="checkbox" name="category" id="safety" />
                    </div>
                    <div className="flex">
                        <label onClick={() => setCategory("animal")} className={`${category === "animal" ? "bg-blue-100 text-primary" : "bg-white text-black"} p-2 rounded-md cursor-pointer`} htmlFor="animal">Animal Help</label>
                        <input className="hidden w-fit border-[1px] rounded-md broder-solid border-primary" type="checkbox" name="category" id="animal" />
                    </div>
                    <div className="flex">
                        <label onClick={() => setCategory("living")} className={`${category === "living" ? "bg-blue-100 text-primary" : "bg-white text-black"} p-2 rounded-md cursor-pointer`} htmlFor="living">Living conditions</label>
                        <input className="hidden w-fit border-[1px] rounded-md broder-solid border-primary" type="checkbox" name="category" id="living" />
                    </div>
                    <div className="flex">
                        <label onClick={() => setCategory("travel")} className={`${category === "travel" ? "bg-blue-100 text-primary" : "bg-white text-black"} p-2 rounded-md cursor-pointer`} htmlFor="travel">Travelling issues</label>
                        <input className="hidden w-fit border-[1px] rounded-md broder-solid border-primary" type="checkbox" name="category" id="travel" />
                    </div>
                    <div className="flex">
                        <label onClick={() => setCategory("hygine")} className={`${category === "hygine" ? "bg-blue-100 text-primary" : "bg-white text-black"} p-2 rounded-md cursor-pointer`} htmlFor="hygine">Hygine</label>
                        <input className="hidden w-fit border-[1px] rounded-md broder-solid border-primary" type="checkbox" name="category" id="hygine" />
                    </div>
                </div>
                <button onClick={addComplaint} className="bg-primary text-white rounded-md py-3">Submit</button>
            </form>
        </div>
    )
}

export default Add