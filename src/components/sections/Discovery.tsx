import Image from "next/image";
import React from "react";

const Discovery = () => {
  return (
    <div className="flex w-screen h-screen items-center lg:justify-between justify-center lg:p-0 p-5  flex-wrap">
      <div>
        <Image
          src="/images/4.svg"
          alt=""
          width={300}
          height={820}
          className="lg:-rotate-12 lg:w-[280px] w-[250px] lg:ml-10 p-4"
        />
      </div>
      <div className="lg:w-2/3 h-full">
        <div className="flex flex-col lg:h-full gap-5 justify-between max-lg:text-center ">
          <Image
            src="/images/20.svg"
            width={700}
            height={200}
            alt=""
            className="lg:block hidden w-[550px]"
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
            className="lg:block hidden w-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
