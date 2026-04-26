import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200), // Card + Caption
      setTimeout(() => setPhase(2), 1200), // Connections
      setTimeout(() => setPhase(3), 3800), // Exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const caption = "One YAML file. Any pipeline. Built on Zero Trust. Voice never leaves your machine.";

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-12"
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="w-1/2 h-full flex flex-col justify-center gap-8 relative z-10">
        
        {/* Code Card */}
        <motion.div 
          className="w-full bg-[#0F172A] rounded-2xl p-6 shadow-2xl border border-slate-700/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-4 text-xs font-mono text-slate-400">voice.config.yaml</span>
          </div>
          <pre className="font-mono text-[1.2vw] leading-loose">
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}><span className="text-pink-400">name:</span> <span className="text-emerald-300">speakops-k8s</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}><span className="text-pink-400">auth:</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>  <span className="text-cyan-300">type:</span> <span className="text-amber-300">voice_biometric</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}>  <span className="text-cyan-300">local_processing:</span> <span className="text-violet-400">true</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}><span className="text-pink-400">intents:</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}>  - <span className="text-cyan-300">phrase:</span> <span className="text-emerald-300">"scale {`{service}`} to {`{replicas}`}"</span></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={phase >= 1 ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}>    <span className="text-cyan-300">action:</span> <span className="text-amber-300">kubectl scale deploy</span></motion.div>
          </pre>
        </motion.div>

        {/* Zero Trust Badge */}
        <motion.div 
          className="self-start inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full font-bold border border-emerald-200 shadow-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", delay: 1.6 }}
        >
          <ShieldCheck className="w-6 h-6" />
          Zero Trust Security
        </motion.div>
      </div>

      <div className="w-1/2 pl-16 z-10">
        <motion.h2 
          className="text-[3vw] font-display font-medium leading-tight text-slate-800"
        >
          {caption.split(' ').map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-3"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
        
        {/* Integrations (Right side diagram placeholder, visual connected to mic from template) */}
        <div className="mt-16 relative h-40">
           {/* Animated connection lines */}
           <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
             {/* Left to right lines connecting to the mic position (mic is handled in VideoTemplate) */}
             <motion.path 
               d="M 0 80 Q 150 80 250 0" 
               fill="none" stroke="var(--color-cyan)" strokeWidth="3" strokeDasharray="6 6"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={phase >= 2 ? { pathLength: 1, opacity: 0.6 } : {}}
               transition={{ duration: 1 }}
             />
             <motion.path 
               d="M 0 80 Q 150 80 250 80" 
               fill="none" stroke="var(--color-amber)" strokeWidth="3" strokeDasharray="6 6"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={phase >= 2 ? { pathLength: 1, opacity: 0.6 } : {}}
               transition={{ duration: 1, delay: 0.2 }}
             />
             <motion.path 
               d="M 0 80 Q 150 80 250 160" 
               fill="none" stroke="var(--color-magenta)" strokeWidth="3" strokeDasharray="6 6"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={phase >= 2 ? { pathLength: 1, opacity: 0.6 } : {}}
               transition={{ duration: 1, delay: 0.4 }}
             />
           </svg>

           {/* Badges */}
           <motion.div 
             className="absolute top-[-20px] right-[40px] w-16 h-16 bg-white rounded-2xl shadow-lg border border-cyan-100 flex items-center justify-center font-bold text-cyan-600 text-xs"
             initial={{ scale: 0 }} animate={phase >= 2 ? { scale: 1 } : {}} transition={{ type: "spring", delay: 1 }}
           >
             K8s
           </motion.div>
           <motion.div 
             className="absolute top-[48px] right-[0px] w-16 h-16 bg-white rounded-2xl shadow-lg border border-amber-100 flex items-center justify-center font-bold text-amber-600 text-xs"
             initial={{ scale: 0 }} animate={phase >= 2 ? { scale: 1 } : {}} transition={{ type: "spring", delay: 1.2 }}
           >
             Jenkins
           </motion.div>
           <motion.div 
             className="absolute top-[128px] right-[40px] w-16 h-16 bg-white rounded-2xl shadow-lg border border-magenta-100 flex items-center justify-center font-bold text-magenta-600 text-xs"
             initial={{ scale: 0 }} animate={phase >= 2 ? { scale: 1 } : {}} transition={{ type: "spring", delay: 1.4 }}
           >
             ArgoCD
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
