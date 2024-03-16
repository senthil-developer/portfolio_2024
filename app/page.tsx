import MotionDiv from "@/components/MotionDiv";
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
      <div className="flex h-full flex-col px-4 pt-10 sm:px-8 md:px-12 lg:flex-row  xl:px-32 ">
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">Crafting</h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="rounded-lg p-4 ring-1 ring-black">
              View My Work
            </button>
            <button className="rounded-lg p-4 ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="relative flex h-1/2 w-full  items-center justify-center  lg:h-full ">
          <div className="h-full w-[70%] lg:w-[100%]">
            <CanvaScene />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
