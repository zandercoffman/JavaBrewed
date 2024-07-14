import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Bell, SparklesIcon } from "lucide-react"

  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  

export default function POverview() {

    const suggestions = [
        "...",
        "...",
        "...",
    ]

    return <>
        <Card>
            <CardHeader></CardHeader>
            <CardContent>
                <Card className="flex flex-row">
                    <CardHeader>
                        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Great job!</CardTitle>
                        <CardDescription className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">You are on the right track.</CardDescription>
                        <p>Suggestions:</p>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2 mt-2">
                            {
                                suggestions.map((suggestion) => {
                                    return <>
                                        <div className="light:bg-gray-200 dark:bg-gray-800 rounded-[1.5rem] w-full h-fit px-4 py-3">
                                            <div className="flex flex-row gap-2">
                                                <SparklesIcon/> {suggestion} 
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
            <CardFooter>
                <Alert>
                    <Bell className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        Advanced Placement (AP) Computer Science content referenced in this application is a part of the College Board's AP program. College Board and AP are registered trademarks of the College Board, which was not involved in the production of, and does not endorse, this product.
                    </AlertDescription>
                </Alert>

            </CardFooter>
        </Card>

    </>
}