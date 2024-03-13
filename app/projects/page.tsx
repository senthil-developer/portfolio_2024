import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full">
      World
      <div className=" flex h-full max-w-full flex-col items-center justify-center">
        <h1 className=""> Skills page </h1>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
        <div className="bg-red bg-re  d-300 z-[1000] mx-12 flex h-fit w-full items-center justify-center overflow-x-scroll py-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="relative h-32 w-20" key={index}>
              <Image src={"/hero.png"} fill alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
