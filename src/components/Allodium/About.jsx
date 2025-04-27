import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pinSpacing: true,
        pin: true,
      }
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  })

  return (
    <div className="min-h-screen w-screen" id="about">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general mb-8 text-sm uppercase md:text-[40px]">
          Welcome to <b>Allodium</b>
        </h2>

        <AnimatedTitle containerClass="mt-5 !text-black text-center"
          title="
          Disc<b>o</b>ver the world's <br />
          L<b>a</b>rgest shared adventure"
         />

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMO RTS RPG</p>

          <p>Allodium unites players from countless games and platforms into one grand adventre</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img className="absolute left-0 top size-full object-cover"
            src="allodium/allodium.jpg" 
            alt="Background"
          />
        </div>
      </div>
    </div>
  )
}

export default About;