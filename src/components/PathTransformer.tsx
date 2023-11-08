import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFlubber } from "../hooks/useFlubberPaths";

export type PathTransfromerProps = {
  duration: number;
  fill: string;
  paths: string[];
  scale?: number;
  translate?: number;
};

export default function PathTransfromer({
  duration = 10,
  fill,
  paths,
  scale = 1,
  translate = 0,
}: PathTransfromerProps) {
  const progress = useMotionValue(0);
  const d = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, paths.length - 1, {
      ease: "linear",
      duration,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0,
    });

    return () => animation.stop();
  }, []);

  return (
    <motion.path
      d={d}
      fill={fill}
      transform={`translate(${translate} ${translate}) scale(${scale} ${scale})`}
    />
  );
}
