import { useEffect } from "react";
import {
  animate as animateFunction,
  useMotionValue,
  type ValueAnimationTransition,
} from "framer-motion";

export type useAnimationLoopOptions = {
  initialValue?: number | string;
  values: number[] | string[];
  duration: number;
  transitionOptions?: ValueAnimationTransition;
};

export default function useAnimationLoop(
  animate: typeof animateFunction,
  {
    //initialValue,
    values,
    duration,
    transitionOptions = {
      type: "tween",
      repeatType: "loop",
      repeat: Infinity,
      ease: "easeInOut",
    },
  }: useAnimationLoopOptions,
) {
  const val = useMotionValue(values[0]);

  useEffect(() => {
    const controls = animate(val, [...values, values[0]], {
      duration,
      ...transitionOptions,
    });

    return controls.stop;
  });

  return val;
}
