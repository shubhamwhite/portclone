import React from "react";
import Button from "../components/Button";
const Page4 = () => {
  return (
    <>
      <div className="px-5 py-20 bg-cream1 laptop:flex big-monitor:flex gap-5 mobile:flex-none">
        {/* Left Section */}
        <div className="bg-black rounded-3xl p-10 laptop:w-[100vw] mobile:h-[65vh]">
          <h1 className="uppercase font-[anzo1] text-[500px] mobile:text-[100px] text-blue-400 leading-tight">
            Projects
          </h1>
          <p className="uppercase leading-none font-[anzo2] mobile:text-[15px] text-[20px] text-cream1">
            Make Fast API | Web Development
          </p>
          <p className="leading-none font-[anzo3] mobile:text-[12px] text-[20px] text-cream1">
            Ricing your website
          </p>

          
            <p className="text-green-200 mobile:text-[12px] font-[anzo3] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
       

          <div className="relative top-12">
            <Button name="Showoff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
