import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  id?: string;
  once?: boolean;
  margin?: string;
  staggerChildren?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  id,
  once = true,
  margin = "-10% 0px -10% 0px", // slightly adjusted trigger area for premium feel
  staggerChildren = 0.15,
}: ScrollRevealProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      ...initialOffset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out cubic curve (exponential-like transition)
      }
    }
  };

  const childrenArray = React.Children.toArray(children).filter(Boolean);

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={containerVariants}
    >
      {childrenArray.map((child, index) => {
        let gridClasses = '';
        if (React.isValidElement(child)) {
          const childProps = child.props as { className?: string };
          if (childProps && childProps.className) {
            const classes = childProps.className.split(/\s+/);
            const spanClasses = classes.filter(c => 
              c.includes('col-span') || 
              c.includes('row-span') || 
              c.includes('col-start') || 
              c.includes('col-end') ||
              c.startsWith('sm:col-') ||
              c.startsWith('md:col-') ||
              c.startsWith('lg:col-') ||
              c.startsWith('xl:col-') ||
              c.startsWith('2xl:col-') ||
              c.startsWith('sm:row-') ||
              c.startsWith('md:row-') ||
              c.startsWith('lg:row-') ||
              c.startsWith('xl:row-') ||
              c.startsWith('2xl:row-')
            );
            gridClasses = spanClasses.join(' ');
          }
        }

        return (
          <motion.div
            key={index}
            variants={childVariants}
            className={`${gridClasses} w-full h-full`}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

