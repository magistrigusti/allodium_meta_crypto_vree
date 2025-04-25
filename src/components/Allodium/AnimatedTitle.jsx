import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse'
        }
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`animated-title ${containerClass}`}
      ref={containerRef}
    >
      {title.split('<br />').map((line, index) => (
        <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          key={index}
        >
          {line.split(' ').map((word, i) => (
            <span className="animated-word" 
              key={i} 
              dangerouslySetInnerHTML={{__html: word}} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitle;