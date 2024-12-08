import React from 'react';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className=" laptop:px-24 laptop:py-10 mobile:px-12 mobile:py-10 big-monitor:px-28 big-monitor:py-20 flex items-center justify-between">
      <Logo />
      <Button name="Download" />
    </div>
  );
};

export default Navbar;
