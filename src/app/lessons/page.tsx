"use client"

import { Lessons, filters, filterButtons } from "../../../public/lessons/Lessons";
import Lesson from "@/components/ui/Lesson";
import LessonFilter from "@/components/ui/LessonFilter";
import PersonalizedFilter from "@/components/ui/PersonalizedFilter";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { CircleX, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"


  
export default function LessonPage() {

    const [appliedFilters, setFilters] = React.useState<object>({});
    const [isTeachMode, setIsTeachMode] = React.useState(false);

    const handleSwitchChange = (checked: boolean) => {
        setIsTeachMode(!checked);
    };

    const changeFilters = (key: string, val: string) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: val
        }));
    }

    const isFiltersNotBlank = () => {
        return Object.keys(appliedFilters).some(key => appliedFilters[key] !== "N/A");
    }

    const isJobFilterShow = (lesson: object) => {
        return Object.keys(appliedFilters).every((filter: string) => {
            let bool = true;
            if (appliedFilters[filter] === "N/A") {
                return true;
            }

            if (filter === "AP Unit") {
                bool = lesson.unit === appliedFilters[filter];
            } 
            if (filter === "Level") {
                bool = lesson.filters.includes(appliedFilters[filter]);
            }
            if (filter === "Lesson Type") {
                bool = lesson.filters.includes(appliedFilters[filter])
            }

            return bool;
        });
    }
    

    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-5">
            <div className="z-10 w-full items-center justify-between lg:flex mr-0">
                <div className="flex flex-col gap-2 max-w-full" >
                    <div className=" w-[100%] h-fit mb-4">
                        <div className="flex flex-row gap-3 ">
                            {Object.values(filterButtons).map((filter, index) => (
                                <LessonFilter key={index} title={filter.title} options={["N/A", ...filter.options]} changeFilters={changeFilters}/>
                            ))}
                            <Drawer>
                                <DrawerTrigger><PersonalizedFilter className="ml-[10px]"/></DrawerTrigger>
                                <DrawerContent className="!bg-white ml-4 mr-4 rounded-t-[2rem] h-[90vh]">
                                    <DrawerHeader>
                                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                    <Button>Submit</Button>
                                    <DrawerClose>
                                        <Button variant="outline">Cancel</Button>
                                    </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                            <div className="grid place-items-center float-right ml-auto">
                                <div className="flex flex-row gap-2 align-middle">
                                    <Label htmlFor="lesson-teach" className="text-1xl">{isTeachMode ? "Teach" : "Learn"}</Label>
                                    <Switch id="lesson-teach" checked={isTeachMode} onCheckedChange={() => handleSwitchChange(isTeachMode)}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {isFiltersNotBlank() && (
                        <div className="mb-2 bg-white py-[1rem] rounded-[2rem] shadow-[0px_20px_20px_10px_#00000024] mb-[2rem]">
                            <div className="flex flex-row gap-2">
                                <h1 className="flex flex-row gap-[1rem] font-bold text-3xl ml-[2rem] pt-[1rem]">Custom Filters <SlidersHorizontal className="w-[30px] h-auto"/></h1>
                            </div>
                            <div className="flex flex-row gap-[0.5rem] ml-[2rem] mt-2">
                                {Object.keys(appliedFilters).map((key, index) => (
                                    <Badge key={index} className="bg-black text-white hover:bg-black hover:text-gray-300">
                                        {`${key}: ${appliedFilters[key]}`}
                                    </Badge>
                                ))}
                            </div>
                            <Carousel>
                                <CarouselContent>
                                    {Lessons.map((lesson: Object) => (
                                        <>
                                            {isJobFilterShow(lesson) && <>
                                            <CarouselItem key={lesson.id} className="md:basis-1/2 lg:basis-1/3 min-h-full">
                                                <Lesson lessonObj={lesson} isTeachMode={isTeachMode}/>
                                            </CarouselItem>
                                            </>}
                                        </>
                                            

                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    )}

                    <h1 className="font-bold text-3xl">All Lessons</h1>
                    <Carousel >
                        <CarouselContent>
                            {Lessons.map((lesson: Object) => {
                                return <>
                                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 min-h-full"><Lesson lessonObj={lesson} isTeachMode={isTeachMode}/></CarouselItem>
                                </>
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    {filters.map((group: string) => {
                        return <>
                            <div className="flex flex-col mt-5 mb-5 gap-2">
                                <h1 className="text-3xl font-bold md:text-left leading-20 text-center">{group}</h1> <br/>
                                <Carousel>
                                    <CarouselContent>
                                        {
                                            Lessons.filter(lesson => lesson.filters?.includes(group)).map((lesson) => {
                                                return <>
                                                     <CarouselItem className="md:basis-1/2 lg:basis-1/3  min-h-full"><Lesson lessonObj={lesson} isTeachMode={isTeachMode}/></CarouselItem>
                                                </>
                                            }) 
                                        }
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </>
                    })}
                </div>

            </div>
        </main>
        
    </>
}