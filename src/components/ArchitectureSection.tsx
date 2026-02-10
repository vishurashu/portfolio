import { motion } from "framer-motion";

const layers = [
  "$ curl -X POST /api/resource",
  "→ middleware::authenticate(jwt)",
  "→ middleware::authorize(rbac)",
  "→ controller::handleRequest()",
  "→ service::processData()",
  "→ db::query(optimized)",
  "← response::json(200, data)",
];

const ArchitectureSection = () => (
  <section className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::architecture</p>
        <h3 className="mb-8 text-3xl font-bold sm:text-4xl">
          <span className="text-primary">&gt;</span> trace --verbose
        </h3>

        <div className="rounded border border-border bg-card p-6 font-mono text-xs">
          <div className="mb-3 flex items-center gap-2 text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-destructive" />
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="ml-2">terminal — request_pipeline.sh</span>
          </div>
          {layers.map((l, i) => (
            <motion.p
              key={l}
              className={i === 0 ? "text-accent font-bold" : i === layers.length - 1 ? "text-primary font-bold" : "text-muted-foreground"}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {l}
            </motion.p>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground leading-relaxed">
          Every request flows through a structured pipeline — <span className="text-primary font-bold">authenticated</span>,{" "}
          <span className="text-primary font-bold">authorized</span>,{" "}
          <span className="text-primary font-bold">processed</span>, and{" "}
          <span className="text-primary font-bold">responded</span>. Clean architecture. Zero trust. Maximum throughput.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ArchitectureSection;
