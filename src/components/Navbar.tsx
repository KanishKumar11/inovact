import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-3 px-8  flex items-center justify-between max-w-7xl mx-auto">
      <div className="bg-clip-text from-[#1649FF] to-[#0D2C99] text-transparent bg-gradient-to-r md:text-3xl text-lg">
        Inovact social{" "}
      </div>
      <div className=" flex flex-row gap-5 items-center">
        <div className="lg:block hidden">About us</div>
        <div className="">
          <Link href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact">
            <Image src="/images/1.svg" width={90} height={35} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
