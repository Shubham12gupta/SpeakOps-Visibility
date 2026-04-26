export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">SpeakOps</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} SpeakOps by Shubham Gupta. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <a href="https://github.com/shubham12gupta" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <span className="text-white/20">•</span>
          <a href="https://portfolio-1d6u.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Creator</a>
        </div>
      </div>
    </footer>
  );
}
