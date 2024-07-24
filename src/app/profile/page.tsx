"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { LoaderCircle, BookOpenText, Send, User } from "lucide-react";
import React from "react";

interface thisData {
    name: string,
    titles: string[],
    points: number
}

import { Badge } from "@/components/ui/badge"
import { data, OutliersAP, OutliersTopic } from "../../../public/data/UserData";
import { DrawerScoreTab } from "@/components/ui/DrawerScoreTab";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts';
import { combinedFilters, filterUnits } from "../../../public/lessons/Lessons";
import {
    Tooltip as ToolTip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";

import { Lessons } from "../../../public/lessons/Lessons";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Lesson from "@/components/ui/Lesson";

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

  import { useToast } from "@/components/ui/use-toast"
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AIMessage } from "@/components/ui/AIMessage";

const store = {
    Superstar: {
        name: "Superstar",
        value: 10
    },
    "Fast Learner": {
        name: "Fast Learner",
        value: 15
    },
    "Tech Guru": {
        name: "Tech Guru",
        value: 12
    },
    "Master Coder": {
        name: "Master Coder",
        value: 18
    },
    "Problem Solver": {
        name: "Problem Solver",
        value: 14
    },
    "Creative Innovator": {
        name: "Creative Innovator",
        value: 20
    },
    "Quick Thinker": {
        name: "Quick Thinker",
        value: 11
    },
    "Analytical Mind": {
        name: "Analytical Mind",
        value: 13
    },
    "Efficient Worker": {
        name: "Efficient Worker",
        value: 17
    },
    "Team Player": {
        name: "Team Player",
        value: 19
    },
    "Innovative Thinker": {
        name: "Innovative Thinker",
        value: 16
    },
    "Diligent Developer": {
        name: "Diligent Developer",
        value: 15
    },
    "Creative Thinker": {
        name: "Creative Thinker",
        value: 14
    },
    "Strategic Planner": {
        name: "Strategic Planner",
        value: 13
    },
    "Dynamic Leader": {
        name: "Dynamic Leader",
        value: 12
    },
    "Skilled Programmer": {
        name: "Skilled Programmer",
        value: 11
    },
    "Proactive Coder": {
        name: "Proactive Coder",
        value: 10
    },
    "Solution Finder": {
        name: "Solution Finder",
        value: 18
    },
    "Expert Analyst": {
        name: "Expert Analyst",
        value: 19
    },
    "Innovative Engineer": {
        name: "Innovative Engineer",
        value: 20
    }
};

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

const itemsArray = Object.values(store);
const halfIndex = Math.ceil(itemsArray.length / 2);
const firstHalfItems = itemsArray.slice(0, halfIndex);
const secondHalfItems = itemsArray.slice(halfIndex);

const messages = [
    "Happy studying!",
    "Enjoy your learning journey!",
    "Stay focused and motivated!",
    "Keep up the good work!",
    "You're making great progress!",
    "Stay curious and keep exploring!",
    "Every lesson brings you closer to mastery!",
    "Challenge yourself to go beyond!",
    "Embrace the learning process!",
    "Celebrate every milestone, big or small!"
];

const buy = (s: string) => {

}

