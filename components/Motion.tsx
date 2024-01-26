"use client";

import { MotionDiv } from "@/types";
import {
  AnimationControls,
  Target,
  TargetAndTransition,
  Transition$1,
  VariantLabels,
  ViewportOptions,
  motion,
} from "framer-motion";

interface MotionDivs {
  children: React.ReactNode;
  initial?: boolean | Target | VariantLabels;
  animate?:
    | boolean
    | VariantLabels
    | AnimationControls
    | TargetAndTransition
    | undefined;
  transition?: Transition$1 | undefined;
  viewport?: ViewportOptions | undefined;
}

export default function MotionDiv({
  children,
  initial,
  animate,
  transition,
  viewport,
}: MotionDivs) {
  return (
    <motion.div
      initial={initial}
      viewport={viewport}
      transition={transition}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}
