"use client"

import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

import { BookOpenCheck, CodeXml, MessageCircle, UserRound } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Lessons, returnIcon } from '../../../public/lessons/Lessons';

import { Button as SButton } from "@/components/ui/button"
import SearchItem from './SearchItem';


export default function Header() {
  const [isLessonPage, setIsLessonPage] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [name, setName] = React.useState("User");

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setIsLessonPage(url.includes('lessons/') || url.includes('teach/'));
    };

    handleRouteChange(pathname);
  }, [pathname]);

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  if (window.location.href.includes("lessons/") || window.location.href.includes("teach/") || window.location.href.includes("cocode/")){
    return <>
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem><SButton variant={"destructive"} className='w-full'>Quit Lesson</SButton></CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            <CommandItem></CommandItem>
          </CommandGroup>
          <CommandGroup heading="Lessons">
            {
              Object.keys(Lessons).map((key: any, index) => (
                <SearchItem lesson={Lessons[key]} key={index}/>
              ))              
            }
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      </>
  }

  

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem></CommandItem>
          </CommandGroup>
          <CommandGroup heading="Lessons">
            {
              Object.keys(Lessons).map((key: string, index: number) => (
                <SearchItem lesson={Lessons[key as keyof typeof Lessons]} key={index}/>
              ))              
            }
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <header className='flex flex-col lg:flex-row w-full py-12 px-24  text-2xl text-center header'>
        <Link href={"/"} className='font-semibold w-full lg:w-[20%]'>♨️JavaBrewed</Link>
        <div className='flex justify-end gap-[2rem] flex-col lg:flex-row w-full lg:w-[80%] ml-[2rem] mr-[2rem] '>
          
          <SButton variant="outline" className='flex flex-row gap-2 bg-slate-100' onClick={() =>  setOpen(!open)}>Search JavaBrewed... <CommandShortcut>⌘K</CommandShortcut></SButton>

          <Button icon={MessageCircle} link="/chatbot" title="ChatBot"/>
          <Button icon={BookOpenCheck} link="/lessons" title="Lessons"/>
          <Button icon={CodeXml} link="/cocode" title="CoCode"/>
          <Button icon={UserRound} link="/profile" title="Profile" />
        </div>
      </header>
        
    </>
  );
}

function Button(params: any) {
  const Icon = params.icon;

  return <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger><Link href={params.link}>{<Icon/>}</Link></TooltipTrigger>
        <TooltipContent>
          {params.title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </>
}