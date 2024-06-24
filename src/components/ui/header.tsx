"use client"

import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

import { BookOpenCheck, MessageCircle, UserRound } from 'lucide-react';

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


export default function Header() {
  const [isLessonPage, setIsLessonPage] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setIsLessonPage(url.includes('lessons/') || url.includes('teach/'));
    };

    handleRouteChange(pathname);
  }, [pathname]);

  if (window.location.href.includes("lessons/") || window.location.href.includes("teach/")){
    return <></>
  }

  return (
    <>
      <header className='flex flex-col lg:flex-row w-full py-12 px-24  text-2xl text-center header'>
        <Link href={"/"} className='font-semibold w-full lg:w-[20%]'>JavaBrewed♨️</Link>
        <div className='flex justify-end gap-[2rem] flex-col lg:flex-row w-full lg:w-[80%] ml-[2rem] mr-[2rem] '>
          <Button icon={MessageCircle} link="/chatbot" title="ChatBot"/>
          <Button icon={BookOpenCheck} link="/lessons" title="Lessons"/>
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