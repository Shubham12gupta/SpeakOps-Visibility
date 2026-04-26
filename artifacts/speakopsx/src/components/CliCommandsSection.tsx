import { motion } from "framer-motion";

export function CliCommandsSection() {
  const commands = [
    { cmd: "speakops listen", desc: "Voice mode, primary interface" },
    { cmd: 'speakops run "command"', desc: "Text mode, same engine" },
    { cmd: "speakops attach", desc: "Attach to any existing project" },
    { cmd: "speakops validate", desc: "Validate voice.config.yaml" },
    { cmd: 'speakops dry-run "command"', desc: "Preview without executing" },
    { cmd: "speakops audit", desc: "View command history" },
    { cmd: "speakops status", desc: "Cluster + connector health" },
    { cmd: "speakops enroll", desc: "Voice profile setup" },
    { cmd: "speakops env use staging", desc: "Switch active environment" }
  ];

  return (
    <section className="py-24 bg-card border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">CLI Reference</h2>
          <div className="bg-background rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-white/5">
              {commands.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center p-4 hover:bg-white/5 transition-colors gap-2 sm:gap-6"
                >
                  <div className="font-mono text-sm text-primary font-semibold sm:w-1/2">
                    $ {item.cmd}
                  </div>
                  <div className="text-sm text-muted-foreground sm:w-1/2">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
