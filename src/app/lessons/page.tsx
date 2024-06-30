"use client"

import { Lessons, filters, filterButtons, filterUnits } from "../../../public/lessons/Lessons";
import Lesson from "@/components/ui/Lesson";
import LessonFilter from "@/components/ui/LessonFilter";
import PersonalizedFilter from "@/components/ui/PersonalizedFilter";
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

import { Sparkles } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion"
import { DrawerScoreTab } from "@/components/ui/DrawerScoreTab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import POverview from "@/components/ui/POverview";
import { data } from "../../../public/data/UserData";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
  import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
  
  const badData = [
    { name: 'Jan', "Amount of Lessons done on this topic": 400, pv: 2400, amt: 2400 },
    { name: 'Feb', "Amount of Lessons done on this topic": 300, pv: 1398, amt: 2210 },
    { name: 'Mar', "Amount of Lessons done on this topic": 200, pv: 9800, amt: 2290 },
    { name: 'Apr', "Amount of Lessons done on this topic": 278, pv: 3908, amt: 2000 },
    { name: 'May', "Amount of Lessons done on this topic": 189, pv: 4800, amt: 2181 },
    { name: 'Jun', "Amount of Lessons done on this topic": 239, pv: 3800, amt: 2500 },
    { name: 'Jul', "Amount of Lessons done on this topic": 349, pv: 4300, amt: 2100 },
];

const apScoring = [
    { name: 'Unit 1', value: 5 },
    { name: 'Unit 2', value: 7.5 },
    { name: 'Unit 3', value: 17.5 },
    { name: 'Unit 4', value: 22.5 },
    { name: 'Unit 5', value: 7.5 },
    { name: 'Unit 6', value: 15 },
    { name: 'Unit 7', value: 7.5 },
    { name: 'Unit 8', value: 10 },
    { name: 'Unit 9', value: 10 },
    { name: 'Unit 10', value: 7.5 },
  ];
  const COLORS = [
    '#4B0082',   // indigo
    '#8A2BE2',   // blue violet
    '#5F9EA0',   // cadet blue
    '#20B2AA',   // light sea green
    '#3CB371',   // medium sea green
    '#FFD700',   // gold
    '#FFA500',   // orange
    '#FF4500',   // orange red
    '#DC143C',   // crimson
    '#8B0000',   // dark red
  ];
  
  
  interface LessonStep {
    Title: string;
    SubTitle: string;
    QuestionType: string;
    Teach: {
        title: string;
    };
    // Add other properties as needed
}

