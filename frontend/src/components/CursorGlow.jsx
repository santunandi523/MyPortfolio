import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth physics spring for the background marigold glow aura
  const springConfigAura = { damping: 28, stiffness: 180, mass: 0.6 };
  const auraX = useSpring(mouseX, springConfigAura);
  const auraY = useSpring(mouseY, springConfigAura);

  // Slightly tighter spring for the delicate accent ring
  const springConfigRing = { damping: 22, stiffness: 320, mass: 0.2 };
  const ringX = useSpring(mouseX, springConfigRing);
  const ringY = useSpring(mouseY, springConfigRing);

  useEffect(() => {
    // Detect touch-only devices to avoid stuck circles
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
      {/* ─── 1. LARGE BACKGROUND MARIGOLD GLOW CIRCLE ─── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isHoveringClickable ? 520 : 440,
          height: isHoveringClickable ? 520 : 440,
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          background: isHoveringClickable
            ? 'radial-gradient(circle, rgba(244, 185, 66, 0.16) 0%, rgba(244, 185, 66, 0.06) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(244, 185, 66, 0.11) 0%, rgba(244, 185, 66, 0.035) 45%, transparent 70%)',
          filter: 'blur(35px)',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
          willChange: 'transform',
        }}
      />

      {/* ─── 2. SUBTLE FOCUSED MARIGOLD ORBITAL RING ─── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: isHoveringClickable ? 44 : 28,
          height: isHoveringClickable ? 44 : 28,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: isHoveringClickable
            ? '1.5px solid rgba(244, 185, 66, 0.55)'
            : '1px solid rgba(244, 185, 66, 0.3)',
          background: isHoveringClickable
            ? 'rgba(244, 185, 66, 0.12)'
            : 'rgba(244, 185, 66, 0.04)',
          backdropFilter: 'blur(1px)',
          transition: 'width 0.2s ease, height 0.2s ease, border 0.2s ease, background 0.2s ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
