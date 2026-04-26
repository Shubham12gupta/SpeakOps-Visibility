import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Box } from 'lucide-react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200), // caption
      setTimeout(() => setPhase(2), 1000), // scaling up
      setTimeout(() => setPhase(3), 3800), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const caption = "Say 'scale checkout to ten replicas' — SpeakOpsX verifies your voice and rolls it out on Kubernetes.";
  const pods = Array.from({ length: 10 });
  const colors = ['var(--color-cyan)', 'var(--color-violet)', 'var(--color-emerald)', 'var(--color-amber)', 'var(--color-magenta)'];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-16"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-5/12 z-10">
        {/* Voice Waveform visual */}
        <div className="flex items-center gap-1 mb-12 h-16">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 rounded-full bg-violet-500"
              initial={{ height: 4 }}
              animate={{ height: phase >= 1 ? [10, 40, 15, 60, 20, 10][i % 6] : 4 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror", delay: i * 0.05 }}
            />
          ))}
        </div>

        <motion.h2 
          className="text-[3vw] font-display font-medium leading-tight text-slate-800"
        >
          {caption.split(' ').map((word, i) => {
            const isHighlight = word.includes("'scale") || word.includes("checkout") || word.includes("ten") || word.includes("replicas'");
            return (
              <motion.span 
                key={i} 
                className={`inline-block mr-3 ${isHighlight ? 'text-violet-600 font-bold' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            )
          })}
        </motion.h2>
      </div>

      <div className="w-7/12 pl-12 h-full flex flex-col justify-center">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xl">
          <div className="flex items-center gap-4 mb-8 border-b pb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="k8s" className="w-10 h-10" />
            <div className="font-mono text-lg font-bold text-slate-700">deployment/checkout</div>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {pods.map((_, i) => {
              // 3 pods exist initially, 7 scale up
              const isInitial = i < 3;
              const delay = isInitial ? 0 : 1.5 + (i * 0.2); // Start scaling after 1.5s
              const color = colors[i % colors.length];

              return (
                <motion.div
                  key={i}
                  className="aspect-square rounded-xl shadow-md flex items-center justify-center flex-col gap-2 relative overflow-hidden"
                  style={{ backgroundColor: isInitial ? color : (phase >= 2 ? color : 'transparent'), border: `2px solid ${color}` }}
                  initial={isInitial ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.8 }}
                  animate={
                    isInitial 
                      ? { opacity: 1, scale: 1 }
                      : (phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.8 })
                  }
                  transition={{ duration: 0.5, type: "spring", delay: isInitial ? 0 : (phase >= 2 ? (i-3)*0.15 : 0) }}
                >
                  <Box className={`w-8 h-8 ${isInitial || phase >= 2 ? 'text-white' : 'text-slate-400'}`} />
                  {(!isInitial && phase < 2) && (
                    <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-xl" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
