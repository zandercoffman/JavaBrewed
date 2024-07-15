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
        <CommandItem className='w-full'>
            <Button onClick={handleClick} className="w-full text-left !border-none" variant={"outline"}>
                <div className="flex items-center gap-2 justify-start w-full">
                    <Icon />
                    <span className="text-left">{name}</span>
                </div>
            </Button>
        </CommandItem>
    </>
}