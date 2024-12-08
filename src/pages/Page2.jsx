const Page2 = () => {
  return (
    <>
      <div id="section2" className="bg-cream1 big-monitor:text-center big-screen:p-20 mobile:p-5 mobile:text-center">
        <h3 className="text-gray-500 mobile:text-sm big-monitor:text-2xl font-[new anzo] big-monitor:mb-40 mobile:mb-10">
          © shubham.io 2024 | designed and developed
        </h3>
        <div className="rotateText ">
          <h1 className="text-[42vw] text-black font-[anzo1] leading-[35vw]">
            IMPACTFUL
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[42vw] text-green-500 font-[anzo1] leading-[35vw]">
            CODING 
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[42vw] text-black font-[anzo1] leading-[35vw]  bg-blue-400 rounded-lg">
            IS THE
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[42vw] text-green-500 font-[anzo1] leading-[35vw]">
            CODING
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[42vw] text-black font-[anzo1] leading-[35vw]">
            THAT
          </h1>
        </div>

        <div className="rotateText">
          <h1
            className="text-[42vw] text-[#0ae448] font-[anzo1] leading-[40vw]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: "cover",
              backgroundAttachment: "fixed", // This creates the parallax effect
              backgroundPosition: "center",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            WORKS
          </h1>
        </div>
      </div>
    </>
  );
};

export default Page2;
