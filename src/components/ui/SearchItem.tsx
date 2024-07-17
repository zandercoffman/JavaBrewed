import { returnIcon } from "../../../public/lessons/Lessons";
import { Button } from "./button";
import { CommandItem } from "./command";

export default function SearchItem(params: any) {
    const lesson = params.lesson;
    const name = lesson.name;
    const Icon = returnIcon(lesson.icon);
    const link = name.trim().replace(/\s+/g, '').toLowerCase();

    const handleClick = () => {
        window.location.href = `/lessons/${link}`;
    };

    return <>
        <CommandItem className='w-full py-2' onClick={handleClick}>
            <div className="flex items-center gap-2 justify-start w-full dark:text-white light:text-black font-semibold">
                <Icon />
                <span className="text-left">{name}</span>
            </div>
            <div className="place-self-end">
                <div className="flex flex-row gap-2">
                    <Button className="!py-1" onClick={() => window.location.href = `/lessons/${link}`}>Learn</Button>
                    <Button className="!py-1 !bg-gradient-to-r !from-blue-600 !to-violet-600 gradient-animated" onClick={() => window.location.href = `/teach/${link}`}>Teach</Button>
                </div>
            </div>
        </CommandItem>
    </>
}