"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: " Effortless Collaboration: Find Your Crew",
    description:
      "Find a teammate or co-founder for your project or idea in just two steps—easy peasy!.",
    ab1: "/images/14.svg",
    ab2: "/images/13.svg",
    content: (
      <div>
        <Image
          src="/images/4.svg"
          alt=""
          width={300}
          height={820}
          className="lg:-rotate-12 lg:w-[280px] w-[250px] lg:ml-28 p-4"
        />
      </div>
    ),
  },
  {
    title: " Quick Join",
    description:
      "Dive into projects and ideas that spark your interest with a single tap. No more wasting time!",
    ab1: "/images/15.svg",
    ab2: "/images/16.svg",
    content: (
      <div>
        <Image
          src="/images/4.svg"
          alt=""
          width={300}
          height={820}
          className="lg:-rotate-12 lg:w-[280px] w-[250px] lg:ml-28 p-4"
        />
      </div>
    ),
  },
  {
    title: "Build Your Cred",
    description:
      "Flex your skills and earn some serious street cred through proof of work. Get recognized for your projects and collabs, and build a following based on what you can actually do.",
    ab1: "/images/19.svg",
    ab2: "/images/18.svg",
    content: (
      <div>
        <Image
          src="/images/17.svg"
          alt=""
          width={300}
          height={820}
          className="lg:-rotate-12 lg:w-[280px] w-[250px] lg:ml-28 p-4"
        />
      </div>
    ),
  },
  {
    title: "Discovery Hub",
    description:
      "Explore, learn, and upskill by checking out projects and ideas from other members of our social network. It’s like a treasure chest of knowledge!",
    ab1: "/images/20.svg",
    ab2: "/images/21.svg",
    content: (
      <div>
        <Image
          src="/images/4.svg"
          alt=""
          width={300}
          height={820}
          className="lg:-rotate-12 lg:w-[280px] w-[250px] lg:ml-28 p-4"
        />
      </div>
    ),
  },
  {
    title: "Get Rewarded",
    description:
      "Interact on the app to rack up points and snag some cool incentives. Think discounts and even opportunities for internships and jobs \n -This feature is dropping soon, so stay tuned!",
    ab1: "/images/23.svg",
    ab2: "/images/24.svg",
    content: (
      <div>
        <div>
          <Image
            src="/images/4.svg"
            alt=""
            width={300}
            height={820}
            className="lg:-rotate-12 lg:w-[250px] w-[220px] lg:ml-10 p-4"
          />
          <Image
            src="/images/25.svg"
            alt=""
            width={400}
            height={100}
            className="lg:block hidden ml-10 p-4 lg:w-[300px]"
          />
        </div>
      </div>
    ),
  },
];
export default function DesktopScroll() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
