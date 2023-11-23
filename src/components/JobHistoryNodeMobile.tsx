import { useInView } from "framer-motion";
import { useRef } from "react";
import JobHistoryNode from "./JobHistoryNode";
import { cn } from "../utils/cn";

export type JobHistoryNodeMobileProps = {
  id: string;
  logo: {
    fallback: string;
    webp?: string;
    avif?: string;
  };
  className: string;
};

export default function JobHistoryNodeMobile({
  id,
  logo,
  className,
}: JobHistoryNodeMobileProps) {
  const size = 72;
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -200px" });

  return (
    <svg
      className={cn("lg:h-0 lg:w-0", className)}
      ref={ref}
      fill="none"
      preserveAspectRatio="xMinYMin meet"
      width={size}
      height={size}
    >
      <JobHistoryNode
        id={id + "-mobile"}
        cx={size / 2}
        cy={size / 2}
        isActive={isInView}
        size={size / 2}
        logo={logo}
      />
    </svg>
  );
}
