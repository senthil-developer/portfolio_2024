"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Nav = () => {
  const NavLink = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Project", link: "/project" },
  ];
  return (
    <div className="w-full top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div>
        <h1>
          senthil
          <span className="text-[#00ff00]">Developer</span>
        </h1>
        <div className="flex  justify-between items-center">
          {NavLink.map((nav, i) => {
            return (
              <Link key={i} href={nav.link}>
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
      <motion.div
        initial="0"
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: 0 }}
        className="text-white w-full flex justify-center"
      >
        <div>hello</div>
      </motion.div>
    </div>
  );
};
export default Nav;
