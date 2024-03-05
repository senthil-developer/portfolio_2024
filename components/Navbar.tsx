"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import linksData from "@/links.json";

type Props = {};

export const Navbar = (props: Props) => {
  const path = usePathname();
  const link = linksData.links;

  return (
    <div className="h-[5vh] bg-red-300 flex justify-between  items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Mobile Navbar */}
      <MobileNav />
      {/* Web Navbar */}
      <div className="hidden gap-5 md:flex ">
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
    </div>
  );
};
