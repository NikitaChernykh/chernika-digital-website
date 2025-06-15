import MarqueeComponent from "@/components/common/Marquee";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Breadcumb from "@/components/portfolio/Breadcumb";

import Projects from "@/components/portfolio/Projects";
import React from "react";
export const metadata = {
  title: "Project 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function ProjectPage1() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Projects />
      <MarqueeComponent />
      <Footer3 />
    </>
  );
}
