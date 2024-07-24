"use client"
import { CornerDownLeft, MousePointerClick } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { useChat } from 'ai/react';
import { MessageBubble } from '@/components/ui/ChatBubble';

interface Message {
    text: string,
    time: string
}


export default function ChatBotPage() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [context, setContext] = useState<string>("");
    const [prompt, setPrompt] = useState("");


    
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    const toggleContextMenu = () => {
        setOpen(!isOpen);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };


    return <>
        <main className="flex h-[200vw] lg:h-[78vh] flex-col gap-10 items-center justify-between px-12 pb-6 text-center lg:text-left !overflow-hidden">
            <div className='flex h-full w-full flex-col lg:flex-row gap-2 transition-all duration-300'>
                <div className=' h-full rounded-lg relative transition-all duration-300' style={{ width: isOpen ? "50%" : "100%" }}>
                    <div className='w-full m-2 h-[70%] text-1xl overflow-scroll p-2'>
                        {messages.map((message, index) => (
                            <div key={index} className={`w-full lg:w-full flex justify-${index % 2 !== 0 ? "end" : "start"}`}>
                                <MessageBubble isUser={index % 2 === 0} text={message.content} />
                            </div>
                        ))}
                    </div>
                    <div className='absolute bottom-0 w-full lg:w-auto left-0 right-0 h-[13%] bg-stone-300 text-gray-700 mx-auto mb-2 rounded-full transition-all'
                        style={{
                            width: isOpen ? "80%" : "40%"
                        }}>
                        <div className='w-full h-1/2 mx-[25px] mt-3 relative flex flex-row items-center gap-2'>
                            <div className='flex relative gap-2 w-5 hover:w-40 transition-all duration-300 text-neutral-900 hover:font-bold cursor-pointer' onClick={toggleContextMenu}>
                                <div className='absolute left-0'>
                                    <MousePointerClick className='w-6 h-6' />
                                </div>
                                <div className='ml-8 overflow-hidden whitespace-nowrap'>
                                    <h1 className='font-semibold'>Choose Context</h1>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-row w-full mr-10'>
                                <Input type="text" placeholder="Ask Codi" className='mt-0 mr-28 !bg-transparent text-1xl' value={input} onChange={handleInputChange} />
                                <Button className='!bg-transparent !text-black ' type='submit'>
                                    <CornerDownLeft className='w-6 h-6' />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='h-full rounded-lg transition-all duration-300' style={{ width: isOpen ? "50%" : "0%", display: isOpen ? "flex" : "none" }}>
                    <Card className='w-full'>
                        <CardHeader>
                            <CardTitle>Context</CardTitle>
                            <CardDescription>Choose a lesson to have Codi help you even better!</CardDescription>
                        </CardHeader>
                        <CardContent>
                            Work in progress! This feature will be available later.
                        </CardContent>
                    </Card>

                </div>
            </div>
            <div className='w-full h-fit text-center text-gray-700'>Note: Codi, like all AI, can make mistakes. Always verify its responses. Codi is powered by <span className='text-blue-700 underline font-semibold cursor-pointer' onClick={() => window.location.href = "https://ai.meta.com/blog/meta-llama-3/"}>Meta Llama3-8b-8192</span>.</div>
        </main>
    </>
}