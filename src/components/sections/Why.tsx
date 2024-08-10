import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="my-20 flex flex-col gap-5 items-center max-w-7xl mx-auto">
      <div className="bg-[#1649FF] text-white px-10 py-3 rounded-full w-max flex gap-2 text-xl items-center">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7188 28C14.2521 28 13.8921 27.5867 13.9588 27.12L15.1588 18.6667H10.4921C9.31882 18.6667 10.0521 17.6667 10.0788 17.6267C11.7588 14.6533 14.2788 10.2533 17.6121 4.38667C17.7455 4.14667 18.0121 4 18.2788 4C18.7455 4 19.1055 4.41333 19.0388 4.88L17.8388 13.3333H22.5188C23.0522 13.3333 23.3455 13.5867 23.0521 14.2133C18.6655 21.8667 16.1188 26.3333 15.3855 27.6133C15.2521 27.8533 14.9988 28 14.7188 28Z"
            fill="white"
          />
        </svg>
        Why inovact
      </div>
      <div className="w-full p-10 flex gap-5 justify-between">
        <div className="w-1/2 p-10 from-[#2C94DF] to-[#0061A8] bg-gradient-to-r flex flex-col items-center rounded-md">
          <Image src="/images/4.svg" alt="" width={270} height={500} />
          <h2 className="text-slate-50 text-3xl font-medium my-5">
            Why Inovact Social?
          </h2>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="bg-[#C8ECF9] rounded-md p-10 h-1/2 w-full flex flex-col items-center justify-center text-right gap-3">
            <h2 className="text-right w-full text-3xl font-semibold">
               No BS Zone{" "}
            </h2>
            <p className="text-sm text-[#535353]">
              We’re all about building serious & cool stuff. Students and
              early-stage entrepreneurs can work together without the fluff.
            </p>
          </div>
          <div className="h-1/2 w-full flex gap-5  ">
            <div className="bg-[#D8E8DB] p-5 rounded-md h-full w-1/2 flex gap-5 flex-col items-center justify-center text-center">
              <h2 className="font-medium text-2xl"> No BS Zone</h2>
              <p className="text-sm text-[#535353]">
                We’re turning hard work into rewards. Your hustle deserves
                recognition, and we’re here to make sure it doesn’t go
                unnoticed.
              </p>
            </div>
            <div className="bg-[#E8D7F1] h-full rounded-md p-4 gap-4 w-1/2 flex flex-col items-center justify-center text-center">
              <h2 className="font-medium text-2xl">Gamified Experience</h2>
              <p className="text-sm text-[#535353]">
                Our 2-step collab process is designed for you. We get how hard
                it can be to find your team, and we’re here to make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
