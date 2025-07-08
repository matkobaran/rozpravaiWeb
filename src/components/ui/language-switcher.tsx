
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-muted-foreground" />
      <div className="flex gap-1">
        <Button
          variant={language === 'sk' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('sk')}
          className="text-xs h-8 px-2"
        >
          SK
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs h-8 px-2"
        >
          EN
        </Button>
      </div>
    </div>
  );
};
