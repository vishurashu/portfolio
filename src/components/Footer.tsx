import { Github, Linkedin, Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> echo "© {new Date().getFullYear()} <span className="text-foreground">Vishu Pal</span> — all_rights_reserved"
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/vishurashu" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/vishu-pal-743593244/" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
          <Linkedin size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
