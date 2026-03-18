
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Send } from "lucide-react";

export const Contact = () => {
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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contactDescription')}
          </p>

          <div className="mt-8">
            <Button onClick={openChat} className="inline-flex items-center gap-2">
              <Send className="h-4 w-4" />
              Kontaktovať cez chatbot
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto items-stretch">
          <ContactCard
            icon={<Mail className="text-primary" size={24} />}
            title={t("emailUs")}
            value="rozpravai@gmail.com"
            desc={t("emailDesc")}
          />

          <ContactCard
            icon={<Phone className="text-primary" size={24} />}
            title={t("callUs")}
            value="+421 940 723 850"
            desc={t("callDesc")}
          />

        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  value,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  desc: string;
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-5 h-full">
        <div className="flex h-full flex-col items-center justify-center text-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            {icon}
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground font-medium">{value}</p>
          </div>

          <p className="text-sm text-muted-foreground max-w-[18rem]">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};
