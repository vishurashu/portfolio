import { motion } from "framer-motion";
import { Award, Heart, LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; text: string }[] = [
  { icon: Award, text: "NCC Cadet & Gun Shooting Competition participant" },
  { icon: Heart, text: "Completed Half Marathon — discipline, consistency, endurance" },
];

const AchievementsSection = () => (
  <section className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::achievements</p>
        <h3 className="mb-8 text-3xl font-bold sm:text-4xl">
          <span className="text-primary">&gt;</span> cat ~/achievements.log
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              className="flex items-start gap-3 rounded border border-border bg-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <item.icon size={18} className="mt-0.5 shrink-0 text-accent" />
              <p className="font-mono text-xs text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
