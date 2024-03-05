import MotionDiv from "@/components/MotionDiv";

export default function Home() {
  const test = {
    initial: {
      x: 1000,
      opacity: 0,
    },
    animate: {
      x: 1,
      opacity: 1,
    },
    transition: {
      duration: 2,
      type: "spring",
      delay: 1,
    },
  };

  return (
    <div className="h-[95vh]">
      hello
      <MotionDiv {...test} className={"bg-red-500"}>
        hello
      </MotionDiv>
    </div>
  );
}
