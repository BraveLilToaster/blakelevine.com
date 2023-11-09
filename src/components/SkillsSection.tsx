import SkillIcon from "../components/SkillIcon.tsx";
import ReactIcon from "../components/icons/ReactIcon.tsx";
import NodeIcon from "../components/icons/NodeIcon.tsx";
import NextJSIcon from "../components/icons/NextJSIcon.tsx";
import type { ReactNode } from "react";
import TailwindIcon from "./icons/TailwindIcon.tsx";
import DockerIcon from "./icons/DockerIcon.tsx";
import ExpoIcon from "./icons/ExpoIcon.tsx";
import JestIcon from "./icons/JestIcon.tsx";
import TypescriptIcon from "./icons/TypescriptIcon.tsx";
import CypressIcon from "./icons/CypressIcon.tsx";
import PrismaIcon from "./icons/Prisma.tsx";
import PostgresIcon from "./icons/PostgresIcon.tsx";

type ItemProps = {
  title: string;
  Icon: ReactNode;
  hoverBackgroundColor: string;
};
function Item({ title, Icon, hoverBackgroundColor }: ItemProps) {
  return (
    <div className="basis-6/12 sm:basis-4/12 md:basis-3/12 mx-auto">
      <SkillIcon
        className="max-w-[160px] mx-auto"
        Icon={Icon}
        hoverBackgroundColor={hoverBackgroundColor}
      />
      <p className="text-2xl font-semibold text-center">{title}</p>
    </div>
  );
}

export default function SkillsSections() {
  const getVaraint = (inactive: string, hovered = "#FFF", key = "fill") => ({
    hovered: {
      [key]: hovered,
    },
    inactive: {
      [key]: inactive,
    },
  });

  return (
    <div className="pt-10 md:pt-40">
      <h2 className="text-4xl mb-8 md:text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center">
        <Item
          title="Cypress"
          hoverBackgroundColor="#58D09E"
          Icon={
            <CypressIcon
              textVariants={getVaraint("#1B1E2E")}
              arcGradient1Variants={getVaraint("#1B1E2E", "#FFF", "stopColor")}
              arcGradient2Variants={getVaraint(
                "#58D09E",
                "#007780",
                "stopColor",
              )}
              arcGradient3Variants={getVaraint("#69D3A7", "#007780")}
            />
          }
        />
        <Item
          title="Docker"
          hoverBackgroundColor="#1D63ED"
          Icon={<DockerIcon variants={getVaraint("#1D63ED")} />}
        />
        <Item
          title="Expo"
          hoverBackgroundColor="#333333"
          Icon={<ExpoIcon variants={getVaraint("#000000")} />}
        />
        <Item
          title="Jest"
          hoverBackgroundColor="#99425B"
          Icon={
            <JestIcon
              foregroundVariants={getVaraint("#99425B")}
              backgroundVariants={getVaraint("#FFF", "#000")}
            />
          }
        />
        <Item
          title="NextJS"
          hoverBackgroundColor="#333"
          Icon={<NextJSIcon variants={getVaraint("#000000")} />}
        />
        <Item
          title="Node"
          hoverBackgroundColor="#689F63"
          Icon={
            <NodeIcon
              hexagonVariants={getVaraint("#689F63", "#2a5e26")}
              letterVariants={getVaraint("#333333")}
            />
          }
        />
        <Item
          title="Postgres"
          hoverBackgroundColor="#336791"
          Icon={
            <PostgresIcon
              backgroundVariants={getVaraint("#336791")}
              eyeVariants={{
                hovered: {
                  fill: "#336791",
                  stroke: "#336791",
                },
                inactive: {
                  fill: "#FFFFFF",
                  stroke: "#FFFFFF",
                },
              }}
              outline1Variants={getVaraint("#FFFFFF", "#336791", "stroke")}
              outline2Variants={getVaraint("#000000", "#FFFFFF", "stroke")}
            />
          }
        />
        <Item
          title="Prisma"
          hoverBackgroundColor="#2D3748"
          Icon={<PrismaIcon variants={getVaraint("#2D3748")} />}
        />
        <Item
          title="React"
          hoverBackgroundColor="#149ECA"
          Icon={<ReactIcon variants={getVaraint("#149ECA")} />}
        />
        <Item
          title="TypeScript"
          hoverBackgroundColor="#3178C6"
          Icon={
            <TypescriptIcon
              foregroundVariants={getVaraint("#FFF", "#3178C6")}
              backgroundVariants={getVaraint("#3178C6", "#FFF")}
            />
          }
        />
        <Item
          title="Tailwind"
          hoverBackgroundColor="#38BDF8"
          Icon={<TailwindIcon variants={getVaraint("#38BDF8")} />}
        />
      </div>
    </div>
  );
}
