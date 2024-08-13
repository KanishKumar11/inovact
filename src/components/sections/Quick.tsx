import Image from "next/image";
import React from "react";

const Quick = () => {
  return (
    <div className="flex w-screen h-screen items-center lg:justify-between justify-center p-5  flex-wrap">
      <div>
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className="lg:-rotate-12 lg:w-[320px] w-[250px] lg:ml-28 p-4"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:w-2/3">
        <div className="flex flex-col gap-5 items-center justify-center">
          <Image
            src="/images/15.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden w-[550px]"
          />
          <h2 className="text-5xl text-[#1649FF] text-balance leading-[1.3]">
            Quick Join
          </h2>
          <p>
            Dive into projects and ideas that spark your interest with a single
            tap. No more wasting time!
          </p>
          <Image
            src="/images/16.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Quick;
