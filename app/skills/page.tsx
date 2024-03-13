import { Metadata } from "next";
import Skill from "@/components/Skill";
import { BackgroundGradient } from "@/components/backgroundGradient";
import PLaceHolderComponent from "@/components/PLaceHolderComponent";
import { Suspense } from "react";

import html from "@/public/skill/html.png";
import react from "@/public/skill/reactJs.png";
import css from "@/public/skill/css.png";
import js from "@/public/skill/js.png";
import nextJs from "@/public/skill/nextJs.png";
import zustand from "@/public/skill/zustand.png";
import threeJs from "@/public/skill/threeJs.png";
import ts from "@/public/skill/ts.png";
import tailwind from "@/public/skill/tailwind.png";
import git from "@/public/skill/git.png";

export const metadata: Metadata = {
  title: "Skills",
  description: "SkillsPage",
  icons: {
    icon: "/next.svg",
  },
};

const SkillsPage = () => {
  const skills = [
    { icon: "/skill/html.png", name: "HTML", placeholder: html },
    { icon: "/skill/css.png", name: "CSS", placeholder: css },
    { icon: "/skill/js.png", name: "JavaScript", placeholder: js },
    { icon: "/skill/ts.png", name: "TypeScript", placeholder: ts },
    { icon: "/skill/reactJs.png", name: "ReactJS", placeholder: react },
    { icon: "/skill/nextJs.png", name: "NextJs", placeholder: nextJs },
    { icon: "/skill/threeJs.png", name: "ThreeJs", placeholder: threeJs },
    { icon: "/skill/zustand.png", name: "Zustand", placeholder: zustand },
    { icon: "/skill/tailwind.png", name: "Tailwind", placeholder: tailwind },
    { icon: "/skill/git.png", name: "Git", placeholder: git },
  ];
  return (
    <div className="flex h-full w-full  flex-col gap-6 ">
      <h1 className="text-4xl font-bold">Skills</h1>

      <div className="mt-12 grid w-full grid-cols-1 place-items-center gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, i) => (
          <BackgroundGradient
            key={i}
            className="flex h-fit w-[200px] flex-col gap-3 rounded-[22px] bg-zinc-950 p-4 text-center"
            animate={true}
          >
            <Suspense
              fallback={
                <PLaceHolderComponent
                  className={"size-40 "}
                  url={skill.placeholder}
                />
              }
            >
              <Skill url={skill.icon} />
            </Suspense>
            <div className="text-lg text-white">
              <h3>{skill.name}</h3>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
