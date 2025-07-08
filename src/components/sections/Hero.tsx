
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Sparkles size={16} />
          {t('aiPoweredSupport')}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          {t('heroTitle')}{" "}
          <span className="text-primary">{t('aiConversations')}</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {t('heroDescription')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" onClick={scrollToDemo} className="group">
            {t('tryLiveDemo')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline">
            {t('bookDemo')}
          </Button>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 relative animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Bot className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">RozpravaAI Assistant</h3>
                <p className="text-sm text-muted-foreground">{t('alwaysReady')}</p>
              </div>
            </div>
            <div className="space-y-4 text-left">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">"Ahoj! Hľadám modré letné šaty vo veľkosti M."</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-sm text-primary">Rád vám pomôžem nájsť perfektné modré letné šaty! Na základe našej aktuálnej kolekcie mám 3 krásne možnosti vo veľkosti M, ktoré by boli ideálne na leto. Chceli by ste ich vidieť?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
