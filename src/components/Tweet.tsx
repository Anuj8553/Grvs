import { useState } from "react";

function Tweet({ data }) {
    const [imgState, setImgState] = useState<boolean>(false)

    return (
        <div className="flex flex-col p-3 border-[1px]  border-solid bg-blue-50  border-gray-300 rounded-lg gap-3 hover:shadow-xl transition-0.5s transition-all">
            <div className="text-sm text-gray-600 font-bold">{data.user.name}</div>
            <a target="blank" href={data.expanded_url} className="text-lg font-semibold">{data.text}</a>
            {location ? <div className="flex gap-2 items-center"><img className="w-[15px]" src="/pin.svg" alt="" /> {data.user.location}</div> : <></>}
            {data.media_url[0] ? <button className="flex justify-center items-center gap-3" onClick={() => setImgState((prev) => !prev)} ><img className="w-[15px]" src="/img.svg" alt="" /> Show image</button> : <></>}
            {imgState ? <img className="w-full" src={data.media_url[0]} alt="" /> : <></>}
        </div>
    );
}

export default Tweet