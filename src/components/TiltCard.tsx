import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  key?: string | number;
}

export default function TiltCard({ children, className = '', onClick, disabled = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth 3D rotation tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for damping to ensure liquid-smooth movement
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  const scale = useSpring(1, springConfig);

  // Glowing spotlight coordinates tracking
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse cursor coordinates inside card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates to [-0.5, 0.5]
    const relativeX = (mouseX / width) - 0.5;
    const relativeY = (mouseY / height) - 0.5;

    x.set(relativeX);
    y.set(relativeY);
    
    setGlowPos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    scale.set(1.025);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: disabled ? 0 : rotateX,
        rotateY: disabled ? 0 : rotateY,
        scale: disabled ? 1 : scale,
      }}
      className={`relative overflow-hidden transition-all duration-300 select-none ${className}`}
      id="tilt-card-wrapper"
    >
      {/* 3D Spotlight Glow Overlay */}
      {isHovered && !disabled && (
        <div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${glowPos.x}px ${glowPos.y}px, var(--theme-shimmer-color), transparent 85%)`,
          }}
          id="tilt-card-glow"
        />
      )}

      {/* Internal Content translated in Z-plane */}
      <div 
        style={{ transform: disabled ? 'none' : 'translateZ(15px)' }} 
        className="h-full w-full transform-gpu"
        id="tilt-card-content"
      >
        {children}
      </div>
    </motion.div>
  );
}
