import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

const projects = [
  {
    title: "Ananas Academy",
    subtitle: "Educational Platform",
    stack: ["Node.js", "Express.js", "MongoDB"],
    challenge: "Slow course and assessment queries",
    solution: "MongoDB indexing and query optimization",
    link: "https://ananasacademy.com",
  },
  {
    title: "Blue Notary Service",
    subtitle: "Digital Notary Platform",
    stack: ["Node.js", "JWT", "RBAC"],
    challenge: "Unauthorized access risks",
    solution: "JWT authentication and RBAC middleware",
    link: "https://bluenotary.us",
  },
  {
    title: "StudentKare",
    subtitle: "School Assets Marketplace",
    stack: ["Node.js", "Express.js", "MongoDB"],
    challenge: "Managing secure asset purchases for children by parents",
    solution: "Role-based flows for parents, optimized product listing and order handling",
    link: "https://www.studentkare.com",
  },
];


const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::projects</p>
        <h3 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
          <span className="text-primary">&gt;</span> ls ~/projects
        </h3>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group flex flex-col rounded border border-border bg-card p-5 transition-colors hover:border-primary/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h4 className="font-mono text-base font-bold text-foreground">{p.title}</h4>
            <p className="mb-3 font-mono text-xs text-muted-foreground">// {p.subtitle}</p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-primary">
                  {s}
                </span>
              ))}
            </div>

            <div className="mb-5 flex-1 rounded border border-border bg-secondary/30 p-3 font-mono text-xs">
              <p>
                <span className="font-bold text-destructive">[ERR]</span>{" "}
                <span className="text-muted-foreground">{p.challenge}</span>
              </p>
              <p className="mt-1">
                <span className="font-bold text-primary">[FIX]</span>{" "}
                <span className="text-muted-foreground">{p.solution}</span>
              </p>
            </div>

            <MagnetizeButton size="sm" particleCount={8} className="w-full" asChild>
              <a href={p.link} target="_blank" rel="noreferrer" className="gap-2 font-mono text-xs">
                ./open <ExternalLink size={12} />
              </a>
            </MagnetizeButton>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
