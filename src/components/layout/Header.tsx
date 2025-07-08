
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
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
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">RA</span>
          </div>
          <span className="text-xl font-bold text-foreground">RozpravaAI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("features")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('features')}
          </button>
          <button 
            onClick={() => scrollToSection("demo")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('demo')}
          </button>
          <button 
            onClick={() => scrollToSection("pricing")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('pricing')}
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('about')}
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('contact')}
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <LanguageSwitcher />
          <Button variant="outline">{t('clientPortal')}</Button>
          <Button>{t('tryItFree')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('pricing')}
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
              <Button variant="outline">{t('clientPortal')}</Button>
              <Button>{t('tryItFree')}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
