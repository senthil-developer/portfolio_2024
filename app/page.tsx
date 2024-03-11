import MotionDiv from "@/components/MotionDiv";
import Image from "next/image";
import heroImage from "@/public/hero.png";
import CanvaScene from "@/components/Scene";

export default async function Home() {
  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,

      opacity: 1,
    },
    transition: {
      duration: 1,
    },
  };

  return (
    <MotionDiv className="h-full" {...variants}>
      <div className="h-full flex flex-col-reverse lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative opacity-80">
          <CanvaScene />
        </div>
      </div>
    </MotionDiv>
  );
}
