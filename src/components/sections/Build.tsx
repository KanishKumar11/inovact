import Image from "next/image";
import React from "react";

const Build = () => {
  return (
    <div className="flex  h-screen items-center  lg:flex-row flex-col max-w-7xl mx-auto justify-center p-5  ">
      <div className="lg:w-1/3 items-center justify-center w-full ">
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className=" lg:w-[300px] w-[250px]  mx-auto  p-4"
        >
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:w-2/3 w-full h-full py-10">
        <div className="flex flex-col gap-5 justify-center items-center h-full max-lg:text-center ">
          <Image
            src="/images/19.svg"
            width={700}
            height={200}
            alt=""
            className="lg:block hidden w-[450px]"
          />
          <div className="">
            {" "}
            <h2 className="text-5xl text-[#1649FF] text-balance  leading-[1.3]">
              Build Your Cred{" "}
            </h2>
            <p className="text-balance">
              Flex your skills and earn some serious street cred through proof
              of work. Get recognized for your projects and collabs, and build a
              following based on what you can actually do.
            </p>
          </div>
          <Image
            src="/images/18.svg"
            width={700}
            height={200}
            alt=""
            className="lg:block hidden w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Build;
