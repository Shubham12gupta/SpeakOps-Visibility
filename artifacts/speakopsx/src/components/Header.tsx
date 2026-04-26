import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-primary via-accent to-primary p-[1.5px]">
            <div className="w-full h-full rounded-[7px] bg-background flex items-center justify-center">
              <span className="font-mono font-black text-base bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">X</span>
            </div>
          </div>
          <span className="text-base md:text-lg font-bold tracking-tight">
            Speak<span className="text-white">Ops</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">X</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#architecture" className="hover:text-white transition-colors">How it works</a>
          <a href="#security" className="hover:text-white transition-colors">Security</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </nav>

        <a
          href="https://github.com/shubham12gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </motion.header>
  );
}
