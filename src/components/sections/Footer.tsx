
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md">
              <BrandLogo className="h-10 sm:h-11" />
            </Link>
            <p className="text-gray-400 mb-4">
              {t('footerDesc')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <a
                  href="https://x.com/RozpravAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <a
                  href="https://www.linkedin.com/in/rozpravai-479b953bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <a href="mailto:rozpravai@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <a
                  href="https://www.instagram.com/rozpravai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition-colors"
                >
                  {t('features')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("demo")}
                  className="hover:text-white transition-colors"
                >
                  {t('demo')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  {t('about')}
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                >
                  {t('contact')}
                </button>
              </li>
              <li>
                <Link to="/help-center" className="hover:text-white transition-colors">
                  {t('helpCenter')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('apiDocs')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('statusPage')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('cookiePolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('gdprCompliance')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 RozpravAI. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
};
