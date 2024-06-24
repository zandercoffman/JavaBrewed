import React, { useContext } from "react";
import { Textarea } from "./textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input"

 // Import the context

export function TeachComponent(params: any) {
    const [gottenInfo, setGottenInfo] = React.useState(params.info);
    React.useEffect(() => {
        setGottenInfo(params.info);
    }, [params.info])
 // Use context

    return (
        <Card className="!border-none m-0 !h-full">
            <CardHeader>
                <CardTitle>{params.thisStep.Title}</CardTitle>
                <CardDescription>{params.thisStep.Overview}</CardDescription>
            </CardHeader>
            <CardContent>
                {params.rannum === 0 ? (
                    <Textarea />
                ) : (
                    <>
                        <div className="flex flex-row gap-3">
                            <Input className="w-2/3 !border !border-gray-400" />
                            <Button className="w-1/3">Add Node <Plus/></Button> 
                        </div>
                        <div>
                            Sentence: {gottenInfo}
                        </div>
                        
                    </>
                )}
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
