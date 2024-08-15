import Image from "next/image";
import React from "react";

const Get = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col  justify-between  items-center p-5 gap-10 my-20">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1649FF] to-[#0D2C99] lg:text-7xl text-3xl text-balance text-center">
        Get Inovact Social Now
      </h2>
      <p className="text-xl text-center text-balance max-w-2xl">
        Get in on the action with 3000+ students and entrepreneurs already
        making waves with their projects and ideas.
      </p>
      <Image src="/images/1.jpg" width={300} height={100} alt="" className="" />
    </div>
  );
};

export default Get;
