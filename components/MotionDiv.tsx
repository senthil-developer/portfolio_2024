"use client";

import {
  AnimationControls,
  MotionAdvancedProps,
  Target,
  TargetAndTransition,
  Transition$1,
  VariantLabels,
  inView,
  motion,
} from "framer-motion";
import { useEffect } from "react";

const MotionDiv = ({
  children,
  className,
  initial,
  animate,
  transition,
  ...props
}: {
  children: React.ReactNode;
  className?: "";
  initial: boolean | Target | VariantLabels;
  animate: VariantLabels | AnimationControls | TargetAndTransition | undefined;
  transition?: Transition$1 | undefined;
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default MotionDiv;
