"use client";

import Link from "next/link";
import SocialLinks from "@/links.json";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Props = {};

const MobileNav = (props: Props) => {
  const path = usePathname();
  const link = SocialLinks.links;

  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <button
        className="w-10 h-8 flex flex-col justify-between z-[1] relative "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
          className={cn(
            "w-10 h-1 rounded origin-left",
            !isOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white"
          )}
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black dark:bg-white rounded"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={isOpen ? "opened" : "closed"}
          className={cn(
            "w-10 h-1 rounded origin-left",
            !isOpen ? "bg-black dark:bg-white" : "bg-black dark:bg-white"
          )}
        ></motion.div>
      </button>

      {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen  flex flex-col items-center justify-center gap-8 text-4xl bg-white dark:bg-black"
        >
          {link.map((item) => (
            <motion.div
              variants={listItemVariants}
              className={cn(
                "",
                path === item.name.toLowerCase() && "te xt-orange-950"
              )}
              key={item.name}
            >
              <Link
                href={item.link}
                className={cn(
                  "hover:text-opacity-65 ",
                  path === item.link && "text-orange-500 hover:text-opacity-100"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default MobileNav;
