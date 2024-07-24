"use client"

import { returnIcon } from "../../../public/lessons/Lessons";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  
import { Button } from "./button";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  
  
  

export default function Lesson(params: any) {

    const lesson = params.lessonObj;
    const GotIcon = returnIcon(lesson.icon);
    const [click, setClicked] = React.useState(false);

    const [switchSet, setSwitch] = React.useState(false);

    React.useEffect(() => {
        setSwitch(params.isTeachMode);
    }, [params.isTeachMode])

    const getCutOffText = (s: string) => {
        if (s.length <= 120) {
            return s + "...";
        } else {
            return s.substring(0, 120)  + "...";
        }
    }

    const link = `${(lesson.name.trim().replace(/\s+/g, '').toLowerCase())}`;

    return <>
        <div className="relative flex flex-col gap-[20px] w-full min-h-[340px] max-h-[340px] bg-white overflow-hidden transition-all dark:bg-gray-700 dark:text-white  shadow-sm rounded-[20px] border-none p-[30px] pb-[90px]">
            <div className="flex flex-row gap-[10px]">
                <div className="w-auto h-auto">
                    {GotIcon && <GotIcon className="w-[40px] h-[40px]"/>}
                </div>
                <h1 className="font-bold text-2xl ">{lesson.name}</h1>
            </div>
            <h2 className="light:text-gray-700 text-1xl">{getCutOffText(lesson.description)}</h2>
            <div className="flex flex-wrap gap-2">
                {
                    lesson.filters.map((filter: any) => {
                        return <Badge key={filter} className="light:border-[1px] light:border-black dark:shadow-[0px_1px_1px_1px_#ffffff80]">{filter}</Badge>
                    })
                }
            </div>
            <div className="absolute bottom-0 left-0 bg-gray  shadow-sm rounded-[20px] border-none p-[30px] mt-[60px] max-w-1/2">
                <Button asChild className={((switchSet) ? "!bg-gradient-to-r !from-blue-600 !to-violet-600 gradient-animated dark:text-white" : "") + " rounded-[20px] border-none transition-all"}>
                    <Link href={(!switchSet) ? (`lessons/${link}`) : (`teach/${link}`)}>{(!switchSet) ? (`Start`) : (`Teach`)} Lesson</Link>
                </Button>
                <Sheet>
                    <SheetTrigger className="ml-3">Learn More</SheetTrigger>
                    <SheetContent side={"bottom"} className="flex light:bg-white dark:bg-gray-800 dark:border-none rounded-t-[2rem] flex-col md:flex-row md:text-center h-[95vh] lg:h-[50vh]">
                        <div className="md:w-1/2 w-full">
                            <SheetHeader className="flex md:flex-row">
                                <div className="flex flex-col gap-2 md:w-1/2">
                                    <SheetTitle className={" flex flex-row  text-3xl gap-2.5 justify-center lg:justify-start dark:text-white" }>
                                        {GotIcon && <GotIcon className="w-[40px] h-[40px]"/>}
                                        {lesson.name}
                                    </SheetTitle>
                                    <Button asChild className={((switchSet) ? "!bg-gradient-to-r !from-blue-600 !to-violet-600 gradient-animated " : " ") + " absolute bottom-0 left-0 w-[95%] lg:w-1/2 ml-3 mb-4 rounded-[20px] border-none  light:bg-black light:text-white dark:bg-white dark:text-black  hover:bg-gray-600 transition-all"}>
                                        <Link href={(!switchSet) ? (`lessons/${link}`) : (`teach/${link}`)}>{(!switchSet) ? (`Learn`) : (`Teach`)} Lesson</Link>
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-2 md:w-1/2">
                                    <SheetDescription>
                                        {lesson.description}
                                    </SheetDescription>
                                    <SheetDescription>
                                        {lesson.extendedDesc}
                                    </SheetDescription>
                                </div>
                            </SheetHeader>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h1 className="text-2xl font-bold text-center md:text-left">Steps</h1>
                            <Carousel className="ml-[5vw] mr-[5vw] mt-[5vw] lg:mt-0">
                                <CarouselContent>
                                    {
                                        lesson.steps && Object.keys(lesson.steps).map((key, index) => {
                                            return (
                                                <CarouselItem className="!basis-1/2" key={key}>
                                                    <Card className="text-left h-full">
                                                        <CardHeader>
                                                            <CardTitle>{(index + 1) + ". " + lesson.steps[key].Title || ""}</CardTitle>
                                                            <CardDescription>{lesson.steps[key].Overview || ""}</CardDescription>
                                                        </CardHeader>
                                                    </Card>
                                                </CarouselItem>
                                            );
                                        })
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    </>
}