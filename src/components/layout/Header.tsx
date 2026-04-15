import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full overflow-visible bg-background/95 backdrop-blur-md">
      <div className="container relative mx-auto flex h-16 items-stretch px-4">
        {/* Logo column: no bottom border — avoids the menu line cutting through the overlapping logo */}
        <Link
          to="/"
          className="relative z-20 flex shrink-0 items-center overflow-visible pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:pr-3"
        >
          <BrandLogo className="h-16 sm:h-[4.5rem] -my-1 translate-y-[5px]" />
        </Link>

        {/* Desktop nav: centered in the header row (not tied to the right column) */}
        <nav className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center space-x-4 md:flex">
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className="min-w-[60px] text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("features")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("demo")}
            className="min-w-[60px] text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("about")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="min-w-[60px] text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("contact")}
          </button>
        </nav>

        {/* Right: language + mobile menu; bottom border only here (not under logo) */}
        <div className="flex min-h-0 min-w-0 flex-1 items-center justify-end border-b border-border pl-2">
          <div className="hidden items-center space-x-2 md:flex">
            <LanguageSwitcher />
          </div>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('features')}
            </button>
            <button 
              onClick={() => scrollToSection("demo")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('demo')}
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('contact')}
            </button>
            <div className="flex flex-col space-y-2 pt-4">
              <LanguageSwitcher />
              <Button variant="outline" size="sm">{t('clientPortal')}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
