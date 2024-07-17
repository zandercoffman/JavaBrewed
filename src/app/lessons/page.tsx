"use client"

import { Lessons, filters, filterButtons, filterUnits, apUnits } from "../../../public/lessons/Lessons";
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

import { data, outlierIndicesAP, outlierIndicesTopic } from "../../../public/data/UserData";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import { Sparkles } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion"
import { DrawerScoreTab } from "@/components/ui/DrawerScoreTab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import POverview from "@/components/ui/POverview";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LabelList } from 'recharts';
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

import { ChartContainer, ChartConfig, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
    topic: {
      label: "Topic Data",
      color: "#2563eb",
    },
    ap: {
      label: "AP Data",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const chartConfigAP = {
    scoring: {
      label: "AP Scoring",
    },
    unit1: {
      label: "Unit 1",
      color: COLORS[0],
    },
    unit2: {
      label: "Unit 2",
      color: COLORS[1],
    },
    unit3: {
      label: "Unit 3",
      color: COLORS[2],
    },
    unit4: {
      label: "Unit 4",
      color: COLORS[3],
    },
    unit5: {
      label: "Unit 5",
      color: COLORS[4],
    },
    unit6: {
      label: "Unit 6",
      color: COLORS[5],
    },
    unit7: {
      label: "Unit 7",
      color: COLORS[6],
    },
    unit8: {
      label: "Unit 8",
      color: COLORS[7],
    },
    unit9: {
      label: "Unit 9",
      color: COLORS[8],
    },
    unit10: {
      label: "Unit 10",
      color: COLORS[9],
    },
  } satisfies ChartConfig;

  interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{ payload: { name: string; "Amount of Lessons done on this topic": number } }>;
  }

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-5 rounded-[1rem] shadow-[0px_20px_20px_10px_#00000024]">
          <p>{`Unit: ${payload[0].payload.name}`}</p>
          <p>{`Amount of Lessons Done: ${payload[0].payload["Amount of Lessons done on this topic"]}`}</p>
        </div>
      );
    }

    return null;
  };

  interface CustomTooltipProps2 {
    payload: { payload: Record<string, any>, color: string }[];
    label: string;
    nameKey: string;
    valueKey: string;
  }
  
  const CustomTooltipContent: React.FC<CustomTooltipProps2> = ({ payload, nameKey, valueKey }) => {
    if (payload && payload.length) {
      const data = payload[0].payload;
      const color = payload[0].color; // Get the color from the payload
      return (
        <div className="bg-white flex flex-row gap-2 p-5 rounded-[1rem] shadow-[0px_20px_20px_10px_#00000024]">
          <div style={{ backgroundColor: color }} className="w-5 h-5"></div>
          <p>{`${data[nameKey]}: ${data[valueKey]}%`}</p>
        </div>
      );
    }
    return null;
  };
  
  

  
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
            data: apData,
            outliers: outlierIndicesAP,
            guideline: apUnits,
            config: chartConfigAP
        },
        {
            id: 2,
            subtitle: "Subtitle 2",
            title: "Scores (By Topic)",
            data: topicData,
            outliers: outlierIndicesTopic,
            guideline: filterUnits,
            config: chartConfigAP
        },
        // More items as needed
    ];

    const [focusedItem, setFocusedItem] = React.useState(items[0]);

    
    

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
    
    React.useEffect(() => {
        const findItemById = (id: number | null | undefined) => {
            return items.find(item => item.id === id) || items[0];
        };
    
        setFocusedItem(findItemById(selectedId));
    }, [selectedId]);

    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 pt-1">
            <div className="z-10 w-full items-center justify-between lg:flex mr-0">
                <div className="flex flex-col gap-2 max-w-full" >
                    <div className=" w-[100%] h-fit mb-4">
                        <h1 className="text-5xl font-bold mb-5 text-center lg:text-left">Lessons Page</h1>
                        <div className="flex flex-col lg:flex-row gap-3 w-fit lg:w-full mx-auto lg:mx-0 ">
                            <div className="max-w-screen lg:max-w-full flex flex-col lg:flex-row gap-2">
                                {Object.values(filterButtons).map((filter, index) => (
                                    <LessonFilter key={index} title={filter.title} options={["N/A", ...filter.options]} changeFilters={changeFilters}/>
                                ))}
                            </div>
                            <Drawer>
                                <DrawerTrigger><PersonalizedFilter className="ml-[10px]"/></DrawerTrigger>
                                <DrawerContent className="bg-white dark:bg-gray-800 dark:border-none ml-4 mr-4 rounded-t-[2rem] h-[95vh]">
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
                                                        outliers={item.outliers} 
                                                        guideline={item.guideline} 
                                                        config={item.config}                                                    />
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

                                                            <Card className="shadow-[0px_20px_20px_10px_#00000024] max-h-[98vh] flex flex-col lg:flex-row justify-center p-4">
                                                                <CardHeader className="relative">
                                                                    <CardTitle>{focusedItem?.title ?? ""}</CardTitle>
                                                                    <CardDescription>Learn about your scores more in-depth with a graph.</CardDescription>
                                                                    {JSON.stringify(focusedItem?.outliers) !== "undefined" && (
                                                                            <div className="flex flex-col gap-2">
                                                                                <h3 className="font-bold text-lg">Outliers:</h3>
                                                                                <ul className="!list-disc">
                                                                                    {focusedItem?.outliers.map((outlier, index) => (
                                                                                        <li key={index}>
                                                                                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                                                                               {focusedItem.id == 1 ? <>
                                                                                                Unit {focusedItem?.guideline[outlier]}
                                                                                               </> : <>
                                                                                               {filters[index]}
                                                                                               </>} 
                                                                                            </h3>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        )}
                                                                    <motion.button className="text-right absolute bottom-0 right:0 lg:left-0">
                                                                        <Button onClick={() => setSelectedId(null)}>Close</Button>
                                                                    </motion.button>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className="grid place-items-center w-full">
                                                                       <div className="flex flex-col lg:flex-row gap-3 max-h-[50vh] lg:max-h-[95vh] overflow-auto">
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <CardTitle>Number of Lessons Completed</CardTitle>
                                                                                    <CardDescription>{focusedItem?.title ?? ""}</CardDescription>
                                                                                </CardHeader>
                                                                                <CardContent>
                                                                                    <ChartContainer config={chartConfig} className="w-full">
                                                                                        <BarChart data={getData(focusedItem?.data ?? [])}>
                                                                                            <XAxis 
                                                                                                dataKey="name" 
                                                                                                tickLine={false}
                                                                                                tickMargin={10}
                                                                                                axisLine={false}
                                                                                                tickFormatter={(value) => value.slice(0, 3)}
                                                                                            />
                                                                                            <ChartTooltip content={<CustomTooltip />} />
                                                                                            <Bar dataKey="Amount of Lessons done on this topic" radius={4}>
                                                                                            {
                                                                                                getData(focusedItem?.data ?? []).map((entry, index) => (
                                                                                                <Cell
                                                                                                    key={`cell-${index}`}
                                                                                                    fill={focusedItem?.id === 1 ? COLORS[index] : COLORS[filterUnits[index] - 1]}
                                                                                                />
                                                                                                ))
                                                                                            }
                                                                                            </Bar>
                                                                                        </BarChart>
                                                                                    </ChartContainer>
                                                                                </CardContent>
                                                                            </Card>
                                                                            <Card>
                                                                                <CardHeader>
                                                                                    <CardTitle>Exam Overview</CardTitle>
                                                                                    <CardDescription>(Number is in %)</CardDescription>
                                                                                </CardHeader>
                                                                                <CardContent className="w-[350px] h-[350px]">
                                                                                    <ChartContainer
                                                                                    config={chartConfigAP}
                                                                                    className="aspect-square"
                                                                                    >
                                                                                        <PieChart>
                                                                                            <ChartTooltip content={<ChartTooltipContent/>} />
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
                                                                                                    <LabelList
                                                                                                        dataKey="label"
                                                                                                        className="fill-background"
                                                                                                        stroke="none"
                                                                                                        fontSize={12}
                                                                                                        formatter={(value: keyof typeof chartConfig) =>
                                                                                                        chartConfig[value]?.label
                                                                                                        }
                                                                                                    />
                                                                                                {apScoring.map((entry, index) => (
                                                                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                                                                ))}
                                                                                            </Pie>
                                                                                        </PieChart>
                                                                                    </ChartContainer>
                                                                                </CardContent>
                                                                            </Card>
                                                                       </div>
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                            <div className="grid place-items-center float-right mx-auto lg:mx-0 lg:ml-auto">
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
                            <Carousel className="mx-2">
                                <CarouselContent>
                                    {Lessons.filter(lesson => isJobFilterShow(lesson)).length === 0 ? (
                                        <div className="grid place-items-center m-3 w-full h-[200px]">
                                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                                It looks like there is nothing here. Maybe select another filter?
                                             </h4>
                                        </div>
                                    ) : (
                                        Lessons.map((lesson, index) => (
                                            isJobFilterShow(lesson) && (
                                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 min-h-full">
                                                    <Lesson lessonObj={lesson} isTeachMode={isTeachMode}/>
                                                </CarouselItem>
                                            )
                                        ))
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>

                        </div>
                    )}

                    <h1 className="font-bold text-3xl lg:text-left text-center">All Lessons</h1>
                    <Carousel className="mx-2">
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
                            <div className="flex flex-col my-5 mx-2 gap-2">
                                <h1 className="text-3xl font-bold md:text-left leading-20 text-center border-b">{group}</h1> <br/>
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