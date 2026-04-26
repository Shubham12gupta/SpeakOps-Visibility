import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Layers } from "lucide-react";

export function VisionSection() {
  const items = [
    {
      icon: Code2,
      title: "Engineering Excellence",
      desc: "SpeakOpsX represents a commitment to high-quality code, robust architecture, and modern development practices."
    },
    {
      icon: Layers,
      title: "Product Identity",
      desc: "More than just a project, it's a cohesive brand built with intention, design thinking, and scalability in mind."
    },
    {
      icon: Zap,
      title: "Forward Thinking",
      desc: "Embracing the bleeding edge of web technologies, seamless animations, and cinematic user experiences."
    },
    {
      icon: Cpu,
      title: "Operational Mastery",
      desc: "The 'Ops' in SpeakOpsX signifies smooth deployments, optimized performance, and reliable infrastructure."
    }
  ];

  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Vision of SpeakOpsX</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SpeakOpsX is built on foundational pillars that define its approach to technology and product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
