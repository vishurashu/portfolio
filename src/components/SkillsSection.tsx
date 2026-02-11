import { motion } from "framer-motion";
import { Server, Database, Shield, Radio, Layout, LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
  area: string;
}

const categories: SkillCategory[] = [
  { title: "Backend", skills: ["Node.js", "Express.js"], icon: Server, area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]" },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Redis",], icon: Database, area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]" },
  { title: "Auth & Security", skills: ["JWT", "RBAC", "OAuth",], icon: Shield, area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]" },
  { title: "Real-Time & Payments", skills: ["Socket.IO", "Stripe", "Razorpay", "WebSockets"], icon: Radio, area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/7]" },
  { title: "Architecture", skills: ["REST APIs", "RAG", "Layered Design", "Microservices"], icon: Layout, area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/7/3/13]" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::skills</p>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
          <span className="text-primary">&gt;</span> cat /proc/skills
        </h3>
      </motion.div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2">
        {categories.map((cat, i) => (
          <motion.li
            key={cat.title}
            className={`min-h-[10rem] list-none ${cat.area}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="relative h-full rounded border border-border bg-card p-1.5">
              <GlowingEffect
                spread={40}
                glow
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded border-[0.5px] border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/5">
                    <cat.icon size={16} className="text-primary" />
                  </div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default SkillsSection;
