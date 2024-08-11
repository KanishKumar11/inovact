"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Vibe from "./Vibe";
import App from "./App";
import Effortless from "./Effortless";
import Quick from "./Quick";
import Build from "./Build";
import Discovery from "./Discovery";
import Rewarded from "./Rewarded";

const HorizontalScroll2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative lg:h-[350vh] ">
      <div className="lg:sticky lg:flex top-0 hidden lg:h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex lg:flex-row gap-4">
          <div className="group h-screen w-screen">
            {" "}
            <Effortless />
          </div>{" "}
          <div className="group h-screen w-screen">
            {" "}
            <Quick />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Build />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Discovery />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Rewarded />
          </div>
        </motion.div>
      </div>
      <div className="lg:sticky top-0 flex lg:hidden h-max max-lg:flex-col lg:h-screen  items-center lg:overflow-hidden">
        <motion.div className="flex lg:flex-row flex-col  gap-4">
          <div className="lg:group h-screen w-screen">
            {" "}
            <Effortless />
          </div>{" "}
          <div className="lg:group h-screen w-screen">
            {" "}
            <Quick />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Build />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Discovery />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Rewarded />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll2;
