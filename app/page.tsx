"use client";

import { FaceImageComponent } from "./components/image";
import { TypewriterH1 } from "./components/typewriter";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="flex flex-wrap gap-4 bg-[url('/images/clouds.jpg')] h-screen justify-center items-center gap-2 px-6">
        <div className="min-w-80">
          <p className="font-extrabold text-5xl tracking-tight text-off-white">
            Hey,
          </p>
          {/* <TypewriterH1
            text="My name is Cal Woolgar"
            speed={200}
            className="font-extrabold text-5xl tracking-tight text-almost-black"
          /> */}
          <h1 className="font-extrabold text-5xl tracking-tight text-almost-black">
            My name is Cal Woolgar
          </h1>
          <h2 className="font-medium text-3xl tracking-tight text-almost-black">
            I’m a full stack developer currently working for Three Rocks Ltd.
          </h2>
        </div>
        <div className=" min-w-80">
          <FaceImageComponent />
        </div>
      </section>

      <section className="flex gap-4 p-12 justify-center items-center flex-wrap min-w-80 w-full">
        <div className="flex flex-col w-full md:max-w-screen-sm">
          <div id="about-me" className="my-6 px-5 text-center">
            <h2 className="text-3xl font-medium tracking-tighter pb-2">
              About Me
            </h2>
            <p>
              I’m a web developer working for Three Rocks, starting from an
              apprentice knowing very little about programming, to now working
              on some of the largest clients and products we develop. Since
              starting my apprenticeship, I have earned a Batchelor of Science
              degree in Digital & Technology Solutions and now have 8+ years of
              experience programming. I love what I do and have a strong passion
              for everything related to computers and tech.
            </p>
          </div>

          <div id="tech-stack" className="my-6 px-5 text-center">
            <h2 className="text-3xl font-medium tracking-tighter pb-2">
              Tech & Tools
            </h2>
            <p>
              I’ve worked with many different tech stacks and tools over the
              years, my primary language being C#, and more recently Nuxt.js and
              React.js. Other languages I’ve worked with are HTML, CSS, JAVA and
              SQL. To help carry out my programming I’ve used many different
              tools of the trade such as Git, Postman, Insomnia, VS2022, VSCode,
              Azure, Firebase, Vercel, ChatGPT and much more.
            </p>
          </div>
        </div>
        <div className="grid px-4 grid-cols-3 w-full md:max-w-screen-sm justify-items-center items-center">
          <Image
            src="/images/tech/HTML5_logo_and_wordmark.svg.png"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/CSS3_logo_and_wordmark.svg.png"
            alt=""
            height={120}
            width={90}></Image>
          <Image
            src="/images/tech/React-icon.svg.png"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/Nuxt_logo.svg.png"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/Logo_C_sharp.svg.png"
            alt=""
            height={100}
            width={100}></Image>
          <Image
            src="/images/tech/Java_programming_language_logo.svg.png"
            alt=""
            height={90}
            width={80}></Image>
          <Image
            src="/images/tech/Bootstrap_logo.svg.png"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/Git_icon.svg.png"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/kisspng-clip-art-microsoft-azure-sql-database-microsoft-sq-skills-5b63119fd6c064.4634905815332192318796.png"
            alt=""
            height={90}
            width={90}></Image>
          <Image
            src="/images/tech/visual-studio-code-1.svg"
            alt=""
            height={120}
            width={120}></Image>
          <Image
            src="/images/tech/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc1d0a463.9294246915282503058546.png"
            alt=""
            height={100}
            width={100}></Image>
          <Image
            src="/images/tech/azure.png"
            alt=""
            height={120}
            width={120}></Image>
        </div>
      </section>
    </>
  );
}
