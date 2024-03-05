"use client";

import { motion } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, from: "left" }}
      animate={{ scale: 1, to: "top" }}
      transition={{ duration: 0.8 }}
      className="h-full"
    >
      <Navbar />
      {children}
    </motion.div>
  );
};
export default template;
