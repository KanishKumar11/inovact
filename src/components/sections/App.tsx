import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center justify-between py-12 flex-col relative">
      <div className="flex flex-row items-start justify-start gap-20">
        <div className="w-1/2 flex flex-col gap-5">
          <h2 className="text-6xl text-[#1649FF] text-balance max-w-lg leading-[1.3]">
            Inovact App
          </h2>
          <p className="max-w-lg text-2xl">
            A social network for students and entrepreneurs powered by proof of
            work
          </p>
        </div>
        <div className="w-1/2">
          <Image src="/images/12.svg" width={400} height={200} alt="" />
          <div className="text-[#1649FF] text-5xl">#2</div>
          <div className="text-white p-8 bg-[#1649FF] max-w-lg text-2xl">
            Say hi to inovact{" "}
          </div>
        </div>
      </div>
      <Image
        src="/images/4.svg"
        width={250}
        height={500}
        alt=""
        className="absolute bottom-10 left-40 -rotate-12"
      />
      <div className="my-10 text-[160px]">Inovact social</div>
    </div>
  );
};

export default App;
