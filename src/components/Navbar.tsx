import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-3 px-8  flex items-center justify-between max-w-7xl mx-auto">
      <div className="bg-clip-text from-[#1649FF] to-[#0D2C99] text-transparent bg-gradient-to-r md:text-3xl text-lg py-2">
        <Image
          src="/images/48.jpg"
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] rounded-full  w-[70px] h-[70px] "
        />
      </div>
      <div className=" flex flex-row gap-5 items-center">
        <div className="lg:block hidden">About us</div>
        <div className="">
          <Link href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact">
            <Image
              src="/images/1.jpg"
              width={200}
              height={100}
              alt=""
              className="w-[120px] h-[35px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
