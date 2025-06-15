import Awards from "@/components/about/Awards";
import Breadcumb from "@/components/about/Breadcumb";
import Clients from "@/components/about/Clients";
import Contact from "@/components/about/Contact";
import Facts from "@/components/about/Facts";
import Features from "@/components/about/Features";

import MarqueeComponent from "@/components/common/Marquee";
import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "About || Chernika Digital - Creative Studio",
};

export default function AboutPage() {
  return (
    <>
      <Header1 />
      <Breadcumb />
      <Facts />
      <Features />
      <Awards />
      <Contact />
      <Clients />
      <MarqueeComponent />
      <Footer3 />
    </>
  );
}
