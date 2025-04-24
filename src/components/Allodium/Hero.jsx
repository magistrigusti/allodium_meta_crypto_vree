import { useState, useRef } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer 
            overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 
              ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVdClick}
            >
              <video id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                src={getVideoSrc(upcomingVideoIndex)}
                ref={nextVideoRef}
                onLoadedData={handleVideoLoad}
                loop
                muted
              />
            </div>
          </div>

          <video id="next-video"
            className="absolute-center invisible absolue z-20 size-64 object-center"
            src={getVideoSrc(currentIndex)}
            ref={nextVideoRef}
            onLoadedData={handleVideoLoad}
            loop
            muted
          />

          <video />
        </div>
      </div>
    </div>
  )
};

export default Hero;

