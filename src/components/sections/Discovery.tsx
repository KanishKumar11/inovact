import Image from "next/image";
import React from "react";

const Discovery = () => {
  return (
    <div className="flex w-screen lg:h-screen max-w-7xl mx-auto lg:items-center lg:flex-row-reverse flex-col justify-center lg:p-0 p-5 max-lg:my-20  ">
      <div className="lg:w-1/3 max-lg:mx-auto flex lg:items-center lg:justify-center ">
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className=" lg:w-[300px] w-[250px]    p-4 "
        >
          <source src="/videos/3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:max-w-[50%] h-full">
        <div className="flex flex-col lg:h-full gap-5 justify-center  ">
          <Image
            src="/images/20.svg"
            width={700}
            height={200}
            alt=""
            className="lg:block hidden w-[450px]"
          />
          <h2 className="text-5xl text-[#1649FF] text-balance  leading-[1.3]">
            Discovery Hub{" "}
          </h2>
          <p className="text-balance">
            Explore, learn, and upskill by checking out projects and ideas from
            other members of our social network. It’s like a treasure chest of
            knowledge!
          </p>
          <Image
            src="/images/21.svg"
            width={700}
            height={500}
            alt=""
            className="lg:block hidden w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
