import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";
export const metadata = {
  title: "Home || Chernika Digital - Creative Studio & Portfolio",
};
export default function HomePage1() {
  return (
    <>
      {/* <SearchPopup /> */}
      <Header1 />
      <Hero />
      <About />

      <Faq />
      <Portfolio />
      {/* <Team /> */}
      <Testimonials />
      {/* <Blogs /> */}
      <Footer3 />
    </>
  );
}
