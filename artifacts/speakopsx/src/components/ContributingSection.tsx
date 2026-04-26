import { motion } from "framer-motion";
import { Github, Star, GitMerge } from "lucide-react";

export function ContributingSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20"
          >
            <GitMerge className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Open Source & Early Stage</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            SpeakOps is in active development. We welcome contributions, feature requests, and early adopters to help shape the future of voice-driven infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/shubham12gupta" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 rounded-full font-bold transition-colors"
            >
              <Github className="w-5 h-5" /> Open an Issue
            </a>
            <a 
              href="https://github.com/shubham12gupta" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-colors"
            >
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500/20" /> Star the Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
