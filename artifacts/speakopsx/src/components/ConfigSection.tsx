import { motion } from "framer-motion";
import { FileJson, Github } from "lucide-react";

export function ConfigSection() {
  const code = `version: "1.0"
name: "my-microservices"

environments:
  production:
    require_confirmation: true
    notify_slack: true
  staging:
    require_confirmation: false

connectors:
  kubernetes:
    context: "arn:aws:eks:us-east-1:cluster/prod"
    namespace: "default"

voice_commands:
  - intent: "scale {service} to {replicas}"
    action:
      type: kubernetes
      operation: scale
    confirm_in: [production]`;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Infrastructure as Code.<br />Executed by Voice.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Everything in SpeakOpsX is driven by a single <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded">voice.config.yaml</code> file. You define the intents, the connectors, and the safety rules.
            </p>
            <a 
              href="https://github.com/shubham12gupta" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" /> View full example on GitHub
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
          >
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <FileJson className="w-4 h-4 text-white/40 mr-2" />
              <span className="text-white/60 text-xs font-mono">voice.config.yaml</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-relaxed text-white/80">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
