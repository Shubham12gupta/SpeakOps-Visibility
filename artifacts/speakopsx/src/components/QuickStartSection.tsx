import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function QuickStartSection() {
  const code = `# Install
pip install speakops

# Initialize in your project
speakops init

# Enroll your voice
speakops enroll

# Validate your config
speakops validate

# Start listening
speakops listen`;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in Minutes</h2>
            <p className="text-muted-foreground">Installed via pip. Ready to orchestrate.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
          >
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="mx-auto flex items-center text-white/40 text-xs gap-2">
                <Terminal className="w-3 h-3" /> quickstart
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-white/90">
                  {code.split('\n').map((line, i) => {
                    if (line.startsWith('#')) return <span key={i} className="text-white/40 block">{line}</span>;
                    if (line.startsWith('pip') || line.startsWith('speakops')) return (
                      <span key={i} className="block">
                        <span className="text-primary mr-2">$</span>
                        <span className="text-accent">{line.split(' ')[0]}</span>
                        <span className="text-white/90"> {line.split(' ').slice(1).join(' ')}</span>
                      </span>
                    );
                    return <span key={i} className="block h-4">{line}</span>;
                  })}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
