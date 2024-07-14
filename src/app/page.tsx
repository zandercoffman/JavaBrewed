"use client"

import { CodePiece } from "@/components/ui/CodePiece";
import Image from "next/image";
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


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="static h-full left-0 top-0 flex max-w-1/2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:w-1/2  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="text-5xl font-extrabold text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700 text-left">
              Brewing Knowledge and Inspiration, One Cup at a Time.
            </span>
          </div>
        </div>
        <div className=" flex  h-full w-1/2 ml-0 mr-0 justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black size-auto bg-none">
          <CodePiece code={
            ["public class JavaBrewed {", "\tpublic static void main(String[] args) {", "\t\tUser user = new User();", "\t\twhile (!user.isDone()) {", "\t\t\tuser.code();", "\t\t}", "\t}", "}"]
          } />
          
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-center w-full h-[90vh] p-20">
          <div className="w-1/2 flex flex-col gap-2 mr-14">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Lessons
            </h1>
            Welcome to your lessons, the heart of your Java learning journey! This section is designed to cater to all levels of Java learners, from beginners to advanced students, including those preparing for AP and Honors courses. Here's what you can expect:
            <Carousel>  
              <CarouselContent>
              <CarouselItem>
  <Card>
    <CardHeader>
      <CardTitle>Regular Lessons</CardTitle>
      <CardDescription>Build a strong foundation in Java.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Begin your journey with our comprehensive Regular Lessons. These cover the fundamental concepts of Java, from basic syntax and data types to object-oriented programming and error handling. Perfect for newcomers or those looking to solidify their foundational knowledge.</p>
    </CardContent>
    <CardFooter>
      <p>Get started with the basics!</p>
    </CardFooter>
  </Card>
</CarouselItem>

<CarouselItem>
  <Card>
    <CardHeader>
      <CardTitle>AP Lessons</CardTitle>
      <CardDescription>Excel in your AP Computer Science A exam.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Gear up for your AP Computer Science A exam with our specialized AP Lessons. Dive deep into more complex topics and problem-solving techniques that align with the AP curriculum. These lessons are crafted to give you the edge you need to excel in your AP exams.</p>
    </CardContent>
  </Card>
</CarouselItem>

<CarouselItem>
  <Card>
    <CardHeader>
      <CardTitle>Honors Lessons</CardTitle>
      <CardDescription>Push your skills to the next level.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Challenge yourself with our Honors Lessons, designed for advanced learners who seek a deeper understanding of Java. These lessons explore intricate concepts, advanced programming techniques, and real-world applications to push your skills to the next level.</p>
    </CardContent>
  </Card>
</CarouselItem>

<CarouselItem>
  <Card>
    <CardHeader>
      <CardTitle>Personalized Section</CardTitle>
      <CardDescription>Track your progress and get personalized recommendations.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Your learning experience should be as unique as you are. In the Personalized Section, you can track your progress, view detailed analytics, and receive customized lesson recommendations based on your learning history and performance. Whether you need to revisit a topic or take on new challenges, our personalized suggestions ensure you stay on the path to mastery.</p>
    </CardContent>
  </Card>
</CarouselItem>

              </CarouselContent>
            </Carousel>

          </div>
          <div className="w-1/2">
            <Image src={"/lessons.png"} alt={""} width={600} height={500} className="rounded-[1rem] shadow-[0px_20px_20px_10px_#00000024]"></Image>
          </div>
        </div>
    </main>
  );
}
