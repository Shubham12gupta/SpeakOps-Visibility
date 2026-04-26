import { motion } from "framer-motion";
import { Terminal, MessageSquare, Box } from "lucide-react";

export function InterfacesSection() {
  const interfaces = [
    { command: "speakops listen", desc: "Voice mode", primary: true, icon: Mic },
    { command: 'speakops run "cmd"', desc: "Text fallback", primary: false, icon: Terminal },
    { command: "REST API", desc: "Programmatic control", primary: false, icon: Box },
    { command: "Slack Bot", desc: "Team use (Coming soon)", primary: false, icon: MessageSquare, disabled: true }
  ];

  return (
    <section className="py-20 bg-card border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Multiple Interfaces</h3>
            <p className="text-muted-foreground">Voice first, but not voice only. Use SpeakOpsX wherever you are.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {interfaces.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 rounded-xl border flex items-center gap-4 ${
                  item.primary ? 'bg-primary/10 border-primary/20' : 
                  item.disabled ? 'bg-white/5 border-white/5 opacity-50' : 
                  'bg-background border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.primary ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/50'}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-sm font-semibold">{item.command}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Need to import Mic separately since it wasn't in lucide-react list above
import { Mic } from "lucide-react";
