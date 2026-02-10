import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "exp", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold text-primary">
          <Terminal size={16} />
          <span>vishu@dev:~$</span>
          <span className="animate-pulse">_</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              /{l.label}
            </a>
          ))}
          <MagnetizeButton size="sm" particleCount={8} asChild>
            <a href="#contact" className="font-mono text-xs">./hire_me</a>
          </MagnetizeButton>
        </div>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/50 bg-background px-6 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              $ cd /{l.label}
            </a>
          ))}
          <MagnetizeButton size="sm" className="mt-3 w-full" asChild>
            <a href="#contact" onClick={() => setOpen(false)} className="font-mono text-xs">./hire_me</a>
          </MagnetizeButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
