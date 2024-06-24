import { CircleDashed } from "lucide-react";

export function AIMessage(params) {
    const d = new Date();
    const hrs = d.getHours();
    const min = d.getMinutes();

    return <>
        <div className="flex flex-col">
            <div className="flex flex-row  gap-1 ml-[60px]"><h1>Codi</h1><p className="text-gray-600">{hrs}:{min} {(hrs >= 12) ? "PM" : "AM"}</p></div>
            <div className="flex flex-row gap-2 w-fit px-3">
                <CircleDashed className="w-[38px] h-auto" /><div className="relative bg-gray-600 rounded-[2rem] px-4 py-3 chat-bubble-ai">{params.message || ""}</div>
            </div>
            <div className="ml-[60px]">Delivered</div>
        </div>
    </>
}