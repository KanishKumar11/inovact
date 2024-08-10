import Image from "next/image";
import React from "react";

const Quick = () => {
  return (
    <div className="flex w-full items-center justify-between  h-full">
      <div>
        <Image
          src="/images/4.svg"
          alt=""
          width={300}
          height={820}
          className="-rotate-12 ml-10 p-4"
        />
      </div>
      <div className="w-2/3">
        <div className="flex flex-col gap-5 items-center justify-center">
          <Image src="/images/15.svg" width={700} height={400} alt="" />
          <h2 className="text-5xl text-[#1649FF] text-balance leading-[1.3]">
            Quick Join
          </h2>
          <p>
            Dive into projects and ideas that spark your interest with a single
            tap. No more wasting time!
          </p>
          <Image src="/images/16.svg" width={700} height={400} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quick;
