import { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


const Dominum = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);
  const getVideoSrc = (index) => `/img/ship-${index}.png`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  }

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-image', { visibility: 'visible' });
  
      gsap.to('#next-image', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
      });
  
      gsap.to('#current-image', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut'
      });
    }
  }, { dependecies: [currentIndex], revertOnUpdate: true });
  
  useGSAP(() => {
    gsap.set('#image-frame', {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: '0 0 40% 10%',
    });
  
    gsap.from('#image-frame', {  // <-- ВАЖНО исправить здесь
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#image-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    });
  });  



  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer 
    overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 
      ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVdClick}
            >
              <img
                id="current-image"
                className="size-64 origin-center scale-150 object-cover object-center"
                src={getVideoSrc(upcomingVideoIndex)}
                ref={nextVideoRef}
                onLoad={handleVideoLoad}
                alt="Upcoming"
              />
            </div>
          </div>

          <img
            id="next-image"
            className="absolute-center invisible absolute z-20 size-64 object-center"
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            onLoad={handleVideoLoad}
            alt="Next"
          />

          <img
            className="absolute left-0 top-0 size-full object-cover object-center"
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            onLoad={handleVideoLoad}
            alt="Background"
          />
        </div>


        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-orange-300">
          Allo<b>d</b>ium
          <span className="text-xs align-super">™</span>
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi <b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the MetaGame Layer <br /> Unleash the Play Economy
            </p>
          </div>
        </div>
      </div>

      <h1 className="specialfont hero-heading absolute bottom-5 right-5 text-black">
        Allo<b>d</b>ium
        <span className="text-xs align-super">™</span>
      </h1>

    </div>
  )
};

export default Dominum;

