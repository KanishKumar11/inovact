import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <Link href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo">
      <div className="bg-[#25D366] w-auto max-w-[100vw] text-balance py-4 flex items-center justify-center font-medium gap-10 lg:px-10">
        <p className="w-max lg:text-base text-xs text-center">
          ✨Join the Inovact WhatsApp Community and vibe with over 2000
          students, developers, mentors, and entrepreneurs! 
        </p>
        <div className="bg-white px-10 rounded-md lg:block hidden py-2">
          Join now
        </div>
      </div>
    </Link>
  );
};

export default Banner;
