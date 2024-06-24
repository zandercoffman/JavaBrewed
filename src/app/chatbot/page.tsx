"use client"

import { AIMessage } from "@/components/ui/AIMessage"
import { UserMessage } from "@/components/ui/UserMessage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Search, Sparkles, MousePointer, LoaderCircle } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import React from "react"
import { getLessonByParamName } from "../../../public/lessons/Lessons"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lessons, returnIcon } from "../../../public/lessons/Lessons"
import { findAnswers, loadModel } from "../../../public/ai/tensorflowai"

export default function ChatBotPage() {

    const [topic, setTopic] = React.useState("");
    const [lesson, setLesson] = React.useState<object>({});
    const [model, setModel] = React.useState<any>(null);
    const [messages, setMessages] = React.useState({});
    const [thinking, setThinking] = React.useState(false);

    const setter = (s: string) => {
        const updatedTopic = s.trim().replace(/\s+/g, '').toLowerCase();
        setTopic(updatedTopic);
    
        // Use functional update to ensure lesson is set correctly after topic update
        setLesson(prevLesson => {
            return getLessonByParamName(updatedTopic);
        });
    };

    const grammer = (s: string) => {
        return s.substring(0, 1).toUpperCase() + s.substring(1) + ".";
    }

    React.useEffect(() => {
        setModel(loadModel());
    }, [])

    const sendMessage = async (message: string) => {
        const messageId = Date.now().toString(); // Unique message ID
        setMessages((prevMessages) => ({
            ...prevMessages,
            [messageId]: { text: message, type: 'user' }
        }));

    
        if (model && lesson) {
            try {
                setThinking(true);
                const answers = await findAnswers(message, lesson.passage || "About java");
                const bestAnswer = answers.length > 0 ? answers.sort((a, b) => b.score - a.score)[0] : answers[0];
                const aiResponse = bestAnswer ? bestAnswer.text : "I'm sorry, I couldn't find an answer.";
                setMessages((prevMessages) => ({
                    ...prevMessages,
                    [Date.now().toString()]: { text: grammer(aiResponse), type: 'ai' }
                }));
                setThinking(false);
            } catch (error) {
                console.error('Error fetching answers:', error);
                // Handle error state if necessary
            }
        }
    };
    

    const handleInputChange = (e) => {
        setTopic(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && topic.trim() !== '') {
            sendMessage(topic);
            setTopic('');
        }
    };
    
    return <>
        <main className="relative flex min-h-fit flex-col lg:flex-row items-center overflow-hidden">
            <div className="flex flex-col gap-2 h-[78vh] overflow-hidden mb-2 w-2/3">
                <div className=" border border-gray-200 rounded-[1rem] w-full h-[88%] overflow-y-auto lg:px-16 py-5">
                    {(model) ? <>
                        {Object.keys(messages).map((messageId, index) => {
                                const message = messages[messageId];
                                const isLastAIMessage = message.type === 'ai' && index === Object.keys(messages).length - 1;
                                return message.type === 'ai' ? (
                                    <>{(isLastAIMessage) ? <><AIMessage key={messageId} message={message.text} thinking={thinking}/></> : <><AIMessage key={messageId} message={message.text} /></>}</>
                                ) : (
                                    <UserMessage key={messageId} message={message.text} />
                                );
                            })}
                    </> : <>
                        <div className="grid place-items-center">
                            <div className='flex flex-col gap-2 w-full h-full text-center'>
                                <LoaderCircle className="loading"/> 
                                <h1>Loading Codi...</h1>
                            </div>
                        </div>
                    </>}
                </div>
                <div className="  rounded-[1rem] h-[12%] p-2">
                    <div className="grid place-items-center">
                        <div className="flex flex-row gap-2 place-items-center">
                            <Input
                                className="w-[400px] !bg-slate-200 !border !border-gray-300"
                                placeholder="Ask Codi"
                                value={topic}
                                onChange={handleInputChange}
                                onKeyPress={handleInputKeyPress}
                            />
                            <Button className="text-gray-600" onClick={() => sendMessage(topic)}><Send /></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center w-1/3 align-top h-[78vh]">
                <Tabs defaultValue="recc" className="grid place-items-center w-full h-full">
                    <TabsList className="!gap-2">
                        <TabsTrigger value="recc" className="!bg-white !rounded-[1rem] !gap-1">Reccomended <Sparkles/> </TabsTrigger>
                        <TabsTrigger value="topic" className="!bg-white !rounded-[1rem] !gap-1">Topic Selector <MousePointer /> </TabsTrigger>
                    </TabsList>
                    <TabsContent value="topic"  className="grid place-items-center w-full h-full " >
                        <h1 className="text-2xl font-bold text-center">Select a topic</h1>
                        <Carousel className="w-full max-w-xs align-middle text-center content-evenly max-h-[40vh]">
                            <CarouselContent>
                                {Lessons.map((lesson: object, index: any) => (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="!bg-white !rounded-[1rem]">
                                                <CardContent className="flex aspect-auto items-center justify-center p-6">
                                                    <CardHeader>
                                                        <CardTitle>{lesson.name}</CardTitle>
                                                        <CardDescription>{lesson.description}</CardDescription>
                                                        <Button onClick={() => setter(lesson.name)} className="!bg-black !rounded-[1rem] !text-white">Select This Lesson</Button>
                                                    </CardHeader>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="flex flex-row gap-2" >
                            <Input className="w-2/3 border-2 border-gray-300" />
                            <Button className="flex flex-row gap-2 bg-slate-300 w-1/3 rounded-[1rem] mx-5 text-gray-600">Search <Search/></Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="recc"  className="grid place-items-center w-full h-full">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </main>

    </>
}