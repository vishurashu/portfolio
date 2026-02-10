import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="mx-auto max-w-4xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 font-mono text-xs text-muted-foreground">// section::contact</p>
        <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
          <span className="text-primary">&gt;</span> ssh connect
        </h3>
        <p className="mx-auto mb-10 max-w-xl font-mono text-xs text-muted-foreground">
          // Open to opportunities building meaningful backend systems. Accepting connections.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <MagnetizeButton asChild>
            <a href="mailto:pal.vishal94@gmail.com" className="gap-2 font-mono text-xs">
              <Mail size={14} /> pal.vishal94@gmail.com
            </a>
          </MagnetizeButton>
          <MagnetizeButton asChild>
            <a href="tel:09915129809" className="gap-2 font-mono text-xs">
              <Phone size={14} /> 09915129809
            </a>
          </MagnetizeButton>
        </div>

        <div className="flex items-center justify-center gap-4">
          <MagnetizeButton size="icon" particleCount={6} asChild>
            <a href="https://github.com/vishurashu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
          </MagnetizeButton>
          <MagnetizeButton size="icon" particleCount={6} asChild>
            <a href="https://www.linkedin.com/in/vishu-pal-743593244/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </MagnetizeButton>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
