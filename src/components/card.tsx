import { useState } from "react"

function Card({ data: { name, complaint, categories, location, img, key } }: {
    data: {
        name: string,
        complaint: string,
        categories: string,
        location: string,
        img: string,
        key: number
    }
}) {

    const [imgState, setImgState] = useState<boolean>(false)

    // console.log(name, complaint, categories, location, img, key);
    return (
        <div className="flex flex-col p-3 border-[1px]  border-solid border-gray-300 rounded-lg gap-3 hover:shadow-xl transition-0.5s transition-all">
            <div className="text-sm text-gray-600 font-bold">{name}</div>
            <div className="text-lg font-semibold">{complaint} </div>
            {location ? <div className="flex gap-2 items-center"><img className="w-[15px]" src="/pin.svg" alt="" /> {location}</div> : <></>}
            <span className="w-fit py-2 p-3 bg-blue-100 text-primary font-bold rounded-md">{categories}</span>
            {/* {img !== "" ? <button className="flex justify-center items-center gap-3" onClick={() => setImgState((prev) => !prev)} ><img className="w-[15px]" src="/img.svg" alt="" /> Show image</button> : <></>} */}
            {/* {imgState ? <img className="w-full" src={img} alt="" /> : <></>} */}
        </div>
    )
}

export default Card