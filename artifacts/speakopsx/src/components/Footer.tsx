export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">SpeakOpsX</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} SpeakOpsX by Shubham Gupta. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <span className="text-primary/80">Brand Protected</span>
          <span className="text-white/20">|</span>
          <span>Verified Identity</span>
        </div>
      </div>
    </footer>
  );
}
