import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export function RoadmapSection() {
  const roadmap = [
    { version: "V1", title: "Voice + Kubernetes + YAML + CLI", status: "current" },
    { version: "V2", title: "Multi-connector + RBAC + Audit logs", status: "planned" },
    { version: "V3", title: "Go binary + Helm chart + Plugin ecosystem", status: "planned" },
    { version: "V4", title: "Incident mode + Web UI + REST API", status: "planned" },
    { version: "V5", title: "SpeakOps Cloud + Enterprise tier", status: "planned" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Project Roadmap</h2>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className={`absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-background ${item.status === 'current' ? 'text-primary' : 'text-white/20'}`}>
                  {item.status === 'current' ? <CheckCircle2 className="h-5 w-5 bg-background rounded-full" /> : <Circle className="h-5 w-5" />}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className={`font-mono font-bold text-lg ${item.status === 'current' ? 'text-primary' : 'text-white/60'}`}>
                    {item.version}
                  </span>
                  {item.status === 'current' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 w-fit">
                      Current
                    </span>
                  )}
                </div>
                <h3 className={`text-xl md:text-2xl ${item.status === 'current' ? 'text-white font-bold' : 'text-white/70 font-medium'}`}>
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
