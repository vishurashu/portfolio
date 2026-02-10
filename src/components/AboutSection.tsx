import { motion } from "framer-motion";
import { Server, Shield, Zap, Braces, Database, Globe } from "lucide-react";
import { DitheringShader } from "@/components/ui/dithering-shader";

const highlights = [
  { icon: Server, label: "Scalable APIs", desc: "High-performance REST APIs built for scale" },
  { icon: Shield, label: "Secure Systems", desc: "JWT, RBAC, and security-first architecture" },
  { icon: Zap, label: "AI Backends", desc: "RAG-powered chatbots and intelligent systems" },
];

const stats = [
  { value: "3+", label: "years_exp" },
  { value: "10+", label: "projects_shipped" },
  { value: "99%", label: "uptime_target" },
];

const techStack = [
  { icon: Braces, name: "Node.js" },
  { icon: Database, name: "MongoDB" },
  { icon: Globe, name: "REST APIs" },
];

const AboutSection = () => (
  <section id="about" className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <DitheringShader
        width={1920}
        height={1080}
        colorBack="#020a02"
        colorFront="#00cc00"
        shape="wave"
        type="8x8"
        pxSize={3}
        speed={0.4}
        className="h-full w-full"
      />
    </div>

    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::about</p>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
          <span className="text-primary">&gt;</span> whoami<span className="cursor-blink"></span>
        </h3>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          className="lg:col-span-3 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>
              Backend Developer with <span className="font-bold text-primary">3+ years</span> of experience
              designing and building scalable, secure, and high-performance backend systems using{" "}
              <span className="font-bold text-primary">Node.js</span> and{" "}
              <span className="font-bold text-primary">Express.js</span>.
            </p>
            <p>
              Strong expertise in REST API architecture, authentication & authorization (JWT, RBAC),
              database optimization, and real-time applications. Currently working on{" "}
              <span className="text-accent font-bold">AI Agent Chatbots</span> using RAG
              for intelligent, context-aware responses.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 border-t border-border pt-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 font-mono text-xs text-primary"
              >
                <t.icon size={12} />
                {t.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="group relative overflow-hidden rounded border border-border bg-card p-5 transition-colors hover:border-primary/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/5">
                  <h.icon size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-mono text-sm font-bold text-foreground">{h.label}</h4>
                  <p className="font-mono text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
