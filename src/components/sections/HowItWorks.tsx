import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Bot, Check } from "lucide-react";
import type { ReactNode } from "react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const openChat = () => {
    const maybeOpen = (window as unknown as { rozpravaiOpenDemoWidget?: () => void }).rozpravaiOpenDemoWidget;
    if (maybeOpen) {
      maybeOpen();
      return;
    }

    (window as unknown as { rozpravaiOpenDemoRequested?: boolean }).rozpravaiOpenDemoRequested = true;
    window.dispatchEvent(new Event("rozpravai-open-demo-widget"));
  };

  return (
    <section className="py-20 px-4 bg-gray-50/50" id="how-it-works">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ako to funguje
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stačí chatovať a všetko sa vybaví za vás.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FlowStep
            step="1"
            title="Vyzkušajte si"
            icon={<Bot className="h-5 w-5" />}
            footer={
              <Button onClick={openChat} className="w-full sm:w-auto inline-flex items-center gap-2">
                {t("tryLiveDemo")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          >
            Otvorte chatbot a skúste položiť otázku tak, ako by ju položil zákazník.
          </FlowStep>

          <FlowStep
            step="2"
            title="Ak sa pači, dohodnite si stretnutie"
            icon={<Check className="h-5 w-5" />}
          >
            Ak sa vám páči, dohodnite si stretnutie cez chatbota. Pre stretnutie zadajte prompt
            <span className="font-semibold text-foreground"> "chcem stretnutie"</span> a vyberiete si termin.
          </FlowStep>

          <FlowStep step="3" title="Osobne stretnutie a doladenie detailov" icon={<Check className="h-5 w-5" />}>
            Osobné stretnutie a doladenie detailov.
          </FlowStep>

          <FlowStep step="4" title="Chatbot je na vašej stránke" icon={<Check className="h-5 w-5" />}>
            Chatbot je na vašej stránke.
          </FlowStep>
        </div>
      </div>
    </section>
  );
};

const FlowStep = ({
  step,
  title,
  icon,
  footer,
  children,
}: {
  step: string;
  title: string;
  icon: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="mt-1 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
          <div className="flex-1">
            <div className="text-sm text-primary font-semibold mb-1">Krok {step}</div>
            <div className="text-lg font-semibold text-foreground">{title}</div>
            <div className="text-muted-foreground mt-2">{children}</div>
            {footer ? <div className="mt-4">{footer}</div> : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

