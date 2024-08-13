import Image from "next/image";
import React from "react";

const Rewarded = () => {
  return (
    <div className="flex w-screen h-screen items-center lg:flex-row flex-col justify-center p-5  ">
      <div className="lg:w-1/3 flex items-center justify-center flex-col">
        <video
          // alt=""
          width={300}
          autoPlay
          loop
          muted
          height={820}
          className=" lg:w-[300px] w-[250px] lg:ml-28 p-4"
        >
          <source src="/videos/4.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/25.svg"
          alt=""
          width={400}
          height={100}
          className="lg:block hidden ml-10 p-4 lg:w-[300px]"
        />
      </div>
      <div className="lg:w-2/3 h-full">
        <div className="flex flex-col gap-5 justify-center items-center text-center lg:h-full  py-10">
          <Image
            src="/images/23.svg"
            width={400}
            height={200}
            alt=""
            className="lg:block hidden lg:w-[250px]  ml-auto mr-10"
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
            className=" lg:block hidden lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Rewarded;
