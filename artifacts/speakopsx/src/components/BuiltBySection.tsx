import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

export function BuiltBySection() {
  const links = [
    { icon: FaGithub, url: "https://github.com/shubham12gupta", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/shubham555tech", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://www.instagram.com/its1438049", label: "Instagram" },
    { icon: FaYoutube, url: "https://www.youtube.com/@shubhamgupta-d8k", label: "YouTube" },
    { icon: FaGlobe, url: "https://portfolio-1d6u.vercel.app/", label: "Portfolio" }
  ];

  return (
    <section className="py-16 bg-card border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-background p-6 md:p-8 rounded-3xl border border-white/10">
          
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
              <img 
                src={shubhamPhoto} 
                alt="Shubham Gupta — Founder of SpeakOpsX" 
                className="w-full h-full object-cover filter contrast-[1.1]"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Shubham Gupta</h3>
              <p className="text-sm text-primary font-medium">Founder & DevOps / Cloud Engineer</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
            <div className="flex gap-3">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground text-center md:text-right max-w-xs leading-relaxed">
              SpeakOpsX is the official brand and product, created and owned by Shubham Gupta. The handles above are the only verified channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
