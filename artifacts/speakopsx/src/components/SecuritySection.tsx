import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export function SecuritySection() {
  const points = [
    "Voice biometric data never leaves your machine.",
    "No credentials in config files — Vault references only.",
    "All audio processed in memory, never written to disk.",
    "Every command logged with voice match score and outcome.",
    "Dangerous operations require explicit confirmation always."
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/50 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Zero Trust Security
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Zero Trust. Verify everything. Trust nothing.</h2>
              <p className="text-muted-foreground mb-6">Every voice, every command, every environment is authenticated, authorized, and audited — no implicit trust, ever.</p>
              <ul className="space-y-4">
                {points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-lg text-white/90">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
