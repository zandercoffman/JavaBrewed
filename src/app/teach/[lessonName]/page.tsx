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
import React, { createContext, useContext, useState } from "react";
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
import { Overview } from "@/components/ui/AIOverview";

const nodesAndEdges: object[] = [];
const text: object[] = [];

export default function TeachingPage({ params }: { params: { lessonName: string } }) {
    const {lessonName} = params;
    const lesson = getLessonByParamName(lessonName);
    const Icon = returnIcon(lesson.icon);

    const initialContent = {};
    Object.keys(lesson.steps).forEach((key, index) => {
        initialContent[`${index}`] = "";
    });

    const [step, setStep] = React.useState(0);
    const [tabs, setTabs] = React.useState<any>(null);
    const [content, setContent] = useState(initialContent);

    const submit = () => {
        const positiveFeedbackMessages = [
            "I found this explanation very clear and helpful!",
            "This lesson is really insightful, thank you!",
            "I appreciate how detailed this curriculum is!",
            "This makes the concept much easier to understand!",
            "Great, this is exactly what I needed to know!"
        ];
        Object.keys(content).map((key, index) => {
            const messageId = Date.now().toString();
            const userMessage = content[key];

            // Add the user message to messages
            setMessages((prevMessages) => ({
                ...prevMessages,
                [messageId]: { text: userMessage, type: 'user' }
            }));
            const randomPositiveFeedback = positiveFeedbackMessages[Math.floor(Math.random() * positiveFeedbackMessages.length)];

            const aiMessageId = Date.now().toString();

            // Add the AI message and positive feedback message to messages
            setMessages((prevMessages) => ({
                ...prevMessages,
                [aiMessageId]: { text: `${randomPositiveFeedback}`, type: 'ai' }
            }));
        })
        setTimeout(() => {
            window.location.href = "/lessons";
        }, 500);
    };
    

    const grammer = (s: string) => {
        return s.substring(0, 1).toUpperCase() + s.substring(1) + ".";
    }

    const getTextMessage = async (index: number) => {
        if (model && lesson) {
            try {
                const title = content[Object.keys(content)[index]];

                const topic = lesson.steps[Object.keys(lesson.steps)[index]];

                const answers = await findAnswers((topic.Title + " does what?"), title);
                const bestAnswer = answers.length > 0 ? answers.sort((a, b) => b.score - a.score)[0] : answers[0];
                const aiResponse = bestAnswer ? bestAnswer.text : "I'm sorry, I couldn't find an answer.";
                return aiResponse;
            } catch (error) {
                console.error('Error fetching answers:', error);
                // Handle error state if necessary
            }
        }
    };

    const setThisContent = (key, value) => {
        setContent(prevContent => {
            const obj = { ...prevContent, [key]: value };
            console.log(prevContent); // Logs the previous content state
            console.log(obj); // Logs the updated object
            return obj; // Return the updated object to setContent
        });
    };
    

    const returnMessageBasedOnInput = (topic, name) => {
        const displayMessages = {
            "typing": {
                1: `What are the ${name} in Java? I've heard about them but I'm not quite sure what they do. Could you explain?`,
                2: `Also, I need to learn about the ${name}. Could you help explain it to me? Thanks.`,
                3: `Could you provide some examples of the ${name} in Java?`,
                4: `By the way, I'm writing about the ${name}. Is this explanation correct?`
            },
            "nodes": {
                1: `I was wondering, what are the ${name} in Java? I've heard about them but I'm not quite sure what they do. Could you explain?`,
                2: `Could you enlighten me about the ${name}? I need to learn more about it. Thanks.`,
                3: `Do you have any examples of the ${name} in Java?`,
                4: `I'm curious about the ${name}. Is this explanation correct?`
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
            const messageId = Date.now().toString();

            if (flags[step + 1] === false && step != 0) {
                

                const topic = (showLeftSide) ? "nodes" : "typing";
                
                
                setMessages((prevMessages) => ({
                    ...prevMessages,
                    [messageId]: { text: returnMessageBasedOnInput(topic, lesson.steps[`Step${step}`].Teach.title), type: 'ai' }
                }));
                
                setFlags((prevFlags) => {
                    const newFlags = [...prevFlags];
                    newFlags[step + 1] = true;
                    return newFlags;
                });
            }
            
                
        }
    }, [step])

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
                <TeachComponent thisStep={thisStep} rannum={rannum} info={nodeInfo} content={content} setContent={setThisContent} step={index}/>
              </>,
            };
          }).filter(tab => tab !== null);

          setTabs([
            {
              title: 'Overview',
              value: 'overview',
              content: <Overview content={content} lesson={lesson} submit={submit}/>,
            },
            ...lessonStepsTabs,
          ]);
          
    }, [lesson.steps, nodeInfo, randomArray, content])

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
                            <LeftSideLearnSide step={step} lesson={lesson} show={showLeftSide} setNodeInfo={setnewinfo} info={nodeInfo} messages={messages} setMessages={setMessages} content={content} setContent={setThisContent}/>
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