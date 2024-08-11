import Image from "next/image";
import React from "react";
const logos = [
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
];
const Loyal = () => {
  return (
    <div className="mt-40 lg:mt-[430px] py-20 lg:max-w-7xl max-w-[100vw] overflow-clip mx-auto flex items-center justify-center flex-col gap-8">
      <h2 className="lg:text-4xl text-center text-2xl">
        Our Loyal Inovact Builders{" "}
      </h2>
      <div className="flex flex-row lg:gap-14 gap-7 items-center justify-center">
        {" "}
        {logos.map((logo, idx) => (
          <Image
            src={logo}
            key={idx}
            width={80}
            height={80}
            alt=""
            className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Loyal;
