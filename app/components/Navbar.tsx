import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/app/components/utils/scroll"; // ← Importar aquí

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Sobre Mí", id: "about" },
    { name: "Proyectos", id: "projects" },
    { name: "Servicios", id: "services" },
    { name: "Contacto", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold  dark:text-neutral-100 hover:opacity-80 transition-opacity"
          >
            SM<span className="opacity-70">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className="opacity-70 dark:text-neutral-400 hover:opacity-100 dark:hover:text-neutral-100 transition-opacity font-medium hover:cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}