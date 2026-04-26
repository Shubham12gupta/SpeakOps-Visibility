import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-32 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                <img 
                  src="/shubham.jpeg" 
                  alt="Shubham Gupta — Founder of SpeakOpsX" 
                  className="w-full h-full object-cover rounded-[1.5rem] filter contrast-[1.1]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border border-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-md">
                <p className="text-sm font-bold text-primary mb-1">FOUNDER & CREATOR</p>
                <p className="text-lg font-semibold">Shubham Gupta</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              The Mind Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SpeakOpsX</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                SpeakOpsX is not just a brand; it's a testament to the vision and capability of its creator, Shubham Gupta. As a young Indian developer and founder, Shubham built SpeakOpsX to represent a high-end, forward-thinking approach to technology.
              </p>
              <p>
                This platform exists to unequivocally claim the SpeakOpsX identity across the digital landscape. It serves as the single source of truth for the brand's existence, its origins, and its rightful owner.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1" />
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Verified Creator</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
