import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"


import { filters, Lessons } from "../../../public/lessons/Lessons"
import { Button } from "@/components/ui/button"
import { Circle, Sparkles } from "lucide-react"
import { CodePiece } from "@/components/ui/CodePiece";
import CoCodeLesson from "@/components/ui/CoCodeLesson"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface LessonStep {
    SubTitle: string;
    QuestionType: string;
    Teach: {
        title: string;
    };
    // Add other properties as needed
}

interface Lesson {
    name: string;
    icon: string;
    description: string;
    filters: string[];
    unit: number | string;
    passage?: string; // Ensure this matches your lesson structure
    steps: { [key: string]: LessonStep };
}

export default function CocodeLessonPage() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-1  overflow-hidden">
            <div className="w-[90vw] mb-10">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    CoCode
                </h1>
                <div className="flex flex-row gap-5">
                    <div className="w-[65%] h-full">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Introducing Codi, the AI that codes alongside you in CoCode. Tackle coding problems at Easy, Medium, and Hard levels. Codi compares your code to intended solutions, providing real-time feedback. With an integrated editor, CoCode makes learning to code engaging and effective.
                        </p>
                    </div>
                    <div className="w-[35%] h-full grid place-items-center">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 font-bold justify-center">
                                <div className="flex flex-col items-center justify-center cursor-pointer">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div>
                                                    <div className="w-10 h-10 rounded-full bg-[#ec695f] shadow-[0px_0px_5px_0px_#ec695f] hover:shadow-[0px_0px_20px_0px_#ec695f] transition-all"></div>
                                                    <p className="mt-1">Hard</p>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-[300px] dark:!bg-gray-800">
                                                Engage in challenging exercises focused on advanced AP-level topics such as complex algorithms, data structures optimization, and advanced programming techniques.
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <div className="flex flex-col items-center justify-center cursor-pointer">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col ">
                                                    <div className="w-10 h-10 mx-auto rounded-full bg-[#f6bd4f] shadow-[0px_0px_5px_0px_#f6bd4f] hover:shadow-[0px_0px_20px_0px_#f6bd4f] transition-all"></div>
                                                    <p className="mt-1">Medium</p>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-[300px] dark:!bg-gray-800">
                                                Navigate through a diverse range of topics covering object-oriented programming principles, intermediate algorithms, and practical applications in coding.
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <div className="flex flex-col items-center justify-center cursor-pointer">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col ">
                                                    <div className="w-10 h-10 rounded-full bg-[#63bd59] shadow-[0px_0px_5px_0px_#63bd59] hover:shadow-[0px_0px_20px_0px_#63bd59] transition-all"></div>
                                                    <p className="mt-1">Easy</p>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-[300px] dark:!bg-gray-800">
                                                Begin with fundamental concepts including basic syntax, variable types, and introductory algorithms designed to build a strong foundation in programming skills.
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                            <div className="text-center">
                                Hover over one of the circles to learn more.
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-4">
                    All Coding Problems
                </h2>
            </div>
            <div className="relative w-[90%] mb-5">
                <Carousel className="mb-[40px] h-[90vh]">
                    <CarouselContent>
                        {
                            Object.keys(Lessons).map((key: string, index: number) => {
                                return <>
                                    <CarouselItem className="md:basis-1/1 lg:basis-1/2" key={index}>
                                        <CoCodeLesson lesson={Lessons[key as keyof typeof Lessons]} />
                                    </CarouselItem>
                                </>
                            })
                        }
                        <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>



            </div>
            <section className="relative w-[100vw]">
                <div className="custom-shape-divider-bottom-1719687637">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section className="relative h-[100vh] bg-[#2A3E83] w-[100vw]">
                <div className="px-[4rem] pt-[7rem] mb-[8rem] text-white">
                    <div className="flex flex-row gap-2 mb-2">
                        <Sparkles className="w-14 h-14" />
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Personalized</h1>
                    </div>
                    <Carousel className=" h-screen">
                        <CarouselContent className="overflow-visible">
                            {
                                Object.keys(Lessons).map((key, index) => {
                                    return <>
                                        <CarouselItem className="md:basis-1/1 lg:basis-1/2" key={index}>
                                            <CoCodeLesson lesson={Lessons[key as keyof typeof Lessons]} />
                                        </CarouselItem>
                                    </>
                                })
                            }
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2 overflow-visible">
                                <Card className="overflow-visible">
                                    <CardHeader>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardDescription>Card Description</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardDescription>Card Description</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </section>

            <section className="h-[5vh] w-screen relative bg-[#2A3E83]"></section>

            <section className="h-[50vh] w-screen relative">
                <div className="custom-shape-divider-top-1719688745">
                    <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {filters.map((group: string) => {
                return <>
                    <div className="w-[90vw] h-max flex flex-col">
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mx-5 mb-5">
                            {group}
                        </h2>
                        <Carousel className="my-2 mx-5 h-[90vh]">
                            <CarouselContent>
                                {
                                    Lessons.filter(lesson => lesson.filters?.includes(group)).map((lesson, index) => {
                                        return <>
                                            <CarouselItem className="md:basis-1/1 lg:basis-1/2" key={index}>
                                                <CoCodeLesson lesson={lesson} />
                                            </CarouselItem>
                                        </>
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </>
            })}


        </main>
    </>
}