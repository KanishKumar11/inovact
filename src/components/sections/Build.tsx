import Image from "next/image";
import React from "react";

const Build = () => {
  return (
    <div className="flex w-full items-center justify-between h-full">
      <div>
        <Image
          src="/images/17.svg"
          alt=""
          width={300}
          height={820}
          className="-rotate-12 ml-10 p-4"
        />
      </div>
      <div className="w-2/3 h-full py-10">
        <div className="flex flex-col gap-5 justify-between h-full ">
          <Image src="/images/19.svg" width={700} height={200} alt="" />
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
          <Image src="/images/18.svg" width={700} height={200} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Build;
