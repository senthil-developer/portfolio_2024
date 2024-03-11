"use client";

import { motion } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <motion.div
        className="h-screen w-screen fixed rounded-b-[100px] z-40 bg-black dark:bg-white"
        animate={{ height: "0vh" }}
        exit={{ height: "140vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="fixed m-auto top-0 bottom-0 left-0 right-0  text-8xl cursor-default z-50 w-fit h-fit text-white dark:text-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {pathName === "/" ? "home" : pathName.substring(1)}
      </motion.div>
      <main className="h-full">
        <Navbar />
        {children}
      </main>
    </NextThemesProvider>
  );
}
