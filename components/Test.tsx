"use server";
import MotionDiv from "./Motion";

export default async function Test() {
  return (
    <MotionDiv
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
    >
      hello
    </MotionDiv>
  );
}
