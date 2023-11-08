import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../utils/cn";
import JobHistoryNode from "./JobHistoryNode";

export type JobHistoryBackgroundProps = {
  className?: string;
};

export default function JobHistoryBackground({
  className,
}: JobHistoryBackgroundProps) {
  const ref = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 50vh", "1 50vh"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // NOTE:
    // use this to find the value used to activate and decative the node aninmations
    // console.log(latest);
    setScrollValue(latest);
  });

  const calculateSectionHeight = (height: number) => height - 80;

  // NOTE:
  // Path for the scroll animation to follow
  const d = `M 456, 10
    v 100
    s 0,40 -40,40
    h -310
    s -40,0 -40,40
    v ${calculateSectionHeight(554)}
    s 0, 40 40,40
    h 700
    s 40,0 40,40
    v ${calculateSectionHeight(524)}
    s 0,40 -40,40
    h -700
    s -40,0 -40,40
    v ${calculateSectionHeight(450)}
    s 0, 40 40,40
    h 700
    s 40,0 40,40
    v ${calculateSectionHeight(450)}
    s 0,40 -40,40
    h -700
    s -40,0 -40,40
    v ${calculateSectionHeight(524)}
    s 0, 40 40,40
    h 700
    s 40,0 40,40
    v ${calculateSectionHeight(524)}
    s 0,40 -40,40
    h -320
    s -40,0 -40,40
    v 100
    
`;

  const nodes = [
    {
      id: "bash_gg",
      cx: 66,
      cy: 330,
      logo: "/job_history_logos/bash_gg.png",
      acivateAt: 0.08,
    },
    {
      id: "neon",
      cx: 912 - 66,
      cy: 880,
      logo: "/job_history_logos/neon.png",
      acivateAt: 0.2478,
    },
    {
      id: "midtown",
      cx: 66,
      cy: 1400,
      logo: "/job_history_logos/midtown_fashion.png",
      bgFill: "#DC2832",
      acivateAt: 0.41,
    },
    {
      id: "detroit-labs",
      cx: 912 - 66,
      cy: 1840,
      logo: "/job_history_logos/detroit_labs.png",
      acivateAt: 0.562,
    },
    {
      id: "pawnguru",
      cx: 66,
      cy: 2300,
      logo: "/job_history_logos/pawnguru.png",
      acivateAt: 0.72,
    },
    {
      id: "service_com",
      cx: 912 - 66,
      cy: 2825,
      logo: "/job_history_logos/service_com.png",
      acivateAt: 0.8826,
    },
  ];

  return (
    <div
      ref={ref}
      className={cn("absolute z-0 top-0 w-full h-full", className)}
      aria-hidden
    >
      <motion.svg
        fill="none"
        width="100%"
        height="100%"
        preserveAspectRatio="xMinYMin meet"
      >
        <motion.path
          fill="none"
          stroke="grey"
          strokeWidth="12"
          strokeLinecap="round"
          d={d}
        />
        <motion.path
          fill="none"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          d={d}
          pathLength={scrollYProgress}
        />
        {nodes.map((node) => (
          <JobHistoryNode
            key={node.id}
            id={node.id}
            cx={node.cx}
            cy={node.cy}
            isActive={node.acivateAt <= scrollValue}
            size={64}
            logo={node.logo}
          />
        ))}
      </motion.svg>
    </div>
  );
}
