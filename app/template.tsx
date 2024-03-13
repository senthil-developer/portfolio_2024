"use client";

import { motion } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName: string = usePathname();
  const page = "/" || "/skills" || "/contact" || "/projects";

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {pathName === page && (
        <>
          <motion.div
            className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black dark:bg-white"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 top-0 z-50  m-auto h-fit w-fit cursor-default text-8xl text-white dark:text-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {pathName === "/" ? "home" : (pathName as string).substring(1)}
          </motion.div>
        </>
      )}

      <main className="mx-0 h-full pt-[5vh] lg:mx-[10%] lg:w-[80%]">
        <Navbar />
        {children}
      </main>
    </NextThemesProvider>
  );
}
