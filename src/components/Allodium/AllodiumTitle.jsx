import { useState, useRef } from 'react';

const AllodiumTitle = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');

  const itemRef = useRef();

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `
      perspective(700px) rotateX(${tiltX}deg) 
      rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)
    `;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  }

  return (
    <div className={className}
      style={{ transform: transformStyle }}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default AllodiumTitle;