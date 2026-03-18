
import { Clock, MessageCircle, Globe, Zap, ShoppingCart, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('support247'),
      description: t('support247Desc')
    },
    {
      icon: MessageCircle,
      title: t('smartFaq'),
      description: t('smartFaqDesc')
    },
    {
      icon: ShoppingCart,
      title: t('productRecs'),
      description: t('productRecsDesc')
    },
    {
      icon: Globe,
      title: t('languageSupport'),
      description: t('languageSupportDesc')
    },
    {
      icon: Zap,
      title: t('easyIntegration'),
      description: t('easyIntegrationDesc')
    },
    {
      icon: BarChart,
      title: t('analyticsReports'),
      description: t('analyticsDesc')
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('whyChoose')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('featuresDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
