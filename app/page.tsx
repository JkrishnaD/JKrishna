"use client";
import { Aboutsection } from "@/components/about-section";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div
      className="absolute inset-0 h-fit w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
  bg-[size:14px_24px] 
  dark:bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]"
    >
      <div className="mx-auto w-full max-w-3xl min-h-[100dvh]">
        <div className="flex items-center flex-col space-y-12 mx-3">
          <Header />
          <Aboutsection />
          <Skills />
          <Education/>
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
}
