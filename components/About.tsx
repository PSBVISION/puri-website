"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
    <div
      ref={sectionRef}
      className="bg-[#D72327] md:flex hidden  min-h-[60vh] md:min-h-[80vh] md:pb-0 pb-24 relative  flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Male image - left side */}
      <div
        className={`absolute hidden md:block left-20 top-3/5 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <Image
          src="/male.svg"
          width={100}
          height={100}
          alt="male illustration"
          className="max-w-full h-auto w-20 md:w-32 lg:w-35"
        />
        <Image
        src="shadow.png"
        width={100}
        height={100}
        alt="male illustration"
        className=" 
        max-w-full h-auto w-20 md:w-32 mb-7 "
      
        />
      </div>

      {/* Center text content */}
      <div
        className={`text-center w-full max-w-4xl mx-auto z-10 transition-all duration-1000 ease-out px-2 sm:px-6 lg:px-8 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl font-leckerli md:text-4xl font-bold mb-6 md:mb-18 text-white">
          About The Festival
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl text-center">
          The Puri Literary Festival 2025 celebrates the harmony of tradition
          and modernity, inspired by the sacred symbolism of the Konark Sun
          Temple and Lord Jagannath&apos;s Ratha. Rooted in Puri&apos;s rich
          spiritual and cultural legacy, the festival fosters global dialogue
          through literature, art, and heritage. With grassroots outreach across
          Odisha, it aims to inspire the youth, preserve traditions, and shape a
          visionary future for India&apos;s cultural and intellectual growth.
        </p>
      </div>

      {/* Female image - right side */}
      <div
        className={`absolute hidden md:block right-20 top-3/4 bottom- transform -translate-y-2/3 transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <Image
          src="/female.svg"
          width={100}
          height={100}
          alt="female illustration"
          className="max-w-full h-auto w-20 md:w-32 lg:w-30"
        />
        <Image
        src="shadow.png"
        width={100}
        height={100}
        alt="male illustration"
        className=" 
        max-w-full h-auto w-20 md:w-32 mb-7  "
      
        />
      </div>

     
      <div className=" md:block hidden w-full absolute bottom-0 left-0">
        <Image
          src="/about-border.svg"
          width={400}
          height={300}
          className="w-full"
          alt="border decoration"
        />
      </div>
    </div>
    <div className="relative block md:hidden">
  {/* Text Content Positioned Over the Image */}
  <div className="absolute -top-14 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10 px-2">
    <h1 className="text-2xl  font-leckerli font-bold mb-4 text-white">
      About The Festival
    </h1>
    <p className="text-white text-[12px] text-center">
      The Puri Literary Festival 2025 celebrates the harmony of tradition
      and modernity, inspired by the sacred symbolism of the Konark Sun
      Temple and Lord Jagannath&apos;s Ratha. Rooted in Puri&apos;s rich
      spiritual and cultural legacy, the festival fosters global dialogue
      through literature, art, and heritage. With grassroots outreach across
      Odisha, it aims to inspire the youth, preserve traditions, and shape a
      visionary future for India&apos;s cultural and intellectual growth.
    </p>
  </div>

  {/* Background Image */}
  <div className="relative">
    <Image
      src="/phoneAbout-bg.png"
      width={400} 
      height={300}
      className="w-full h-auto object-cover"
      alt="border decoration"
    />
  </div>
</div>


    </>
  );
};

export default About;
