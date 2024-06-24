"use client"

import { MoveLeft, MoveRight, Menu, AlignLeft, AlignRight, BadgeInfo } from "lucide-react";
import { getLessonByParamName, returnIcon } from "../../../../public/lessons/Lessons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

import LeftSideLesson from "@/components/ui/LeftSideLesson";
import RightSideLesson from "@/components/ui/RightSideLesson";
import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Badge } from "@/components/ui/badge"




const LessonComponent = ({ params }: { params: { lessonName: string } }) => {

    const {lessonName} = params;
    const lesson = getLessonByParamName(lessonName);
    const Icon = returnIcon(lesson.icon);

    const [normal, setNormal] = React.useState(true);

    //TODO: update step code whenever i mess with it
    const [step, setStep] = React.useState(4);

    const text = "You will earn ";
  const textArray = text.split("");

  const otext = "You earned";
  const otextArr = otext.split("");

  const [isLastStep, setLastStep] = React.useState(step === Object.keys(lesson.steps).length);

  React.useEffect(() => {
    setLastStep(step === Object.keys(lesson.steps).length);
  }, [lesson.steps, lessonName, step])

  function setThisStep(a: number) {
    setStep(a);
  }

  function handleContinue() {
    setStep(step + 1);
    if (step == Object.keys(lesson.steps).length + 1) {
      window.location.href = "/lessons";
    }
  }

  function handleBack() {
    setStep((step - 1 < 0) ? 0 : step - 1);
  }

    return (
      <>
      <style jsx>{`header {
          display: none !important;
        }
      `}</style>
          <main className="relative flex min-h-screen max-h-screen flex-col items-center overflow-hidden">
            
          
            <div className="fixed z-20 flex flex-row gap-[10px] font-bold left-0 bottom-0 w-24 h-10 m-3 ">
              <Button
                variant={"outline"}
                className="rounded-[1rem] flex flex-row gap-2 bg-gray-700 text-white"
                onClick={() => {
                    handleBack();
                }}
            >
                <MoveLeft />
                <p>Back</p>
              </Button>
            </div> {/* Bottom left corner */}
            <div className="fixed  z-20 flex flex-row gap-[10px] font-bold  right-0 bottom-0 w-30 h-10 m-3 ">
                <Button
                  variant={"outline"}
                  className="rounded-[1rem] flex flex-row flex-row-reverse gap-2 bg-gray-700 text-white"
                  onClick={() => {
                      handleContinue();
                  }}
              >
                  <MoveRight />
                  <p>Continue</p>
              </Button>
            </div> {/* Bottom right corner */}
            <div className="fixed z-20 bottom-0 w-10 h-10  m-3">
                <Button variant={"outline"} className="rounded-[1rem] flex flex-row flex-row-reverse gap-2 bg-gray-700 text-white hover:bg-gray-700 hover:text-white hover:cursor-default">
                  <p>{((step / Object.keys(lesson.steps).length) * 100).toFixed(0)}%</p>
                </Button>
            </div> {/* Bottom right corner */}

            <div className="fixed rounded-[1rem] z-10 w-[100vw] items-center justify-between text-sm lg:flex pl-[2vw] pr-[2vw]">
                <div className="h-full  flex max-w-fit pb-6 pt-10  lg:w-1/2  lg:rounded-xl lg:p-4">
                    <div className="flex flex-row gap-[15px] text-4xl font-extrabold text-left mt-2">
                        <Icon className="w-[40px] h-[40px]"/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700 text-left">
                            {lesson.name}
                        </span>
                    </div>
                </div>
                <div className="w-full ml-2 mr-2 p-2">
                  <div className="navbar bg-base-100 rounded-[1rem] border-0">
                    <ul className="steps w-full justify-around">
                      {
                        Object.keys(lesson.steps).map((key, index) => {
                          const thisStep = lesson.steps[key];
                          if (thisStep.QuestionType !== "default") return <></>
                          return <li key={key} className="step cursor-pointer" onClick={() => {setThisStep(index + 1)}}><Badge>{thisStep.SubTitle}</Badge></li>;
                        })
                      }
                    </ul>
                  </div>
                </div>
                <div className=" flex shadow-sm float-right justify-end h-full w-1/2 ml-0 mr-[30px] bg-white w-fit p-1 rounded-[.5rem] dark:from-black dark:via-black size-auto bg-none">
                  <DropdownMenu>
                    <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <Link href={"/"}><DropdownMenuLabel>Home</DropdownMenuLabel></Link>
                      <Link href={"/dashboard"}><DropdownMenuLabel>Dashboard</DropdownMenuLabel></Link>
                      <Link href={"/lessons"}><DropdownMenuLabel>Lessons</DropdownMenuLabel></Link>
                      <Link href="/practice"><DropdownMenuLabel>Practice</DropdownMenuLabel></Link>
                      <Link href="/tests"><DropdownMenuLabel>Tests</DropdownMenuLabel></Link>
                      <div className="flex flex-row w-full">
                        <button className="text-center ml-auto mr-auto" onClick={() => {setNormal(!normal)}}>{(normal) ? <AlignLeft/> : <AlignRight/>}</button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
            </div>

            <div className="flex mt-[12vh] flex-row h-[74vh] md:h-[100vh]  m-[10px] ml-2 mr-2 w-[97vw] max-w-[97vw]">
              {(step <= 0) ? 
              <>
                <div className="flex flex-col w-[70vw]">
                  <h1 className="text-[38px] font-semibold p-[20px] pb-0 pl-[80px] pt-[40px]">In this lesson, you will learn...</h1>
                  <ul className="p-[20px] pl-[120px] text-[28px] list-disc">
                    {
                      lesson.goals.map((goal, index) => {
                        return <li key={index} className="goals-index">{goal}</li>
                      })
                    }
                  </ul>
                </div>

                <div className="circle-container flex flex-col align-center justify-center">
                    <div className="circle">
                      <div className="flex flex-col inner-text text-[50px]"><span className="font-bold">560</span> <span className="text-[25px]">points</span></div>
                      <div className="outer-text">
                        {textArray.map((char, index) => (
                          <span
                            key={index}
                            className="char"
                            style={{ transform: `rotate(${index * (180 / textArray.length) - 350}deg)` }}
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                      
                    </div>
                  </div>
              </> :
              <>
                {
                  (step < Object.keys(lesson.steps).length + 1) ? 
                  <>
                    <ResizablePanelGroup direction={!isLastStep ? "horizontal" : "vertical"} className={"max-h-[80vh] overflow-y-auto gap-2 resizeable-lesson" + ((isLastStep) ? " !flex-col-reverse !text-center" : " ")}>
                      <ResizablePanel defaultSize={55} className={isLastStep ? ` !max-h-[90%]` : ""}><LeftSideLesson step={step} lesson={lesson} /></ResizablePanel>
                      <ResizableHandle withHandle/>
                      <ResizablePanel defaultSize={45} className={"!overflow-y-auto !overflow-x-hidden pt-2" + ((isLastStep) ? ' !max-h-[10%] pt-2' : "")}><RightSideLesson stepNum={step} lesson={lesson}/></ResizablePanel>
                    </ResizablePanelGroup>
                  </> : 
                  <>
                    <div className="flex w-full h-full">
                      <div className="p-[10vw] w-1/2 h-full align-top">
                        <div className="p-2">
                          <h1 className="text-5xl font-bold">Complete!</h1>
                          <h2 className="text-3xl">You learned...</h2>
                          <ul className="flex flex-col gap-4 p-4">
                            {Object.entries(lesson.vocab).map(([key, item]) => {
                              return <div key={key} className="!bg-white text-center p-2 rounded-[1rem] vocab">
                                <Popover>
                                  <PopoverTrigger>{item.name}</PopoverTrigger>
                                  <PopoverContent>{item.desc}</PopoverContent>
                                </Popover>
                              </div>
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="w-1/2 h-full">
                        <div className="circle-container flex flex-col align-center justify-center">
                          <div className="circle">
                            <div className="flex flex-col inner-text text-[50px]"><span className="font-bold">560</span> <span className="text-[25px]">points</span></div>
                            <div className="outer-text">
                              {otextArr.map((char, index) => (
                                <span
                                  key={index}
                                  className="char"
                                  style={{ transform: `rotate(${index * (180 / otextArr.length) - 350}deg)` }}
                                >
                                  {char}
                                </span>
                              ))}
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
              </>}
            </div>

        </main>
      </>
        
    );
};

export default LessonComponent;
