"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import linksData from "@/links.json";
import Image from "next/image";
import DarkModeToggle from "./DarkMode";

type Props = {};

export const Navbar = (props: Props) => {
  const path = usePathname();
  const link = linksData.links;
  const socialLink = linksData.socialLinks;

  return (
    <div className="h-[5vh] absolute top-0 w-full flex justify-between  items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <Link
        href="/"
        className="text-sm rounded-md p-1 font-semibold flex items-center justify-center"
      >
        <span className="text-black mr-1 dark:text-white">Senthil</span>
        <span className="w-12 h-8 rounded bg-dark transition-all text-white flex items-center justify-center  bg-black dark:bg-white dark:text-black ">
          .dev
        </span>
      </Link>

      {/* Web Navbar */}
      <div className="hidden gap-5 md:flex w-[80%] items-center justify-between">
        <div className="flex gap-5">
          {link.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex flex-col group ${
                path === item.link && "bg-yellow-300 px-2 rounded-md"
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
        <div className="flex gap-5">
          {socialLink.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="w-[24px] h-[24px] relative"
            >
              <Image src={item.src} alt={item.name + "icon"} fill sizes="2" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-6 md:gap-0">
        <DarkModeToggle />
        {/* Mobile Navbar */}
        <div className="flex md:hidden justify-between items-center z-50">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
