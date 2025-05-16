"use client";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import TermsOfServiceContent from "@/components/legal/TermsOfServiceContent";
import React from "react";

export default function TermsOfService() {
  return (
    <>
      <Header3 />
      <TermsOfServiceContent />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
} 