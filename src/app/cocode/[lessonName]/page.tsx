"use client"

import Editor from '@monaco-editor/react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import Image from 'next/image';
import Robot from '@/components/ui/RobotSVG';
import { AIMessage } from '@/components/ui/AIMessage';
import React, { useState, useEffect, ReactComponentElement } from 'react';
import { DefaultLesson, getLessonByParamName, returnIcon } from '../../../../public/lessons/Lessons';
import CoCodeLesson from "@/components/ui/CoCodeLesson"
import CoCodeCodePiece from '@/components/ui/CoCodeCodePiece';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { ArrowUpFromLine, BookOpenCheck, CircleArrowLeft, CircleArrowRight, CircleDashed, CircleHelp, CodeXml, Menu, MessageCircle, Pencil, SquareTerminal, UserRound, Dock } from 'lucide-react';
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import leven from 'leven';
  const { parse } = require('java-parser');
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link';
  

interface LessonStep {
    Title: string;
    SubTitle: string;
    QuestionType: string;
    Teach: {
        title: string;
    };
    // Add other properties as needed
}

interface CoCode {
    easy: {
        question: string;
        expected: string;
    };
    medium: {
        question: string;
        expected: string;
    };
    hard: {
        question: string;
        expected: string;
    };
}

interface Lesson {
    name: string;
    icon: string;
    description: string;
    filters: string[];
    unit: number | string;
    passage?: string; // Ensure this matches your lesson structure
    steps: { [key: string]: LessonStep };
    cocode: CoCode;
}

type Difficulty = 'easy' | 'medium' | 'hard';

