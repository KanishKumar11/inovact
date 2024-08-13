import Image from "next/image";
import React from "react";

const Effortless = () => {
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
      <div className="lg:w-2/3   ">
        <div className="flex flex-col mt-auto h-auto justify-center items-center  gap-5">
          <Image
            src="/images/14.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden lg:w-[550px]"
          />
          <h2 className="lg:text-5xl text-3xl text-[#1649FF] text-balance   lg:leading-[1.3]">
            Effortless Collaboration: Join a Team in Just 2 Steps
          </h2>
          <p>Streamline Your Project Work with Quick and Easy Team Formation</p>
          <Image
            src="/images/13.svg"
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

export default Effortless;
