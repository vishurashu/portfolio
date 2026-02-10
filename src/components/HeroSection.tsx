import { motion } from "framer-motion";
import { MapPin, ArrowRight, Github, Terminal } from "lucide-react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import ServerVisual from "@/components/ServerVisual";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden pt-20">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    <div className="pointer-events-none absolute -top-32 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-primary">STATUS:</span>
          <span className="text-muted-foreground">AVAILABLE_FOR_HIRE</span>
        </motion.div>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-muted-foreground font-mono text-sm mb-2">// identify</span>
          <span className="block text-foreground">VISHU PAL</span>
          <span className="glitch-text block text-primary">BACKEND_DEV</span>
        </h1>

        <div className="mb-8 rounded border border-border bg-card p-4 font-mono text-sm">
          <p className="text-muted-foreground">
            <span className="text-primary">const</span> <span className="text-accent">developer</span> = {'{'}
          </p>
          <p className="pl-4 text-muted-foreground">
            experience: <span className="text-primary">"3+ years"</span>,
          </p>
          <p className="pl-4 text-muted-foreground">
            stack: [<span className="text-primary">"Node.js"</span>, <span className="text-primary">"Express"</span>, <span className="text-primary">"MongoDB"</span>],
          </p>
          <p className="pl-4 text-muted-foreground">
            focus: <span className="text-primary">"scalable & secure systems"</span>
          </p>
          <p className="text-muted-foreground">{'}'}</p>
        </div>

        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <MapPin size={12} className="text-primary" />
          <span>loc: Amritsar, Punjab, India</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <MagnetizeButton size="lg" asChild>
            <a href="#projects" className="gap-2 font-mono text-sm">
              ./view_projects
              <ArrowRight size={16} />
            </a>
          </MagnetizeButton>
          <MagnetizeButton size="lg" asChild>
            <a href="https://github.com/vishurashu" target="_blank" rel="noreferrer" className="gap-2 font-mono text-sm">
              <Github size={16} /> github
            </a>
          </MagnetizeButton>
          <MagnetizeButton size="lg" asChild>
            <a href="#contact" className="font-mono text-sm">ping</a>
          </MagnetizeButton>
        </div>
      </motion.div>

      <motion.div
        className="relative hidden h-[500px] w-full lg:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ServerVisual />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
