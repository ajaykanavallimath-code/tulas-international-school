import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Mouse position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for follower circle
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse) vs touch screen
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isTouchDevice) {
      return () => window.removeEventListener('resize', checkDevice);
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('data-cursor') === 'pointer'
      );
      setIsHovered(isInteractive);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  // If touch device or hidden, don't render custom cursor
  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision inner center dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-brand-crimson dark:bg-brand-gold"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Fluid spring follower ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-brand-crimson/50 dark:border-brand-gold/60 backdrop-blur-[0.5px]"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isClicking ? 28 : isHovered ? 48 : 34,
          height: isClicking ? 28 : isHovered ? 48 : 34,
          backgroundColor: isHovered ? 'rgba(200, 155, 60, 0.12)' : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />
    </>
  );
}
