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
    <section ref={targetRef} className="relative h-[350vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
    </section>
  );
};

export default HorizontalScroll2;
