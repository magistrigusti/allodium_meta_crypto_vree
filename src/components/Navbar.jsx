import React, { useRef, useState } from 'react';

import { TiLocationArrowOutline } from "react-icons/ti";
import Button from './Button';

const navItems = [
  { path: '/dominum', icon: '/allodium/icons/dom-link.png' },
  { path: '/dominarium', icon: '/allodium/icons/allod-link.png' },
  { path: '/magisterium', icon: '/allodium/icons/allod-link.png' },
  { path: '/mercatus', icon: '/allodium/icons/allod-link.png' },
  { path: '/portal', icon: '/allodium/icons/allod-link.png' },

];

// const navItems = ['Dominum', 'Dominarium', "Magisterium", "Mercatus", "Portal"]

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIndicatorActive] = useState(false);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };


  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none 
      transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="/">
              <img className="w-20" src="/allodium/icons/allod_logo.png" path="/" />
            </a>

            <Button id="product-button"
              containerClass="bg-blue-50 md:flex hidden items-center 
                justify-center gap-1"
              title="Products"
              rightIcon={<TiLocationArrowOutline />}
            />
          </div>

          <div className="hidden md:flex flex-row items-center">
              {navItems.map((item) => (
                <a key={item}  className="nav-hover-btn"
                  href={item.path}
                >
                  <img className="w-20 h-20" src={item.icon} />
                </a>
              ))}
          </div>

           <button className="ml-10 flex items-center space-x-0.5"
            onClick={toggleAudioIndicator}
           >
              <audio className="hidden"
                src="/audio/loop.mp3"
                ref={audioElementRef}
                loop
              >
                {[1,2,3,4].map((bar) => (
                  <div className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                    style={{animationDelay: `${bar * 0.1}s`}}
                    key={bar}
                  />
                ))}
              </audio>
            </button>   
        </nav>
      </header>
    </div>
  );
};

export default Navbar;