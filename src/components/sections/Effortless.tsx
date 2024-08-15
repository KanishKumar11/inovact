import Image from "next/image";
import React from "react";

const Effortless = () => {
  return (
    <div className="flex w-screen lg:h-screen lg:items-center gap-5 justify-start items-start lg:justify-between  max-w-7xl mx-auto max-lg:my-20 p-5  lg:flex-row  flex-col">
      <div className="lg:w-1/3 max-lg:mx-auto  flex lg:items-center  lg:justify-center ">
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className="lg:w-[300px] w-[250px]   p-4"
        >
          <source src="/videos/4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:w-2/3   ">
        <div className="flex flex-col mt-auto h-auto lg:justify-center lg:items-center  gap-5 ">
          <Image
            src="/images/14.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden lg:w-[450px]"
          />
          <div className="max-w-3xl  flex items-center justify-center">
            {" "}
            <h2 className="lg:text-4xl text-3xl text-[#1649FF] text-balance text-left mx-auto  max-w-max   lg:w-[470px]  lg:leading-[1.3]">
              Effortless Collaboration: Find Your Crew
            </h2>
          </div>
          <p className="">
            Streamline Your Project Work with Quick and Easy Team Formation
          </p>
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
