
import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setHidden(false);
      
      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
      };

      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
      };

      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const onMouseEnter = () => {
        setHidden(false);
      };

      const onMouseLeave = () => {
        setHidden(true);
      };

      const onMouseDown = () => {
        setClicked(true);
      };

      const onMouseUp = () => {
        setClicked(false);
      };

      const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-pointer]')
          .forEach(el => {
            el.addEventListener('mouseenter', () => setLinkHovered(true));
            el.addEventListener('mouseleave', () => setLinkHovered(false));
          });
      };

      addEventListeners();
      handleLinkHoverEvents();

      return () => {
        removeEventListeners();
      };
    }
  }, []);

  if (hidden) return null;

  return (
    <>
      <div 
        className={`cursor-dot ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-150' : ''}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
        }}
      />
      <div 
        className={`cursor-outline ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1,
        }}
      />
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="fixed w-1 h-1 rounded-full bg-primary/30 pointer-events-none z-[9997]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: hidden ? 0 : 0.3 - (i * 0.05),
            transform: `translate(-50%, -50%) scale(${1 - (i * 0.1)})`,
            transition: `opacity 0.1s ease, transform 0.1s ease, top ${0.2 + (i * 0.05)}s ease ${i * 0.02}s, left ${0.2 + (i * 0.05)}s ease ${i * 0.02}s`,
          }}
        />
      ))}
    </>
  );
};

export default Cursor;
