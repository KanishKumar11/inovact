import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto  w-screen flex items-center justify-between pt-12 p-5 flex-col relative ">
      <div className="flex flex-row lg:flex-nowrap flex-wrap items-start justify-start gap-20 h-full">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h2 className="text-6xl text-[#1649FF] text-balance max-w-lg leading-[1.3]">
            Inovact App
          </h2>
          <p className="max-w-lg text-2xl">
            A social network for students and entrepreneurs powered by proof of
            work
          </p>
        </div>
        <div className="lg:w-1/2 w-full h-full">
          <Image
            src="/images/12.svg"
            width={400}
            height={200}
            className="lg:w-[400px] w-[250px] lg:h-[200px] h-[125px] justify-self-end ml-auto"
            alt=""
          />
          <div className="text-[#1649FF] text-5xl">#2</div>
          <div className="text-white p-8 bg-[#1649FF] max-w-lg text-2xl">
            Say hi to inovact{" "}
          </div>
        </div>
      </div>

      <div className="my-10 lg:text-[160px] flex text-5xl font-medium">
        Inovact social
        <Image
          src="/images/4.svg"
          width={250}
          height={500}
          alt=""
          className="lg:absolute lg:w-[200px] w-[100px]  bottom-10 left-40 -rotate-12"
        />
      </div>
    </div>
  );
};

export default App;
