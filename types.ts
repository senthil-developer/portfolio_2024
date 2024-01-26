import {
  AnimationControls,
  Inertia,
  Keyframes,
  None,
  Orchestration,
  Repeat,
  Spring,
  Target,
  TargetAndTransition,
  Tween,
  VariantLabels,
} from "framer-motion";

interface Just {
  type: "just";
}
type PermissiveTransitionDefinition = {
  [key: string]: any;
};

type transitionDefinition =
  | (
      | (Orchestration & Repeat & Tween)
      | Spring
      | Keyframes
      | Inertia
      | Just
      | None
      | PermissiveTransitionDefinition
    )
  | (Orchestration &
      TransitionDefinition & {
        [key: string]: TransitionDefinition;
      });
type TransitionDefinition =
  | Tween
  | Spring
  | Keyframes
  | Inertia
  | None
  | Just
  | PermissiveTransitionDefinition;

export interface MotionDiv {
  children: React.ReactNode;
  initial?: boolean | Target | VariantLabels;
  animate?:
    | boolean
    | VariantLabels
    | AnimationControls
    | TargetAndTransition
    | undefined;
  transition?: transitionDefinition;
}
