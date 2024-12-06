import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import manImage from "/male-astronaut-fully-equipped-with-spacesuit-helmet.jpg";
import carImage from "/male-astronaut-giving-okay-sign-space-mission-another-planet.jpg";
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
      <div className="p-5">
        <div
          id="page1-in"
          className="big-monitor:h-[96vh] big-monitor:rounded-3xl mobile:rounded-2xl mobile:h-[90vh]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />

          <div className="mobile:px-12 mobile:pt-72 big-monitor:pt-32 big-monitor:px-28">
            <h1 className="text-cream1 font-[anzo2] mobile:text-2xl big-monitor:text-5xl">
              India's{" "}
              <span className="bg-gradient-to-r from-[#0ae448] to-[#abff84] text-transparent bg-clip-text">
                NIGHT MODE
              </span>
              ™
            </h1>
            <h1 className="text-cream1 font-[anzo3] mobile:text-5xl big-monitor:text-9xl">SPACESAGA</h1>
            <h1 className="text-cream1 font-[anzo2] mobile:text-3xl big-monitor:text-4xl">
              NSpD-2024
            </h1>
          </div>

          <div className="mobile:px-12 big-monitor:px-28">
            <h2 className="absolute mobile:py-16 mobile:text-sm big-monitor:py-32 big-monitor:text-2xl font-[new anzo] text-gray-400">
              BRAND DEVELOPER | WEBSITE DESIGN
            </h2>
            <h3 className="absolute mobile:py-20 mobile:text-lg big-monitor:py-40 big-monitor:text-xl font-[anzo3] text-gray-400">
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
