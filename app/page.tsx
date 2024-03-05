import MotionDiv from "@/components/MotionDiv";

export default function Home() {
  return (
    <div className="h-[95vh]">
      hello
      <MotionDiv
        initial={{ x: 1000 }}
        animate={{ x: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        hello
      </MotionDiv>
    </div>
  );
}
