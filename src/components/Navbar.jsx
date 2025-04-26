import React, { useRef } from 'react';
import { TiLocationArrowOutline } from "react-icons/ti";
import Button from './Button';

const navItems = [
  { path: '/dominum', icon: '/allodium/icons/dom-icon.png' },
  { path: '/dominarium', icon: '/allodium/icons/allod-link.png' },
  { path: '/magisterium', icon: '/allodium/icons/allod-link.png' },
  { path: '/mercatus', icon: '/allodium/icons/allod-link.png' },
  { path: '/portal', icon: '/allodium/icons/allod-link.png' },
  { path: '/', icon: '/allodium/icons/allod_logo.png' },
];


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
                <a key={item.path} href={item.path}>
                  <img className="w-10 h-10"
                    src={item.icon} alt="nav-icon" 
                  />
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