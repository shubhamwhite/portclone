import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import amazon from '/brand/amazon-high-resolution-logo-transparent.png';
import nokia from '/brand/nokia-high-resolution-logo-transparent.png';
import bmw from '/brand/bmw-high-resolution-logo-transparent.png';
import firebolt from '/brand/firebolt-high-resolution-logo-transparent.png';
import space from '/brand/space-high-resolution-logo-transparent.png';

const Page3 = () => {
  useEffect(() => {
    const imagesWrapper = document.querySelector('.scrolling-images');
    const totalWidth = imagesWrapper.scrollWidth;

    gsap.to('.scrolling-images', {
      x: `-${totalWidth / 2}px`,
      repeat: -1, 
      duration: 4, 
      ease: 'linear', 
    });
  }, []);

  return (
    <div className="bg-cream1 overflow-hidden pt-10">
      <div className="flex scrolling-images">
        {/* First set of images */}
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={amazon}
          alt="Amazon"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={nokia}
          alt="Nokia"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={bmw}
          alt="BMW"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={firebolt}
          alt="Firebolt"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={space}
          alt="Space"
        />

        {/* Duplicate set of images for seamless loop */}
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={amazon}
          alt="Amazon"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={nokia}
          alt="Nokia"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={bmw}
          alt="BMW"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={firebolt}
          alt="Firebolt"
        />
        <img
          className="h-[100px] mx-5 transition-transform duration-100 hover:scale-110"
          src={space}
          alt="Space"
        />
      </div>
    </div>
  );
};

export default Page3;
