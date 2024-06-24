"use client"

import { Tabs } from "@/components/ui/3DTabs"
import { getLessonByParamName, returnIcon } from "../../../../public/lessons/Lessons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";
import { Menu, Terminal, Bell } from "lucide-react";
import React, { createContext, useContext } from "react";
import { Textarea } from "@/components/ui/textarea"
import { TeachComponent } from "@/components/ui/TeachComponent";
import { LeftSideLearnSide } from "@/components/ui/LearnLeft";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"


const nodesAndEdges: object[] = [];
const text: object[] = [];

export default function TeachingPage({ params }: { params: { lessonName: string } }) {
    const {lessonName} = params;
    const lesson = getLessonByParamName(lessonName);
    const Icon = returnIcon(lesson.icon);

    const [step, setStep] = React.useState(0);
    const [tabs, setTabs] = React.useState<any>(null);

    const returnMessageBasedOnInput = (topic, name) => {
        const displayMessages = {
            "typing": {
                1: `What are ${name} in Java? I've heard about them but I'm not quite sure what they do. Could you explain?`,
                2: `I need to learn about ${name}. Could you help explain to me about it? Thanks.`,
                3: `Can you provide some examples of ${name} in Java?`,
                4: `I'm writing about ${name}. Is this explanation correct?`
            },
            "nodes": {
                1: `I need to connect these nodes to explain ${name}. Could you help me start with the first node?`,
                2: `Where should I place the node for ${name} in relation to the other nodes?`,
                3: `Should the node for ${name} connect directly to the main class node?`,
                4: `Is this the right way to arrange the nodes to show how ${name} works?`
            }
        };
    
        if (displayMessages[topic]) {
            const messages = displayMessages[topic];
            const randomKey = Math.floor(Math.random() * Object.keys(messages).length) + 1; // Get a random key from 1 to length
            return messages[randomKey];
        } else {
            return "Invalid topic. Please choose either 'typing' or 'nodes'.";
        }
    };    

    const [change, setChange] = React.useState(false);

    const [nodeInfo, setNodeInfo] = React.useState("Infor");

    const [showLeftSide, setshowLeftSide] = React.useState(false);

    const stepKeys = Object.keys(lesson.steps);

    const [flags, setFlags] = React.useState(new Array(stepKeys.length).fill(false));

    const [randomArray, setRanArray] = React.useState(stepKeys.map(() => Math.round(Math.random())));
    
    const [messages, setMessages] = React.useState({});

    const setnewinfo = (s: string) => {
        setNodeInfo(s);
    }

    React.useEffect(() => {
        if (tabs) {
            const obj = tabs[step];
            setshowLeftSide(obj.rannum == 1);

            if (flags[step] === false && step != 0) {
                const messageId = Date.now().toString();

                const topic = (showLeftSide) ? "nodes" : "typing";
                
                
                setMessages((prevMessages) => ({
                    ...prevMessages,
                    [messageId]: { text: returnMessageBasedOnInput(topic, lesson.steps[`Step${step}`].Teach.title), type: 'ai' }
                }));
                
                setFlags((prevFlags) => {
                    const newFlags = [...prevFlags];
                    newFlags[step] = true;
                    return newFlags;
                });
            }
            
                
        }
    }, [step, tabs])

    React.useEffect(() => {
        const lessonStepsTabs = Object.keys(lesson.steps).map((key, index) => {
            const thisStep = lesson.steps[key];
            if (thisStep.QuestionType !== "default") return null;
            const rannum = randomArray[index];
            return {
              title: thisStep.SubTitle,
              value: `step${index + 1}`,
              rannum: rannum,
              content: <>
                <TeachComponent thisStep={thisStep} rannum={rannum} info={nodeInfo}/>
              </>,
            };
          }).filter(tab => tab !== null);

          setTabs([
            {
              title: 'Overview',
              value: 'overview',
              content: <Card className="border-none">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>In this simulation, you will teach {lesson.name} to AI. There are two ways to teach, by giving a diagram through connecting nodes and writing to give an explanation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row w-full">
                        <div className="w-1/2">Hello</div>
                        <div className="w-1/2">Hello</div>
                    </div>
                </CardContent>
                <CardFooter className="!flex-col !gap-4">
                    <Alert>
                        <Bell className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            There is a bug in this section, to get the sentence to render in a dragging nodes section, you need to click another tab and go back. Sorry! It will be fixed.
                        </AlertDescription>
                    </Alert>
                    <div className="flex flex-row gap-4 w-full">
                        <Button className="relative w-[70%]">
                            Submit
                        </Button>
                        <div className="grid place-items-center w-[30%]">
                            <div className="flex flex-col w-full">
                                <Progress value={33} />
                                
                            </div>
                        </div>
                    </div>
                </CardFooter>
                </Card>,
            },
            ...lessonStepsTabs,
          ]);
          
    }, [lesson.steps, nodeInfo, randomArray])

    const getRandomPosition = () => ({
        x: Math.random() * 800,
        y: Math.random() * 600,
    });

    const createNode = (id, label) => ({
        id,
        position: getRandomPosition(),
        data: { label },
    });
    
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-5 overflow-hidden">
            <div className="flex flex-row w-full h-[80vh]">
                <div className="w-1/2 h-full">
                    <div className="w-full h-full">
                        <div className="flex flex-row gap-[15px] text-4xl font-extrabold text-left mt-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                                <DropdownMenuContent>
                                <Link href={"/"}><DropdownMenuLabel>Home</DropdownMenuLabel></Link>
                                <Link href={"/dashboard"}><DropdownMenuLabel>Dashboard</DropdownMenuLabel></Link>
                                <Link href={"/lessons"}><DropdownMenuLabel>Lessons</DropdownMenuLabel></Link>
                                <Link href="/practice"><DropdownMenuLabel>Practice</DropdownMenuLabel></Link>
                                <Link href="/tests"><DropdownMenuLabel>Tests</DropdownMenuLabel></Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Icon className="w-[40px] h-[40px] "/>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 text-left">
                                {lesson.name}
                            </span>
                        </div>
                        <div className="h-[100%] w-full ">
                            <LeftSideLearnSide step={step} lesson={lesson} show={showLeftSide} nodesAndEdges={nodesAndEdges} setNodeInfo={setnewinfo} info={nodeInfo} messages={messages} setMessages={setMessages}/>
                        </div>
                    </div>
                </div>
                <div className="w-1/2"> 
                    {tabs && <Tabs tabs={tabs} contentClassName="tab" setStep={setStep}/>}
                </div>
            </div>
        </main>
    </>
}   