import { motion } from "framer-motion";
import { Mic2, FileCode2, Fingerprint, ShieldCheck, Zap, Activity } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Mic2,
      title: "Voice Orchestration",
      desc: "Natural language. No syntax memorization.",
      examples: [
        '"Scale up payment service" → kubectl scale',
        '"Deploy main to staging" → Jenkins trigger',
        '"Rollback last deployment" → ArgoCD rollback'
      ]
    },
    {
      icon: FileCode2,
      title: "Config-Driven Everything",
      desc: "One YAML file. Engineer defines it once. SpeakOpsX handles the rest.",
      code: `voice_commands:
  - intent: "scale {service} to {replicas}"
    action:
      type: kubernetes
      operation: scale
    confirm_in: [production]`
    },
    {
      icon: Fingerprint,
      title: "Voice Biometric Auth",
      desc: "Your voice is your password. Fully local, no third-party APIs.",
      list: [
        "3-phrase enrollment",
        "Encrypted local profile",
        "Strictest threshold in production"
      ]
    },
    {
      icon: ShieldCheck,
      title: "6-Layer Security Stack",
      desc: "Defense in depth for voice operations.",
      list: [
        "Voice Biometric (Who)",
        "RBAC (What they can do)",
        "Environment Check (Where)",
        "Confirmation Gate (Double check)",
        "Blast Radius (Block limits)",
        "Audit Trail (Record everything)"
      ]
    },
    {
      icon: Zap,
      title: "Universal Connectors",
      desc: "Native integrations for your stack.",
      list: [
        "Kubernetes: scale, logs, status, helm",
        "Jenkins: trigger, cancel, logs",
        "ArgoCD: sync, rollback, diff",
        "Grafana/Prometheus: metrics, alerts"
      ]
    },
    {
      icon: Activity,
      title: "Incident Response Mode",
      desc: "When alerts fire, SpeakOpsX auto-gathers context.",
      list: [
        "Failing pods + recent deploys",
        "Error logs + resource pressure",
        "One unified summary",
        "You just say what to do next"
      ]
    }
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Core Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to orchestrate infrastructure securely with your voice.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors flex flex-col overflow-hidden min-w-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.desc}</p>
              
              <div className="mt-auto">
                {feature.examples && (
                  <ul className="space-y-2 text-sm">
                    {feature.examples.map((ex, j) => (
                      <li key={j} className="flex items-start gap-2 min-w-0">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        <span className="text-white/80 break-words min-w-0">{ex}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {feature.list && (
                  <ul className="space-y-2 text-sm">
                    {feature.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                        <span className="text-white/80 break-words min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {feature.code && (
                  <div className="bg-[#0a0a0a] rounded-lg p-4 font-mono text-xs text-white/80 overflow-x-auto border border-white/5">
                    <pre><code>{feature.code}</code></pre>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
