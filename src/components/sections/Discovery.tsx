import Image from "next/image";
import React from "react";

const Discovery = () => {
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
      <div className="w-2/3 h-full">
        <div className="flex flex-col gap-5 justify-between h-full">
          <Image src="/images/20.svg" width={700} height={200} alt="" />
          <h2 className="text-5xl text-[#1649FF] text-balance  leading-[1.3]">
            Discovery Hub{" "}
          </h2>
          <p className="text-balance">
            Explore, learn, and upskill by checking out projects and ideas from
            other members of our social network. It’s like a treasure chest of
            knowledge!
          </p>
          <Image src="/images/21.svg" width={700} height={500} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
