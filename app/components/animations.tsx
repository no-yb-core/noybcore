'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

// Motion constants
const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION_NORMAL = 0.4;
const DURATION_REVEAL = 0.6;
const Y_OFFSET = 16;

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : Y_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: DURATION_REVEAL, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : Y_OFFSET },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: DURATION_NORMAL, ease: EASE } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
