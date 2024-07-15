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
import Link from "next/link";
import { Github, Share } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";


export default function Home() {

  const share = async () => {
    try {
      await navigator.share({
        title: 'JavaBrewed',
        text: 'JavaBrewed ♨️ enhances computer science learning with diagrams and personalized support, simplifying complex topics for students. 100% Open Source.',
        url: 'https://java-brewed.vercel.app/', // Replace with your actual URL
      });
      console.log('Shared successfully');
    } catch (error: any) {
      console.error('Error sharing:', error.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between p-6 lg:p-24 text-center lg:text-left">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-4 lg:mb-12">
        <div className="static h-full left-0 top-0 flex max-w-full justify-center border-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-1/2 lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="text-2xl lg:text-5xl font-extrabold text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700">
              Brewing Knowledge and Inspiration, One Cup at a Time.
            </span>
          </div>
        </div>
        <div className="flex h-full w-full lg:w-1/2 justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black size-auto bg-none">
          <CodePiece code={
            ["public class JavaBrewed {", "\tpublic static void main(String[] args) {", "\t\tUser user = new User();", "\t\twhile (!user.isDone()) {", "\t\t\tuser.code();", "\t\t}", "\t}", "}"]
          } />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full h-auto lg:h-[90vh] p-3 lg:p-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Lessons
          </h1>
          <p>Welcome to your lessons, the heart of your Java learning journey! This section is designed to cater to all levels of Java learners, from beginners to advanced students, including those preparing for AP and Honors courses. Here's what you can expect:</p>
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
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image src="/lessons.png" alt="Lessons" width={600} height={500} className="rounded-[1rem] shadow-[0px_20px_20px_10px_#00000024] dark:shadow-[5px_5px_5px_5px_#f7fafc]"></Image>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full h-auto p-3 lg:p-20">
        <div className="w-full lg:w-1/2">
          <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Credibility
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Javabrewed is crafted by a developer who scored a 4 on the AP Computer Science exam, successfully passed their industry certification, and possesses a deep passion for Java programming. This app aims to distill Java's complexities into clear, engaging lessons, empowering learners to master fundamental concepts and build practical skills in programming.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <span className="font-bold">Note from the author:</span> Pst. I have been through exactly the same curriculum as what is covered under the AP section and more.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <div className="t-photo w-full">
            <Image src="/ap.png" width={500} height={600} alt="AP" className="rounded-[2rem]" />
          </div>
          <div className="t-photo w-full">
            <Link href="https://www.credly.com/badges/aa15effd-3d7e-4ea8-a109-0c410424489e/public_url">
              <Image src="/it.png" width={500} height={650} alt="IT Certification" className="rounded-[2rem]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full h-auto lg:h-[500px] p-3 lg:p-20">
        <div className="w-full lg:w-1/2">
          <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight">
            Open-Source
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            JavaBrewed is <span className="font-bold">100%</span> open-source and freely available for use. Dedicated to fostering community engagement, JavaBrewed welcomes contributions such as lesson creation and enhancements. Developed by a Java enthusiast with a strong foundation in AP Computer Science and industry certification, this platform offers comprehensive Java programming lessons. Join us in shaping the future of Java education through collaboration and innovation.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full">
          <CardContainer className="inter-var h-full w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Influence this Project
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Influence this Project by supporting us in two ways. Contributing on GitHub, or by sharing JavaBrewed.
              </CardItem>
              <div className="flex justify-around items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Link href="https://github.com/zandercoffman/JavaBrewed" className="text-lg lg:text-2xl font-bold flex items-center flex-col">
                    <Github />GitHub
                  </Link>
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl  text-xs font-bold"
                >
                 <div onClick={share} className="text-lg lg:text-2xl font-bold flex items-center flex-col">
                    <Share />Share
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </main>
  )
}
