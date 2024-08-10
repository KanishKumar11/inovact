import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-16 px-8  flex items-center justify-between max-w-7xl mx-auto">
      <div className="bg-clip-text from-[#1649FF] to-[#0D2C99] text-transparent bg-gradient-to-r md:text-3xl text-lg">
        Inovact social{" "}
      </div>
      <div className=" flex flex-row gap-5 items-center">
        <div className="lg:block hidden">About us</div>
        <div className="">
          <Image src="/images/1.svg" width={100} height={50} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
