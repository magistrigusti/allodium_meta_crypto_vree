import React, { useRef } from 'react';
import { TiLocationArrowOutline } from "react-icons/ti";
import Button from './Button';

const navItems = ['Dominum', 'Dominarium', 'Magisterium', 'Mercatus', 'Portal', 'About'];

const Navbar = () => {
  const navContainerRef = useRef(null);

  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none 
      transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef} 
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img className="w-20" src="/allodium/icons/allod_logo.png"/> 

            <Button id="product-button"
              containerClass="bg-blue-50 md:flex hidden items-center 
                justify-center gap-1"
              title="Products"
              rightIcon={<TiLocationArrowOutline />}
            />  
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;