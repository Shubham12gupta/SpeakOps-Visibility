import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Mic } from 'lucide-react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800), // caption
      setTimeout(() => setPhase(3), 1600), // credits
      setTimeout(() => setPhase(4), 3000), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const caption = "SpeakOpsX. Talk to your infrastructure. It listens.";

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Central Large Mic replacing the template one for finale */}
      <motion.div 
        className="flex items-center justify-center w-24 h-24 rounded-full shadow-2xl mb-8 relative"
        style={{ background: 'linear-gradient(135deg, var(--color-violet), var(--color-magenta))' }}
        initial={{ scale: 0, y: 50 }}
        animate={phase >= 1 ? { scale: 1, y: 0 } : { scale: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Mic className="w-12 h-12 text-white" />
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-violet-500/30"
          animate={{ scale: [1, 2, 3], opacity: [0.8, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Logo */}
      <div className="flex items-center text-[5vw] font-display font-bold tracking-tight mb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          SpeakOps
        </motion.span>
        <motion.span
          className="text-gradient-brand ml-2"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        >
          X
        </motion.span>
      </div>

      {/* Caption / Tagline */}
      <div className="max-w-[70vw] text-center overflow-hidden mb-16">
        <motion.h2 
          className="text-[2.5vw] font-display font-medium leading-tight text-slate-600"
        >
          {caption.split(' ').map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Credits */}
      <motion.div 
        className="absolute bottom-12 text-center text-slate-400 font-mono text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        github.com/shubham12gupta · open source
      </motion.div>

    </motion.div>
  );
}
