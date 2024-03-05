"use client";

import Link from "next/link";
import SocialLinks from "@/links.json";
import { usePathname } from "next/navigation";
type Props = {};

const MobileNav = (props: Props) => {
  const path = usePathname();
  const link = SocialLinks.links;
  return (
    <div className="w-full flex md:hidden justify-between items-center">
      <Link
        href={"/"}
        className="border rounded-md border-black flex items-center bg-black font-semibold justify-center p-1 text-sm"
      >
        <span className=" text-white mr-1">Senthil</span>
        <span className="bg-white rounded  w-[52px] h-8 flex items-center justify-center">
          .dev
        </span>
      </Link>
      <div>
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        <div className=""> </div>
      </div>

      {link.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`flex flex-col group ${
            path === item.link && "bg-yellow-300 rounded-sm px-2"
          }`}
        >
          {item.name}
          <span
            className={`${
              path !== item.link &&
              "border-orange-950 w-[20%] border-b-4 rounded-md group-hover:w-[80%] duration-300"
            }
                `}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
