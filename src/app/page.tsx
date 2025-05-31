"use client"
import Image from "next/image";
import SEO from "@/app/Components/SEO";
import Link from 'next/link';
 import React, { useState } from "react";

export default function Home() {
   const [showContact, setShowContact] = useState(false);
  //  const [contactRef, setContactRef] = useState<HTMLDivElement>(null);
   
  return (
 <>
    <SEO 
        title="Umer Hussain | Frontend Engineer & AWS Solutuions Architect - In Progress"
        description="Engineering Manager & Frontend SME specializing in Next.js, React, and TypeScript. Conference speaker and workshop facilitator with expertise in building scalable frontend systems."
        image="@app/images/profile.jpg"
        keywords="frontend engineer, conference speaker, next.js expert, react developer, typescript, javascript, engineering manager, zurichjs"
        pathname="/"
      />

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="border-2 rounded-lg p-6  flex flex-col gap-[32px] row-start-2 items-center">
        <Image 
            src={'/images/profile.jpg'}
            width={180}
            height={180} alt={"Umer Hussain"}
            className="rounded-full"
            >
            </Image>
            <p className="text-white text-4xl sm:text-6xl font-mono font-extrabold tracking-tight uppercase">
              Umer Hussain
            </p>          
          <p className="text-white text-xl sm:text-xl font-mono font-extrabold tracking-tight uppercase">
          Senior Software Engineer
          </p>
        <ul className="list-none list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            React  | Node  | AWS 
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={() => setShowContact(!showContact)}
          >
            Contact Me
          </button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            See My Work
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="www.linkedin.com/in/umer-hussain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Work Experience
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <Link href="articles" className="text-white-400 underline">Articles & Blogs</Link>
        </a>
      </footer>
    </div>
    </>
  );
}
