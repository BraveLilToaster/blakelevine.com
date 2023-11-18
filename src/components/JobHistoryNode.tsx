import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

type NodeProps = {
  id: string;
  logo: string;
  isActive: boolean;
  size: number;
  cx: number;
  cy: number;
};

export default function JobHistoryNode({
  id,
  logo,
  isActive,
  size,
  cx,
  cy,
}: NodeProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isActive) {
      animate(scope.current, { scale: 1.25 }, { type: "spring" });
      animate(".node", { fill: "white" }), { type: "spring" };
      animate(".logo", { opacity: 1, scale: 1 });
    } else {
      animate(scope.current, { scale: 1 });
      animate(".node", { fill: "grey" }, { type: "spring" });
      animate(".logo", { opacity: 0, scale: 0 });
    }
  }, [isActive]);

  return (
    <motion.g ref={scope}>
      <motion.circle
        className="node"
        cx={cx}
        cy={cy}
        r={size * 0.75}
        scale={1}
        fill="grey"
      />
      <motion.g className="logo" opacity={0} scale={0}>
        <defs>
          <clipPath id={`clip-logo-${id}`}>
            <motion.circle cx={cx} cy={cy} r={size / 1.7} />
          </clipPath>
        </defs>
        <foreignObject
          x={cx - (size * 1.25) / 2}
          y={cy - (size * 1.25) / 2}
          height={size * 1.25}
          width={size * 1.25}
          clipPath={`url(#clip-logo-${id})`}
        >
          <picture>
            <source srcSet={logo} type="image/webp" />
            <img src="/job_history_logos/bash_gg/bash_gg.opt.png" alt="logo" />
          </picture>
        </foreignObject>
      </motion.g>
    </motion.g>
  );
}
