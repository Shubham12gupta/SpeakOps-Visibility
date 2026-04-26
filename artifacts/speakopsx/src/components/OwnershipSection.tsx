import { motion } from "framer-motion";
import { ShieldCheck, Link2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

export function OwnershipSection() {
  const links = [
    {
      name: "Portfolio",
      url: "https://portfolio-1d6u.vercel.app/",
      icon: FaGlobe,
      desc: "Official Developer Portfolio",
      color: "hover:border-blue-500 hover:shadow-blue-500/20"
    },
    {
      name: "GitHub",
      url: "https://github.com/shubham12gupta",
      icon: FaGithub,
      desc: "@shubham12gupta",
      color: "hover:border-white hover:shadow-white/20"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham555tech",
      icon: FaLinkedin,
      desc: "Shubham Gupta",
      color: "hover:border-blue-400 hover:shadow-blue-400/20"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/its1438049",
      icon: FaInstagram,
      desc: "@its1438049",
      color: "hover:border-pink-500 hover:shadow-pink-500/20"
    }
  ];

  return (
    <section id="ownership" className="py-32 relative bg-card/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20"
          >
            <ShieldCheck className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Proof of Ownership</h2>
          <p className="text-muted-foreground text-lg">
            SpeakOpsX is exclusively created, owned, and operated by Shubham Gupta. 
            The following channels serve as the verified official presence. Any other claim to the SpeakOpsX brand is invalid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex items-center p-6 bg-background rounded-2xl border border-white/10 transition-all duration-300 ${link.color}`}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <link.icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </div>
              <Link2 className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
            </motion.a>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group flex items-center p-6 bg-background/50 rounded-2xl border border-white/5 opacity-60 cursor-not-allowed"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
              <FaYoutube className="w-6 h-6 text-white/50" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/70">YouTube</h3>
              <p className="text-sm text-primary/70 font-medium">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
