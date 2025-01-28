"use client";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Page = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
      console.log(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="w-screen h-full">
      <Header htmlRef={headerRef} />
      <div className="absolute w-screen h-full -z-10">
        <Image
          src={"/bg.svg"}
          alt="bg"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div
        className={`Hero-section flex mx-20 relative`}
        style={(headerHeight ? { top: `${headerHeight + 10}px`, display: "flex" } : {display: "none"})}
      >
        <div className="left-hero-section flex w-1/3 justify-center items-center">
          <Image
            src={"/Social Media.svg"}
            alt="logo"
            width={428}
            priority
            height={428}
          />
        </div>
        <div className="right-hero-section"></div>
      </div>
    </div>
  );
};

export default Page;
