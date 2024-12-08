import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import manImage from "/young.jpg";
import carImage from "/young.jpg";
import ScrollUp from "../components/ScrollUp";

const Page1 = () => {
  const [backgroundImage, setBackgroundImage] = useState(manImage);

  useEffect(() => {
    // Detect the screen size and set the image accordingly
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Desktop screen
        setBackgroundImage(carImage);
      } else { // Mobile screen
        setBackgroundImage(manImage);
      }
    };

    // Set the initial background image based on screen size
    handleResize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="p-[2px] bg-cream1">
       

        <div
          id="page1-in"
          className="big-monitor:h-[96vh] big-monitor:rounded-3xl laptop:h-[99vh] laptop:rounded-3xl mobile:rounded-3xl mobile:h-[90vh]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
       
          <Navbar />

          <div className=" laptop:px-24 laptop:py-24 mobile:px-12 mobile:pt-72 big-monitor:pt-32 big-monitor:px-28">
            <h1 className="text-cream1 font-[anzo2] laptop:text-4xl mobile:text-2xl big-monitor:text-5xl">
              India's{" "}
              <span className="bg-gradient-to-r from-[#0ae448] to-[#abff84] text-transparent bg-clip-text">
                DARK MODE
              </span>
              ™
            </h1>
            <h1 className="text-cream1 font-[anzo3] laptop:text-8xl mobile:text-5xl big-monitor:text-9xl">DEVELOPER</h1>
            <h1 className="text-cream1 font-[anzo2] laptop:text-3xl mobile:text-3xl big-monitor:text-4xl">
              TO HIRE
            </h1>
          </div>

          <div className=" laptop:px-24 mobile:px-12 big-monitor:px-28">
            <h2 className="absolute laptop:py-8 mobile:py-16 mobile:text-sm big-monitor:py-32 big-monitor:text-2xl font-[new anzo] text-gray-400">
              BRAND DEVELOPER | WEBSITE DESIGN
            </h2>
            <h3 className="absolute laptop:py-14 mobile:py-20 mobile:text-lg big-monitor:py-40 big-monitor:text-xl font-[anzo3] text-gray-400">
              BESPOKE FREELANCE
            </h3>
          </div>

          <div>
            <ScrollUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
