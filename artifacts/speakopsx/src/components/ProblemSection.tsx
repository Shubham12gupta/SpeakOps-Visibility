import { motion } from "framer-motion";
import { AlertCircle, Bell, MessageSquare, Monitor } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-24 relative bg-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-8"
          >
            <AlertCircle className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
          >
            Every DevOps engineer knows this moment. <span className="text-muted-foreground">It's 3am. Production is down.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            You're half asleep, trying to remember the exact kubectl command, typing it wrong twice, making things worse.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Bell,
              title: "Just alert you",
              desc: "PagerDuty wakes you up but you still have to do everything manually.",
              color: "text-orange-500"
            },
            {
              icon: MessageSquare,
              title: "Only work in Slack",
              desc: "Botkube shows you what's happening but won't act.",
              color: "text-blue-500"
            },
            {
              icon: Monitor,
              title: "Require a browser",
              desc: "Rundeck needs you to find the right button while your hands are shaking.",
              color: "text-green-500"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl"
            >
              <item.icon className={`w-8 h-8 mb-6 ${item.color}`} />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Nobody built the action layer. <span className="text-primary">Until now.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
