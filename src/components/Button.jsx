import React from "react";

const Button = ({name}) => {
  return (
    <button className="big-monitor:font-[anzo4] big-monitor:text-lg text-white border big-monitor:py-5 big-monitor:px-12 rounded-full hover:bg-gradient-to-r from-[#0ae448] to-[#abff84] hover:text-black laptop:py-3 laptop:px-5 laptop:text-lg mobile:py-3 mobile:px-5 mobile:text-sm">
      {name}
    </button>
  );
};

export default Button;
