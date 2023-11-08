import { motion, useAnimate } from "framer-motion";
import useAnimationLoop, {
  type useAnimationLoopOptions,
} from "../hooks/useAnimationLoop";

export type BackgroundBlurAnimationLoops = {
  size: useAnimationLoopOptions;
  x: useAnimationLoopOptions;
  y: useAnimationLoopOptions;
};

export type BackgroundBlurProps = {
  color: "primary" | "secondary";
  animationLoops: BackgroundBlurAnimationLoops;
};

export default function BackgroundBlur({
  color,
  animationLoops,
}: BackgroundBlurProps) {
  const [scope, animate] = useAnimate();

  const size = useAnimationLoop(animate, {
    initialValue: 100,
    ...animationLoops?.size,
  });
  const x = useAnimationLoop(animate, {
    ...animationLoops.x,
  });
  const y = useAnimationLoop(animate, {
    ...animationLoops.y,
  });

  return (
    <motion.div
      ref={scope}
      style={{
        backgroundImage: `radial-gradient(var(--${color}) 0%, transparent 100% )`,
        x,
        y,
        width: size,
        height: size,
      }}
      className={`opacity-50 blur-lg absolute rounded-full`}
    />
  );
}
