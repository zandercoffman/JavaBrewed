"use client"

import Editor from '@monaco-editor/react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

import Image from 'next/image';
import Robot from '@/components/ui/RobotSVG';

export default function CoCodePage() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-1">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-screen !h-screen rounded-lg border !bg-white"
                >
                <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                        <Robot/>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <Editor height="100%" defaultLanguage="Java" defaultValue="// Welcome to the Monaco Editor - @credits to https://www.npmjs.com/package/@monaco-editor/react" />
                        </div>
                    </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    </>
}