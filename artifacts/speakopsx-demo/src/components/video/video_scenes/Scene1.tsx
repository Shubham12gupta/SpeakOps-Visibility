import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 3000), // begin exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const caption = "Meet SpeakOpsX. The voice-driven control plane for your DevOps stack.";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center px-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo Reveal */}
      <div className="flex flex-col items-center gap-8 translate-y-[-10vh]">
        
        {/* We use the mic from the VideoTemplate for the visual logo mark, just show text here */}
        <div className="flex items-center text-[6vw] font-display font-bold tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SpeakOps
          </motion.span>
          <motion.span
            className="text-gradient-brand ml-2"
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={phase >= 1 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
          >
            X
          </motion.span>
        </div>

        {/* Caption */}
        <div className="max-w-[70vw] text-center overflow-hidden">
          <motion.h2 
            className="text-[3vw] font-display font-medium leading-tight text-slate-800"
            initial={{ opacity: 0, y: 40 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {caption.split(' ').map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>
    </motion.div>
  );
}
