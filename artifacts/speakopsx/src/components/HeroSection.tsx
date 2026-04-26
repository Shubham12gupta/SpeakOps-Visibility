import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/AuroraBackground";
import { ArrowRight, Play, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  "$ speakops listen",
  "",
  "🎙️  Listening...",
  "👤  Voice authenticated — Shubham",
  "🧠  Intent: scale payment-service to 5 replicas",
  "⚠️   Production environment detected — confirm?",
  "✅  Confirmed — scaling payment-service to 5 replicas",
  "🟢  Done — payment-service scaled successfully"
];

export function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < TERMINAL_LINES.length) {
        setDisplayedLines(TERMINAL_LINES.slice(0, currentLine + 1));
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 600); // Reveal a line every 600ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
      <AuroraBackground className="absolute inset-0 z-0" />
      
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left flex flex-col items-start pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">SpeakOps Open Source</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50 leading-tight"
          >
            Talk to your infrastructure.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">It listens.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-medium leading-relaxed"
          >
            SpeakOps is an open-source, voice-driven DevOps orchestration layer that attaches to any CI/CD pipeline — without rewrites, without migrations. Define your infrastructure commands once in YAML. Execute them with your voice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://github.com/shubham12gupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View on GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="https://www.youtube.com/@shubhamgupta-d8k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-colors"
            >
              <Play className="w-4 h-4 fill-white" /> Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Terminal Demo Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-[1.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center text-white/40 text-xs gap-2">
                <Terminal className="w-3 h-3" /> speakops — demo
              </div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 min-h-[240px] flex flex-col gap-2">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${line.startsWith('$') ? 'text-primary/90 font-semibold mb-2' : 'text-white/80'} ${line === '' ? 'h-4' : ''}`}
                >
                  {line}
                </motion.div>
              ))}
              {displayedLines.length === TERMINAL_LINES.length && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2.5 h-5 bg-white/50 mt-1 inline-block"
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
