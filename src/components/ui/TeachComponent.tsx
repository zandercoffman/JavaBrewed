import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TeachComponent({ thisStep, rannum, info, content, setContent, step }) {
    const [gottenInfo, setGottenInfo] = useState(info);
    const [thisContent, setThisContent] = useState(content[`${step + 1}`] || "");
    const [fullContent, setFullContent] = useState(content);

    useEffect(() => {
        setGottenInfo(info);
    }, [info]);

    useEffect(() => {
        setThisContent(content[`${step + 1}`]);
        setFullContent(content);
    }, [step, content]);

    const handleTextareaChange = (event) => {
        const { value } = event.target;
        setThisContent(value);
        setContent(`${step + 1}`, value + ".")
    };

    useEffect(() => {
        setThisContent(content[`${step + 1}`]);
    }, [content, step, thisStep])

    return (
        <Card className="!border-none m-0 !h-full">
            <CardHeader>
                <CardTitle>{thisStep.Title}</CardTitle>
                <CardDescription>{thisStep.Overview}</CardDescription>
            </CardHeader>
            <CardContent>
                {rannum === 0 ? (
                    <Textarea
                        value={thisContent}
                        onChange={handleTextareaChange}
                    />
                ): <>
                    <h2 className="text-2xl font-semibold">How to do:</h2>
                    <ul>
                        <li>Drag the top of a node to the bottom of another node.</li>
                        <li>This will start your sentence for you.</li>
                        <li>After the first point, all corresponding nodes will add to the sentance.</li>
                    </ul>
                </>}
            </CardContent>
        </Card>
    );
}
