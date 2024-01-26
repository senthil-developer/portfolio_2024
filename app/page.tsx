import Nav from "@/components/Nav";
import Test from "@/components/Test";
import Skill from "@/components/Skill";
import Image from "next/image";
import Particles from "@/components/Particles";

export default function Home() {
  const skills = [
    { icon: "/html.png", name: "HTML" },
    { icon: "/css.png", name: "CSS" },
    { icon: "/js.png", name: "JavaScript" },
    { icon: "/ts.png", name: "TypeScript" },
    { icon: "/React.png", name: "ReactJS" },
    { icon: "/nextJs.png", name: "NextJs" },
    { icon: "/threeJs.png", name: "ThreeJs" },
    { icon: "/zustand.png", name: "Zustand" },
    { icon: "/tailwind.png", name: "Tailwind" },
    { icon: "/git.png", name: "Git" },
  ];
  return (
    <div className="w-full h-full bg-red-300">
      {/* <Test /> */}
      {/* <Particles /> */}
      <div className="w-full h-full bg-yellow-600 z-10 ">
        <div className="">
          <Nav />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full ark:bg-black gap-9">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center dark:bg-white border md: rounded-2xl  justify-between md:border-none md:rounded-none h-[200px] w-[150px] md:dark:bg-transparent md:bg-transparent"
              >
                <Skill url={skill.icon} />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
