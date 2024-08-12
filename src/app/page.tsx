import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import App from "@/components/sections/App";
import Banner from "@/components/sections/Banner";
import DesktopScroll from "@/components/sections/DesktopScroll";
import FAQ from "@/components/sections/FAQ";
import Get from "@/components/sections/Get";
import Hero from "@/components/sections/Hero";
import HorizontalScroll1 from "@/components/sections/HorizontalScroll1";
import HorizontalScroll2 from "@/components/sections/HorizontalScroll2";
import Loyal from "@/components/sections/Loyal";
import Vibe from "@/components/sections/Vibe";
import Wall from "@/components/sections/Wall";
import Why from "@/components/sections/Why";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Hero />
      <Loyal />
      {/* <HorizontalScroll1 /> */}
      <Vibe />
      <App />
      <div className="">
        <div className="lg:hidden block">
          {" "}
          <HorizontalScroll2 />
        </div>
        <div className="lg:block hidden">
          {" "}
          <DesktopScroll />
        </div>
      </div>{" "}
      <Why />
      <Wall />
      <FAQ />
      <Get />
      <Footer />
    </div>
  );
};

export default page;
