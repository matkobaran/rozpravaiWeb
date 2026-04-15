import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  const socialBtn =
    "text-gray-400 hover:bg-white/5 hover:text-gray-200 h-11 w-11 [&_svg]:!h-6 [&_svg]:!w-6";

  return (
    <footer className="bg-gray-900 py-8 text-white sm:py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col items-center text-center sm:mb-8">
          <p className="mb-4 text-sm font-medium tracking-wide text-gray-400">{t("footerSocialHeading")}</p>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className={socialBtn} aria-label="Facebook">
              <Facebook size={24} strokeWidth={1.75} />
            </Button>
            <Button asChild variant="ghost" size="icon" className={socialBtn}>
              <a href="https://x.com/RozpravAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={24} strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className={socialBtn}>
              <a
                href="https://www.linkedin.com/in/rozpravai-479b953bb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className={socialBtn}>
              <a href="mailto:rozpravai@gmail.com" aria-label="Email">
                <Mail size={24} strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className={socialBtn}>
              <a
                href="https://www.instagram.com/rozpravai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.75} />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 text-center text-sm text-gray-400 sm:pt-6">
          <p>&copy; 2026 RozpravAI. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
};
