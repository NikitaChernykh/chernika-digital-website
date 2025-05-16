"use client";
import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header3 />
      <PrivacyPolicyContent />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
