
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDemoWidget = () => {
    const maybeOpen = (window as unknown as { rozpravaiOpenDemoWidget?: () => void })
      .rozpravaiOpenDemoWidget;

    if (maybeOpen) {
      maybeOpen();
      return;
    }

    // Fallback: let LiveDemo handle it once it mounts / loads.
    (window as unknown as { rozpravaiOpenDemoRequested?: boolean }).rozpravaiOpenDemoRequested = true;
    window.dispatchEvent(new Event("rozpravai-open-demo-widget"));
  };

  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Sparkles size={16} />
          {t("aiPoweredSupport")}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          {t("heroTitle")} <span className="text-primary">{t("aiConversations")}</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {t("heroDescription")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            onClick={() => {
              openDemoWidget();
            }}
            className="group"
          >
            {t("tryLiveDemo")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
