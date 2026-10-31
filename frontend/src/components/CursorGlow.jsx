import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth fluid spring physics for the ambient background glow aura
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* ─── SOFT BACKGROUND MARIGOLD GLOW (NO CIRCLE RING) ─── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isHoveringClickable ? 540 : 440,
          height: isHoveringClickable ? 540 : 440,
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          background: isHoveringClickable
            ? 'radial-gradient(circle, rgba(244, 185, 66, 0.15) 0%, rgba(244, 185, 66, 0.05) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(244, 185, 66, 0.10) 0%, rgba(244, 185, 66, 0.03) 45%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
