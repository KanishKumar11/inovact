import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/images/2.svg')] bg-cover  max-w-[100%]    ">
      <div className=" gap-10  lg:gap-5 flex flex-col items-center justify-start py-10">
        <div className="bg-white rounded-full text-indigo-600 flex flex-row px-10 gap-3 py-2 items-center justify-center w-max text-sm font-medium">
          <Image
            src="/images/3.svg"
            alt=" "
            width={30}
            height={30}
            className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
          />
          <p>Watch the Launch</p>
        </div>
        <h1 className=" text-center text-balance lg:text-5xl text-2xl leading-relaxed text-white max-w-2xl">
          A social network for students and entrepreneurs powered by proof of
          work
        </h1>
        <Image
          src="/images/4.svg"
          width={400}
          height={800}
          alt=""
          className="lg:-mb-[27%] -mb-[50%] lg:w-[350px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default Hero;
