import { useEffect } from "react";
import gsap from "gsap";

const ScrollUp = () => {

    useEffect(() => {
        gsap.to(".rotating-img", {
          rotate: 360,
          duration: 6,
          repeat: -1,
          ease: "linear",
        });
      }, []);

  return (
    <div className="fixed mobile:hidden mt-36 end-0 mr-20">
    <img
      className="rotating-img"
      src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
      alt="Rotating Logo 1"
    />
  </div>
  )
}

export default ScrollUp