export default function CoCodePage() {

    const [lesson, setLesson] = useState<Lesson>(DefaultLesson);
    const [difficultyObject, setDiffObj] = useState<CoCode[keyof CoCode] | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);
    const [Icon, setIcon] = useState<any>(null);
    const [editorContent, setEditorContent] = useState<string>('');

    const getCapital = (s: string) => {
        return s.substring(0, 1).toUpperCase() + s.substring(1);
    }

    const [messages, setMessages] = useState<string[]>([]);

    const [isTyping, setIsTyping] = useState(false);
    const [hasTyped, setHasTyped] = useState(false); 
    const [hasDone, setHasDone] = useState(false);

    const handleInputChange = () => {
        setIsTyping(true);

        setTimeout(() => {
        setIsTyping(false);
        }, 1000);
    };

    useEffect(() => {
        const url = window.location.href;
        const urlObj = new URL(url);
        const searchParams = new URLSearchParams(urlObj.search);
        const lessonName = urlObj.pathname.split('/').pop()?.toString() || "";
        const difficulty = (searchParams.get('difficulty') || "easy") as Difficulty;
        setDifficulty(difficulty);
        const fetchedLesson = getLessonByParamName(lessonName);
        setLesson(fetchedLesson);
        setIcon(returnIcon(fetchedLesson.icon));

        if (fetchedLesson.cocode) {
            setDiffObj(fetchedLesson.cocode[difficulty]);
        }
    }, []);

    useEffect(() => {
        if (lesson.cocode) {
            const url = window.location.href;
            const urlObj = new URL(url);
            const searchParams = new URLSearchParams(urlObj.search);
            const difficulty = (searchParams.get('difficulty') || "easy") as Difficulty;
            setDiffObj(lesson.cocode[difficulty]);
        }
    }, [lesson]);

    function changeContent(value: any): void {
        setEditorContent(value);
        if (!hasTyped) {
            setHasTyped(true);
        }
    }

    function getPercentage() {

        if (hasDone || editorContent == "") {
            return 0;
        }

        setMessages(prevMes => [...prevMes, "javac Program.java"]);

        try {
            const text = parse(editorContent);
            setMessages(prevMes => [...prevMes, "java Program"]);
    
            let expected = difficultyObject?.expected || "";
            let gotten = editorContent.trim().replace(/\s+/g, '').toLowerCase();
            let comp = leven(expected, gotten);
            let max_length = Math.max(expected.length, gotten.length);
            let accuracy = (1 - (comp / max_length)) * 100;
            const randomBiasFactor = Math.random() * 10;
            accuracy += randomBiasFactor;

            setMessages(prevMes => [...prevMes, "", `I rate you a ${Math.max(0, Math.min(accuracy, 100)).toFixed(2)}% for your algorithm. Great job!`]);
            setHasDone(true);
            setEditorContent("");
            return Math.max(0, Math.min(accuracy, 100)).toFixed(2);
            //alert(JSON.stringify(text))
            
        } catch (err: any) {
            setMessages(prevMes => [...prevMes, `ERROR! Syntax is broken somewhere. ${err.message.substring(0, 110)}`]);
            return 0;
        }
    }

    return <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-1">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-screen !h-[95vh]  border-none transition-all "
                >
                <ResizablePanel defaultSize={40}>
                    <div className='flex flex-row mx-3 items-center justify-center'>
                        <DropdownMenu>
                            <DropdownMenuTrigger><Menu className='w-7 h-7' /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <Link href={'/profile'}><DropdownMenuLabel className='flex flex-row gap-2'><UserRound/>My Account</DropdownMenuLabel></Link>
                                <DropdownMenuSeparator />
                                <Link href="/chatbot"><DropdownMenuItem className='flex flex-row gap-2'><MessageCircle/> Chatbot</DropdownMenuItem></Link>
                                <Link href="/cocode"><DropdownMenuItem className='flex flex-row gap-2'><CodeXml/> Cocode</DropdownMenuItem></Link>
                                <Link href="/lessons"><DropdownMenuItem className='flex flex-row gap-2'><BookOpenCheck/> Lessons</DropdownMenuItem></Link>
                                <Link href="/"><DropdownMenuItem className='flex flex-row gap-2'><Dock /> Home </DropdownMenuItem></Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mx-5 h-[5%]'>Cocode</h1>
                        <Badge className='h-[100%] my-[0.5rem]'>{difficulty && getCapital(difficulty)}</Badge>
                    </div>
                    <div className="flex flex-col gap-3 h-[95%] items-center justify-center p-6">
                        <Robot hasTyped={editorContent !== ""} />
                        <div className='  w-full bg-white rounded-[2rem] border-2 px-3 py-2 '>
                            <div className=' w-full justify-center items-center text-center'>
                                <div className="flex flex-row gap-2 w-fit px-3">
                                    <div className="relative w-full break-all bg-gray-600 rounded-[2rem] px-4 py-3 chat-bubble-ai ">
                                        {hasTyped.toString()}{editorContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel defaultSize={60} className='glassmorphic-panel rounded-l-3xl'>
                    <ResizablePanelGroup direction="vertical" >
                        <ResizablePanel defaultSize={22}>
                            <div className='flex flex-row gap-3 w-[95%]'>
                                <div className="flex flex-col gap-2  p-6">
                                    <div className='flex flex-row gap-3'>
                                        {Icon && <Icon className="w-10 h-10"/>}
                                        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">{lesson.name}</h1>
                                    </div>
                                    <div>
                                        {lesson && <p>{difficultyObject?.question}</p>}
                                    </div>
                                </div>
                                <div className='grid items-center pr-5'>
                                    <Popover>
                                        <PopoverTrigger><CircleHelp className='w-10 h-10'/></PopoverTrigger>
                                        <PopoverContent className='w-[50vw] mt-3'>
                                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                                CoCode
                                            </h2>
                                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                                The CoCode feature in our Java lessons lets learn interactively. Here's how it works:
                                            </p>
                                            
                                            <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
                                                <li>
                                                    <span className='font-bold'>Unified Coding Interface:</span> Type all your code in one textbox. Though it looks like one file, the system treats different classes as separate files.
                                                </li>
                                                <li>
                                                    <span className='font-bold'>Main Class - Program:</span> All code that will be ran is in a class called Program, making it easy to follow and execute. Stick your main method there.
                                                </li>
                                            </ul>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={78} className='rounded-[1rem]'>
                            <Tabs defaultValue="editor" className="w-full h-full">
                                <TabsList className='mx-4'>
                                    <TabsTrigger value="editor" className='flex flex-row gap-2'><Pencil />Editor</TabsTrigger>
                                    <TabsTrigger value="terminal" className='flex flex-row gap-2'><SquareTerminal />Terminal</TabsTrigger>
                                </TabsList>
                                <TabsContent value="editor" className='h-full w-full rounded-[2rem]'>
                                    <div className="flex h-full items-center justify-center p-6 !rounded-[2rem]">
                                        <Editor
                                            height="100%"
                                            defaultLanguage="java"
                                            defaultValue={editorContent}
                                            onChange={(value: any) => changeContent(value)}
                                            className='!rounded-[2rem]'
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="terminal" className='h-full w-full rounded-[2rem]'>
                                    <div className='flex flex-row gap-2 ml-[1rem]'>
                                        <Button onClick={() => getPercentage()} className='flex flex-row gap-2'>Submit <ArrowUpFromLine /></Button>
                                    </div>
                                    <div className="flex h-[90%] w-full p-6 !rounded-[2rem]">
                                        <div className="mockup-code !w-full h-full max-h-[90%] !overflow-auto">
                                            <div className="flex flex-col ml-[1rem]">
                                                {
                                                    messages.map((s, key) => {
                                                        return <code key={key}>{key === messages.length - 1 ? '$' : ''} {s}</code>
                                                    })
                                                }
                                                {hasDone && <>
                                                    <Button variant={"outline"} className='fixed bottom-[10px] right-[3vw] mb-[3vh] text-black' onClick={() => window.location.href = "/cocode"}>Continue</Button>
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    </>
}