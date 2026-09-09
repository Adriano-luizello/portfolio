import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds, used to stagger siblings. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts content into view the first time it enters the viewport.
 * Respects prefers-reduced-motion (renders static).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Short underline that draws itself when it enters view. Pair with a step number. */
export function DrawLine({ delay = 0 }: { delay?: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="h-px w-8 bg-white/30 mt-2" />;
  }

  return (
    <motion.div
      className="h-px w-8 bg-white/40 mt-2 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: delay + 0.2 }}
    />
  );
}
