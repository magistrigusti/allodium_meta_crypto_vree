import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TiLocationArrowOutline } from "react-icons/ti";
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

import Button from './Button';

const navItems = [
  { path: '/dominum', icon: '/allodium/icons/dom-link.png' },
  { path: '/dominarium', icon: '/allodium/icons/allod-link.png' },
  { path: '/magisterium', icon: '/allodium/icons/allod-link.png' },
  { path: '/mercatus', icon: '/allodium/icons/allod-link.png' },
  { path: '/portal', icon: '/allodium/icons/allod-link.png' },

];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const location = useLocation();
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if(currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, []);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);


  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none 
      transition-all duration-700 sm:inset-x-6"
      ref={navContainerRef}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="/">
              <img
                className={`w-20 ${location.pathname === '/' ? 'animate-pulse brightness-125' : ''}`}
                src="/allodium/icons/allod_logo.png"
                alt="allod-logo"
              />
            </a>


            <Button id="product-button"
              containerClass="bg-blue-50 md:flex hidden items-center 
                justify-center gap-1"
              title="Products"
              rightIcon={<TiLocationArrowOutline />}
              onClick={() => window.open('https://t.me/Allodium_MetaGame', '_blank')}
            />
          </div>

          <div className="hidden md:flex flex-row items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <a key={item.path} href={item.path} className="nav-hover-btn">
                  <img
                    src={item.icon}
                    alt="nav-icon"
                    className={`w-20 h-20 ${isActive ? 'animate-pulse brightness-125' : ''}`}
                  />
                </a>
              )
            })}


            <button className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio className="hidden"
                src="/audio/loop.mp3"
                ref={audioElementRef}
                loop
              />

              <img className={`w-10 h-10 ${isAudioPlaying ? 'opacity-100' : 'opacity-50'}`}
                src="/allodium/icons/music.png" alt="music-icon"
              />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;