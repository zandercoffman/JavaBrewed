import { CircleDashed, UserRound } from "lucide-react";

export function UserMessage(params: any) {
    const d = new Date();
    const hrs = d.getHours();
    const min = d.getMinutes();

    return <>
        <div className="flex flex-col items-end w-full">
            <div className="flex flex-row  gap-1 ml-[60px]"><h1>User</h1><p className="text-gray-600">{hrs}:{min} {(hrs >= 12) ? "PM" : "AM"}</p></div>
            <div className="flex flex-row gap-2 w-fit px-3">
                <div className="relative bg-gray-600 rounded-[2rem] px-4 py-3 chat-bubble-user">{params.message}</div><UserRound className={"w-[38px] h-auto" + ((params.thinking) ? "loading" : "")} />
            </div>
            <div className="ml-[60px]">Delivered</div>
        </div>
    </>
}