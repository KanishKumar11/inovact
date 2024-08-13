import Image from "next/image";
import React from "react";

const Get = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-0 justify-between  items-center p-5 gap-10">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1649FF] to-[#0D2C99] lg:text-7xl text-3xl text-balance text-center">
        Get Inovact Social Now
      </h2>
      <p className="text-xl mt-7">
        Get in on the action with 3000+ students and entrepreneurs already
        making waves with their projects and ideas.
      </p>
      <Image
        src="/images/1.svg"
        width={300}
        height={100}
        alt=""
        className="-mt-16"
      />
    </div>
  );
};

export default Get;
