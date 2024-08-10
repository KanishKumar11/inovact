import Image from "next/image";
import React from "react";

const Rewarded = () => {
  return (
    <div className="flex w-full items-center justify-between h-full">
      <div>
        <Image
          src="/images/22.svg"
          alt=""
          width={300}
          height={820}
          className="-rotate-12 ml-10 p-4"
        />
        <Image
          src="/images/25.svg"
          alt=""
          width={400}
          height={100}
          className=" ml-10 p-4"
        />
      </div>
      <div className="w-2/3 h-full">
        <div className="flex flex-col gap-5 justify-between h-full py-10">
          <Image
            src="/images/23.svg"
            width={400}
            height={200}
            alt=""
            className=" ml-auto"
          />

          <h2 className="text-5xl text-[#1649FF] text-balance  leading-[1.3]">
            Get Rewarded
          </h2>
          <p className="text-balance">
            Interact on the app to rack up points and snag some cool incentives.
            Think discounts and even opportunities for internships and jobs
            <br />
            -This feature is dropping soon, so stay tuned!
          </p>
          <Image
            src="/images/24.svg"
            width={700}
            height={300}
            alt=""
            className="mt-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Rewarded;