interface Lesson {
    name: string;
    icon: string;
    description: string;
    filters: string[];
    unit: number | string;
    passage?: string; // Ensure this matches your lesson structure
    steps: { [key: string]: LessonStep };
}

  
export default function LessonPage() {

    const [appliedFilters, setFilters] = React.useState<{[key: string]: string}>({});
    const [isTeachMode, setIsTeachMode] = React.useState(false);
    var curColorI = 0;
    const [selectedId, setSelectedId] = React.useState<number | null>(null);

    const {topicData, apData} = data;
    const apUnits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const items = [
        {
            id: 1,
            subtitle: "Subtitle 1",
            title: "Scores (by AP topic)",
            data: apData
        },
        {
            id: 2,
            subtitle: "Subtitle 2",
            title: "Scores (By Topic)",
            data: topicData
        },
        // More items as needed
    ];
    

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

    const isJobFilterShow = (lesson: Lesson) => {
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
    

    function getData(data: any[]): any[] {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return [{
                name: "0",
                "Amount of Lessons done on this topic": 0,
                pv: Math.random() * 10000,
                amt: Math.random() * 2500
            }];
        }
    
        const datagotten = data.map((value, index) => ({
            name: apUnits[index % apUnits.length], // Use modulo to handle cases where there are more data points than months
            "Amount of Lessons done on this topic": value,
            pv: Math.random() * 10000,
            amt: Math.random() * 2500
        }));
    
        return datagotten;
    }   
    
    const findItem = (id: number | null | undefined) => {
        return items.find(item => item.id === id);
    };

    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 pt-1">
            <div className="z-10 w-full items-center justify-between lg:flex mr-0">
                <div className="flex flex-col gap-2 max-w-full" >
                    <div className=" w-[100%] h-fit mb-4">
                        <h1 className="text-5xl font-bold mb-5">Lessons Page</h1>
                        <div className="flex flex-row gap-3 ">
                            {Object.values(filterButtons).map((filter, index) => (
                                <LessonFilter key={index} title={filter.title} options={["N/A", ...filter.options]} changeFilters={changeFilters}/>
                            ))}
                            <Drawer>
                                <DrawerTrigger><PersonalizedFilter className="ml-[10px]"/></DrawerTrigger>
                                <DrawerContent className="!bg-white ml-4 mr-4 rounded-t-[2rem] h-[95vh]">
                                    <DrawerHeader>
                                        <DrawerTitle className="flex flex-row gap-2 text-center lg:text-left">Personalized<Sparkles/></DrawerTitle>
                                        <DrawerDescription>Tailored Feedback for Your Progress. Dive into interactive lessons designed to adapt to your pace and provide custom feedback, ensuring a learning experience that fits your journey perfectly.</DrawerDescription>
                                    </DrawerHeader>
                                    <div className="flex flex-col lg:flex-row h-[90%] overflow-auto lg:overflow-hidden">
                                        <div className="w-[95%] lg:w-[60%] h-full">
                                            <Tabs defaultValue="overview" className="w-full max-w-[80vw] h-full mx-4">
                                                <TabsList className="overflow-x-auto max-w-full">
                                                    <TabsTrigger value="overview" className="text-xs w-[25%] lg:text-sm">Overview</TabsTrigger>
                                                    <TabsTrigger value="topic" className="text-xs w-[37.5%] lg:text-sm">Lessons (by Topic)</TabsTrigger>
                                                    <TabsTrigger value="ap" className="text-xs w-[37.5%] lg:text-sm">Lessons (by AP Unit)</TabsTrigger>
                                                    <TabsTrigger value={""} className="hidden lg:block">
                                                        <DrawerClose>
                                                            Exit
                                                        </DrawerClose>
                                                    </TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="overview" className="overflow-x-hidden"><POverview/></TabsContent>
                                                <TabsContent value="topic" className="overflow-x-hidden">Change your password here.</TabsContent>
                                                <TabsContent value="ap" className="overflow-x-hidden">Change your password here.</TabsContent>
                                            </Tabs>
                                        </div>
                                        <div className="w-[95%] lg:w-[40%] h-full">
                                            <div className="flex flex-col h-full justify-around">
                                                {items.map(item => (
                                                    <DrawerScoreTab
                                                        key={item.id} // Ensure key prop is passed directly to the mapped element
                                                        subtitle={item.subtitle}
                                                        title={item.title}
                                                        id={item.id}
                                                        setSelectedId={setSelectedId}
                                                        data={item.data}
                                                    />
                                                ))}
                                            </div>

                                            <AnimatePresence>
                                                {selectedId && (
                                                    <motion.div
                                                        key={selectedId}
                                                        layoutId={selectedId !== null ? String(selectedId) : undefined}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                                        className="fixed inset-0 flex items-center justify-center !backdrop-blur-[3px]"
                                                    >
                                                        <motion.div className="w-[90%]">

                                                            <Card className="shadow-[0px_20px_20px_10px_#00000024]">
                                                                <CardHeader>
                                                                    <CardTitle>{findItem(selectedId)?.title ?? ""}</CardTitle>
                                                                    <CardDescription>Learn about your scores more in-depth with a graph.</CardDescription>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className="grid place-items-center w-full">
                                                                       <div className="flex flex-row gap-3">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <CardTitle>Number of lessons completed per unit/lesson</CardTitle>
                                                                                </CardHeader>
                                                                                <CardContent>
                                                                                    <BarChart
                                                                                        width={500}
                                                                                        height={200}
                                                                                        data={getData(findItem(selectedId)?.data ?? [])}
                                                                                        className="cursor-pointer"
                                                                                    >
                                                                                        <XAxis dataKey="name" />
                                                                                        <Tooltip />
                                                                                        <Bar key={`bar-${curColorI}`} dataKey="Amount of Lessons done on this topic">
                                                                                        {
                                                                                            getData(findItem(selectedId)?.data ?? []).map((entry, index) => (
                                                                                                <Cell
                                                                                                    key={`cell-${index}`}
                                                                                                    fill={
                                                                                                        (items.find(item => item.id === selectedId)?.id === 1) ? COLORS[index] : COLORS[filterUnits[index] - 1]
                                                                                                    }
                                                                                                    
                                                                                                />
                                                                                            ))                                                                                            
                                                                                        }
                                                                                        </Bar>
                                                                                    </BarChart>
                                                                                </CardContent>
                                                                            </Card>
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <CardTitle>Exam Overview</CardTitle>
                                                                                </CardHeader>
                                                                                <CardContent>
                                                                                    <ResponsiveContainer width={300} height={300}>
                                                                                        <PieChart>
                                                                                            <Pie
                                                                                            data={apScoring}
                                                                                            cx="50%"
                                                                                            cy="50%"
                                                                                            labelLine={false}
                                                                                            outerRadius={150}
                                                                                            fill="#8884d8"
                                                                                            dataKey="value"
                                                                                            startAngle={90}
                                                                                            endAngle={-270}
                                                                                            >
                                                                                            {apScoring.map((entry, index) => (
                                                                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                                            ))}
                                                                                            </Pie>
                                                                                            <Tooltip/>
                                                                                        </PieChart>
                                                                                    </ResponsiveContainer>
                                                                                </CardContent>
                                                                            </Card>
                                                                       </div>
                                                                    </div>
                                                                </CardContent>
                                                                <CardFooter>
                                                                    <motion.button>
                                                                        <Button onClick={() => setSelectedId(null)}>Close</Button>
                                                                    </motion.button>
                                                                </CardFooter>
                                                            </Card>
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
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
                                    {Lessons.map((lesson: Lesson, index: number) => (
                                        <>
                                            {isJobFilterShow(lesson) && <>
                                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 min-h-full">
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

                    <h1 className="font-bold text-3xl lg:text-left text-center">All Lessons</h1>
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