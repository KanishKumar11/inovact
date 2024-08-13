"use client";
import { Poppins } from "next/font/google";
import React from "react";
import { InfiniteMovingTestimonials } from "@/components/ui/infinite-moving-testimonials";
import Marquee from "../ui/marquee";
import Testimonial from "../cards/Testimonial";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const data = [
  {
    user: "/images/26.svg",
    name: "Parth Agarwal",
    desc: "An excellent platform to post ideas ranging from projects to startups. A straight up booster for enthusiastic developers digging for projects, collaborations and even connections. I downloaded this application and was amazed to see a plethora of project ideas and authentically skilled people willing to share ideas and thoughts. Great work by the Inovact team in making this amazing application.",
  },
  {
    user: "/images/27.svg",
    name: "Parth Agarwal",
    desc: "Addresses a very underrated problem statement and bridges the gap b/w Industry and Candidates. Found the app easy to use and feature-rich.",
  },
  {
    user: "/images/28.svg",
    name: "Pratik",
    desc: "Wonderful idea, and really good user interface, so useful for students like me. Loved it ♥️",
  },
  {
    user: "/images/29.svg",
    name: "Shivu D.G",
    desc: "Great endeavour to bring entrepreneurial opportunity to the much in need!",
  },
  {
    user: "/images/30.svg",
    name: "Akshat Srivastava",
    desc: "Amazing app to look up for teammates. Amazed my the UI and seamless performance of the app",
  },
  {
    user: "/images/31.svg",
    name: "Apoorv Pandey",
    desc: "Inovact Social impressively streamlines the way innovators connect, showcasing skills over certificates and making collaboration simple and effective. Its focus on real projects and ease of finding mentors and teams is a game-changer for professionals looking to make an impact.!",
  },
];
const Wall = () => {
  return (
    <div className="my-20 flex flex-col  items-center justify-center px-8 mx-auto max-w-7xl relative ">
      <div
        className={`${poppins.className} text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-2 items-center`}
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5013 28.7831L14.568 27.0231C7.7013 20.7964 3.16797 16.6897 3.16797 11.6497C3.16797 7.54307 6.39464 4.31641 10.5013 4.31641C12.8213 4.31641 15.048 5.39641 16.5013 7.10307C17.9546 5.39641 20.1813 4.31641 22.5013 4.31641C26.608 4.31641 29.8346 7.54307 29.8346 11.6497C29.8346 16.6897 25.3013 20.7964 18.4346 27.0364L16.5013 28.7831Z"
            fill="white"
          />
        </svg>
        Wall of Love
      </div>

      <div className="flex flex-col gap-5 my-10 items-center[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] max-w-[98vw]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {data.map((review, idx) => (
            <Testimonial key={idx} data={review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Wall;