export default function ProfilePage() {
    const { toast } = useToast()

     const APCout = OutliersAP;
     const TopicCout = OutliersTopic;

    const [userData, setData] = React.useState<thisData>({
        name: "User",
        titles: [],
        points: 0,
      });
      const [loading, setLoading] = React.useState(true);

      const {topicData, apData} = data;

      const items = [
        {
            id: 1,
            subtitle: "AP Units",
            title: "Scores (by AP topic)",
            data: apData,
            scoring: apScoring,
            outliers: APCout
        },
        {
            id: 2,
            subtitle: "Topics",
            title: "Scores (By Topic)",
            data: topicData,
            scoring: combinedFilters,
            outliers: TopicCout
        },
        // More items as needed
    ];

    const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const getData = (data: any) => {
        const thisData = data.map((value: any, index: number) => ({
            name: months[index % months.length], // Use modulo to handle cases where there are more data points than months
            "Amount of Lessons done on this topic": value,
            pv: Math.random() * 10000, // You can replace this with actual data if available
            amt: Math.random() * 2500  // You can replace this with actual data if available
        }));
        return thisData;
    }

    const [focus, setFocus] = React.useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("Focus") || "";
        }
        return "";
    });

    React.useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem("UserData") || "{}");
            if (userData && userData.name) {
              setData(userData);
              setLoading(false);
            } else {
              window.location.href = "/signup";
            }
          } catch (err) {
            alert(err)
            window.location.href = "/signup";
          }
    }, [])

    React.useEffect(() => {
        toast({
            title: `Successfully set your focus to ${focus}.`,
            description: messages[Math.floor(Math.random() * messages.length)],
        })
        localStorage.setItem("Focus", focus);
    }, [focus, toast])

    

    if (loading) 
        return <>
          <div className="grid place-items-center w-full h-screen">
            <LoaderCircle className="w-20 h-20 spin"/>
          </div>
        </>
    
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 pt-5">
            <Card className="w-full">
                <CardHeader className="gap-2">
                    <CardTitle className="flex flex-row gap-2">Welcome, {userData.name} <User/></CardTitle>
                    <CardDescription className="flex flex-row gap-2">
                        <Badge>{userData.points} point{userData.points !== 1 && "s"}</Badge>
                        {userData.titles.map((badge, index) => {
                            return <Badge variant="secondary" key={index}>{badge}</Badge>
                        })}
                    </CardDescription>
                    <Alert className="mt-2">
                        <AIMessage message={messages[Math.floor(Math.random() * messages.length)]}/>
                    </Alert>
                    <Alert className="mt-2">
                        <BookOpenText className="h-5 w-5" />
                        <AlertTitle>Focus: <Badge>{focus}</Badge></AlertTitle>
                    </Alert>
                </CardHeader>
                <CardContent className="flex flex-col gap-10">

                    {items.map(item => (
                        <Card key={item.id}>
                            <CardHeader>
                                <CardTitle>{item.subtitle}</CardTitle>
                                <CardDescription>Learn more about your progress with {item.subtitle}.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-row gap-2">
                                <div className="flex flex-col w-[500px]">
                                    <BarChart width={450} height={300} data={getData(item.data)} className="!cursor-pointer">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        {item.id === 1 && <XAxis dataKey="name" label={{ value: 'Unit', position: 'insideBottomRight', offset: 0 }} />}
                                        <YAxis label={{ value: 'Amount of Lessons', angle: -90, position: 'insideLeft' }} />
                                        <Legend />
                                        <Tooltip/>
                                        <Bar key={`bar-c`} dataKey="Amount of Lessons done on this topic" />
                                        {
                                            getData(item.data).map((entry: any, index: number) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        (item.id === 1) ? COLORS[index] : COLORS[filterUnits[index] - 1]
                                                    }
                                                />
                                            ))                                                                                            
                                        }
                                        
                                    </BarChart>
                                    {item.outliers.length > 0 && <>
                                            {JSON.stringify(item.outliers)}
                                        </>}
                                </div>
                                <ScrollArea className="h-[300px] w-[500px] rounded-md p-4 ml-auto">
                                    <Table>
                                        <TableCaption>Scoring Details</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Unit/Score</TableHead>
                                                <TableHead>Is Focus</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {item.scoring.map((score, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{score.name}</TableCell>
                                                    <TableCell>{score.value}</TableCell>
                                                    <TableCell>
                                                        {
                                                            focus == score.name ? <>
                                                                <Badge className="!rounded-[1rem]">Current Focus</Badge>
                                                            </> : <>
                                                                <Button variant={"outline"} onClick={() => setFocus(score.name)}>Set Focus</Button>
                                                            </>
                                                        }
                                                        
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    ))}     
                    <Card>
                        <CardHeader>
                            <CardTitle>Lessons based on Focus</CardTitle>
                            <CardDescription>Find a perfect lesson for you based on your target focus.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {
                                focus !== "N/A" ? <>
                                
                                <Carousel className="w-[95%] relative justify-center align-middle h-[70vh]">
                                    <CarouselContent className="!h-[60vh]">
                                        {Lessons.map((lesson: Lesson, index) => (
                                            <>
                                                {focus?.includes("Unit ") ? 
                                                <>
                                                    {focus?.split("Unit ")[1] == lesson.unit && <>
                                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 !h-[60vh]">
                                                            <Lesson lessonObj={lesson} className="!h-[60vh]"/>
                                                        </CarouselItem>
                                                    </>} 
                                                </> : 
                                                <>
                                                    {lesson.filters.includes(focus) && <>
                                                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 !h-[60vh]">
                                                            <Lesson lessonObj={lesson} className="!h-[60vh]"/>
                                                        </CarouselItem>
                                                    </>} 
                                                </>}
                                            </>
                                                

                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                                    
                                </> : <>
                                    <div className="grid place-items-center">
                                        <h1>Please select a topic.</h1>
                                    </div>
                                </> 
                            }
                        </CardContent>
                    </Card>    
                    <Card>
                        <CardHeader>
                            <CardTitle>Shop</CardTitle>
                            <CardDescription>Enjoy spending your points in this shop here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card className="px-2 py-4">
                                    <CardContent className="flex flex-col gap-2">
                                        {firstHalfItems.map((item, index) => (
                                            <div key={index} className="flex flex-row w-full"> 
                                                <div className="flex flex-row w-[85%] justify-between">
                                                    <div><Badge>{item.name}</Badge></div>
                                                    <div><Badge variant={"outline"}>{item.value}</Badge></div>
                                                </div>
                                                <div className="w-[15%] mr-2">
                                                    <Button onClick={() => {
                                                        const a = localStorage.getItem("UserData");
                                                        if (a) {
                                                            const b = JSON.parse(a);
                                                            if (typeof b.titles !== 'undefined') {
                                                                b.titles.push(item.name);
                                                                localStorage.setItem("UserData", JSON.stringify(b));
                                                                toast({
                                                                    title: "Successfully bought!"
                                                                })
                                                            }
                                                        }

                                                    }}>Buy now</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                                <Card className="px-2 py-4">
                                    <CardContent className="flex flex-col gap-2">
                                        {secondHalfItems.map((item, index) => (
                                            <div key={index} className="flex flex-row w-full"> 
                                                <div className="flex flex-row w-[85%] justify-between">
                                                    <div><Badge>{item.name}</Badge></div>
                                                    <div><Badge variant={"outline"}>{item.value}</Badge></div>
                                                </div>
                                                <div className="w-[15%] mr-2">
                                                    <Button onClick={() => {
                                                        const a = localStorage.getItem("UserData");
                                                        if (a) {
                                                            const b = JSON.parse(a);
                                                            if (typeof b.titles !== 'undefined') {
                                                                b.titles.push(item.name);
                                                                localStorage.setItem("UserData", JSON.stringify(b));
                                                                toast({
                                                                    title: "Successfully bought!"
                                                                })
                                                            }
                                                        }
                                                    }}>Buy now</Button>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>      
                </CardContent>
            </Card>

        </main>
    </>
}