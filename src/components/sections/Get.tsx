import Image from "next/image";
import React from "react";

const Get = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-0 items-center p-5 gap-5">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#1649FF] to-[#0D2C99] lg:text-[150px] text-6xl">
        Get Inovact
      </h2>
      <p className="text-xl">
        Join thousands of other founders and creators & build great stuffs{" "}
      </p>
      <Image src="/images/1.svg" width={300} height={150} alt="" />
    </div>
  );
};

export default Get;
