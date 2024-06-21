"use client"

import React, { useState, useEffect } from "react";
import { CodePiece } from "@/components/ui/CodePiece";
import { CircleDashed } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
  

export default function RightSideLesson(params: { lesson: any, stepNum: number}) {
    const [lesson, setLesson] = useState(params.lesson);
    const [stepNum, setStepNum] = useState(params.stepNum);

    useEffect(() => {
        setLesson(params.lesson);
        setStepNum(params.stepNum);
    }, [params.lesson, params.stepNum]);

    const step = lesson.steps[`Step${stepNum}`];

    const renderContent = () => {
        return Object.keys(step.Content).map((key) => {
            const obj = step.Content[key];
            switch (obj.type) {
                case "text":
                    return <p key={key} className="section-rightSide">{obj.content}</p>;
                case "code":
                    return <CodePiece key={key} code={obj.content} className="w-full code-sectionRightSide"/>;
                case "points":
                    return <div key={key}>
                        <h2 className="text-2xl font-semibold text-gray-700">Key Takeaway(s)</h2>
                        <ul className="flex flex-col gap-3 !list-disc m-2" >
                            {obj.content.map((point: string, index: number) => {
                                return <li key={index} className="flex flex-row gap-3"><CircleDashed />{point}</li>
                            })}
                        </ul>
                    </div>
                case "remember":
                    return <div key={key}>
                        <h2 className="text-2xl font-semibold text-gray-700">How to Remember</h2>
                        <ul className="!list-disc m-2" >
                            {obj.content.map((point: string, index: number) => {
                                return <li key={index} className="flex flex-row gap-3"><CircleDashed />{point}</li>
                            })}
                        </ul>
                    </div>
                case "link":
                    return <div key={key}>
                        <Link href={obj.content.link} className="underline text-purple-950">{obj.content.text}</Link>
                    </div>
                case "title":
                    return <h2 className="text-2xl">{obj.content}</h2>
                default:
                    return null;
            }
        });
    };

    return <>
        <div className="w-full overflow-auto pt-2">
            <h2 className="text-3xl font-bold">{step.Title}</h2>
            <Separator />
            {renderContent()}
        </div>
    </>
}