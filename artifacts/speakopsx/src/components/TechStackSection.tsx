import { motion } from "framer-motion";

export function TechStackSection() {
  const stack = [
    { category: "Speech-to-Text", tech: "OpenAI Whisper", desc: "Local, offline, free" },
    { category: "Intent Engine", tech: "LLM (Claude / OpenAI)", desc: "Structured output extraction" },
    { category: "Voice Auth", tech: "Custom MFCC-based", desc: "Speaker verification, no 3rd party" },
    { category: "K8s Client", tech: "Official Python SDK", desc: "Direct cluster communication" },
    { category: "CLI UI", tech: "Click + Rich", desc: "Beautiful terminal outputs" },
    { category: "Config Validation", tech: "PyYAML + Pydantic", desc: "Strict schema typing" },
    { category: "Secrets", tech: "HashiCorp Vault", desc: "Secure credential fetching" }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Tech Stack</h2>
            <p className="text-muted-foreground">Built with modern Python and AI tooling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-background border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <div className="text-xs text-primary font-mono mb-1">{item.category}</div>
                  <div className="font-bold text-white">{item.tech}</div>
                </div>
                <div className="text-sm text-muted-foreground sm:text-right">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
