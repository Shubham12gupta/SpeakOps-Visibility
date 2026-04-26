import { motion } from "framer-motion";
import { Mic, Brain, Shield, Blocks, Volume2, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
  const steps = [
    { icon: Mic, label: "Your Voice" },
    { icon: Brain, label: "Whisper STT", sub: "(Local, Secure, Offline)" },
    { icon: Brain, label: "Intent Engine", sub: "(LLM matches command)" },
    { icon: Shield, label: "Safety Layer", sub: "(Confirm production)" },
    { icon: Blocks, label: "Connectors", sub: "(K8s, Jenkins, Argo)" },
    { icon: Volume2, label: "Response", sub: "(Action outcome)" }
  ];

  return (
    <section className="py-32 relative bg-card overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            How SpeakOps Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary font-medium"
          >
            No pipeline rewrites. No new infrastructure. Just attach and talk.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center flex-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-4 relative z-10 shadow-lg group hover:border-primary/50 transition-colors">
                <step.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="font-semibold text-sm whitespace-nowrap">{step.label}</h4>
              {step.sub && <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">{step.sub}</p>}
            </motion.div>
          ))}
        </div>
        
        {/* Connecting lines for desktop */}
        <div className="hidden md:block absolute top-[60%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-0" />
      </div>
    </section>
  );
}
