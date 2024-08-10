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
    <div className=" mt-[430px] py-20 max-w-7xl mx-auto flex items-center justify-center flex-col gap-8">
      <h2 className="text-4xl">Our Loyal Inovact Builders </h2>
      <div className="flex flex-row gap-14 items-center justify-center">
        {" "}
        {logos.map((logo, idx) => (
          <Image src={logo} key={idx} width={80} height={80} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Loyal;
