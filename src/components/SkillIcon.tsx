import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type SkillIconProps = {
  hoverBackgroundColor: string;
  className: string;
  Icon: ReactNode;
};

export default function SkillIcon({
  className,
  hoverBackgroundColor,
  Icon,
}: SkillIconProps) {
  const splatVariants = {
    hovered: {
      scale: 1.7,
      fill: hoverBackgroundColor,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "circOut",
      },
    },
    inactive: {
      scale: 1,
      fill: "#FFF",
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "circIn",
      },
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  } satisfies Variants;

  const circleVariants = {
    hovered: {
      fill: hoverBackgroundColor,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "circOut",
      },
    },
    inactive: {
      fill: "#FFF",
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "circIn",
      },
    },
  } satisfies Variants;

  const svgVariants = {
    hovered: {
      scale: [1, 0.8],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        type: "tween",
        ease: "easeOut",
        repeatType: "mirror",
      },
    },
  } satisfies Variants;

  const d =
    "M89.875 55.8184C95.0166 48.0605 106.439 48.0605 111.581 55.8185L112.605 57.3638C115.64 61.9441 121.242 64.1222 126.587 62.8013L129.599 62.0572C140.385 59.3919 149.341 70.5645 144.35 80.461L142.653 83.8276C140.313 88.4679 140.977 94.0521 144.341 98.0182L146.943 101.085C152.968 108.188 149.669 119.121 140.711 121.734C135.128 123.362 131.327 128.512 131.432 134.309L131.476 136.778C131.676 147.862 118.728 154.066 110.167 146.987L108.138 145.31C103.735 141.67 97.4631 141.324 92.6843 144.458L91.6974 145.105C83.6537 150.38 72.8478 145.418 71.6434 135.897L71.3094 133.257C70.6404 127.969 66.7921 123.628 61.6091 122.314L59.811 121.859C49.9816 119.369 46.6664 107.122 53.9051 100.043L56.4794 97.5247C60.2234 93.8628 61.3939 88.3179 59.4478 83.4629L58.2944 80.5853C54.5063 71.1349 62.6209 61.2185 72.6709 63.0164L75.3563 63.4968C80.4716 64.412 85.6426 62.2043 88.5071 57.8823L89.875 55.8184Z";

  return (
    <motion.svg
      viewBox="0 0 200 200"
      whileHover={["hovered", "spin"]}
      whileTap={["hovered", "spin"]}
      initial="inactive"
      variants={svgVariants}
      className={cn(className)}
    >
      <motion.path d={d} variants={splatVariants} />
      <motion.circle cx={100} cy={100} r={70} variants={circleVariants} />
      <motion.g transform={"translate(50, 50)"}>{Icon}</motion.g>
    </motion.svg>
  );
}
