import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200), // terminals appear
      setTimeout(() => setPhase(2), 1500), // text appears
      setTimeout(() => setPhase(3), 2800), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const caption = "No more switching between five terminals at 2 AM. Just talk to your infrastructure.";
  const colors = ['var(--color-violet)', 'var(--color-cyan)', 'var(--color-amber)', 'var(--color-magenta)', 'var(--color-emerald)'];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-1/2 flex items-center justify-center relative h-full">
        {/* Terminals */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-[28vw] h-[16vw] rounded-xl border-2 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden flex flex-col"
            style={{ borderColor: colors[i] }}
            initial={{ opacity: 0, scale: 0.5, rotate: (i - 2) * 15, x: (i - 2) * 40, y: (i - 2) * 20 }}
            animate={
              phase >= 1 
                ? { opacity: 1, scale: 1, rotate: (i - 2) * 8, x: (i - 2) * 30, y: (i - 2) * 15 }
                : { opacity: 0, scale: 0.5, rotate: (i - 2) * 15, x: (i - 2) * 40, y: (i - 2) * 20 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
          >
            <div className="h-8 border-b-2 flex items-center px-4 gap-2" style={{ borderColor: colors[i], backgroundColor: colors[i] + '10' }}>
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <Terminal className="w-4 h-4 ml-auto text-slate-500" />
            </div>
            <div className="p-4 font-mono text-[1vw] text-slate-600 leading-relaxed opacity-50">
              $ kubectl get pods -n prod<br/>
              $ aws sts get-caller-identity<br/>
              $ helm upgrade --install...
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-1/2 pr-12 z-10 relative">
        <motion.h2 
          className="text-[3.5vw] font-display font-medium leading-tight text-slate-800"
        >
          {caption.split(' ').map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </motion.div>
  );
}
