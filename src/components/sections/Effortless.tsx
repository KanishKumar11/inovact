import Image from "next/image";
import React from "react";

const Effortless = () => {
  return (
    <div className="flex w-full items-center justify-between h-full">
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
        <div className="flex flex-col gap-5">
          <Image src="/images/14.svg" width={700} height={400} alt="" />
          <h2 className="text-5xl text-[#1649FF] text-balance  leading-[1.3]">
            Effortless Collaboration: Join a Team in Just 2 Steps
          </h2>
          <p>Streamline Your Project Work with Quick and Easy Team Formation</p>
          <Image src="/images/13.svg" width={700} height={400} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Effortless;
