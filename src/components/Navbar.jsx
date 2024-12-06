import React from 'react';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className=" mobile:px-12 mobile:py-10 big-monitor:px-28 big-monitor:py-20 flex items-center justify-between">
      <Logo />
      <Button />
    </div>
  );
};

export default Navbar;
