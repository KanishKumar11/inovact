import Image from "next/image";
import React from "react";

const Effortless = () => {
  return (
    <div className="flex w-screen h-screen items-center gap-5 justify-between max-w-7xl mx-auto p-5  lg:flex-row  flex-col">
      <div className="lg:w-1/3 flex items-center justify-center ">
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className="lg:w-[300px] w-[250px]   p-4"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:w-2/3   ">
        <div className="flex flex-col mt-auto h-auto justify-center items-center  gap-5">
          <Image
            src="/images/14.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden lg:w-[450px]"
          />
          <h2 className="lg:text-4xl text-3xl text-[#1649FF] text-balance text-center max-w-3xl  lg:leading-[1.3]">
            Effortless Collaboration: Join a Team in Just 2 Steps
          </h2>
          <p>Streamline Your Project Work with Quick and Easy Team Formation</p>
          <Image
            src="/images/13.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Effortless;
