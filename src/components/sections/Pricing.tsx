
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Star } from "lucide-react";

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('starter'),
      price: "29",
      period: t('month'),
      description: t('starterDesc'),
      features: [
        "Do 1 000 konverzácií/mesiac",
        "Základné odpovedanie na FAQ",
        "Email podpora",
        "Podpora slovenčiny a angličtiny",
        "API integrácia",
      ],
      popular: false
    },
    {
      name: t('pro'),
      price: "79",
      period: t('month'),
      description: t('proDesc'),
      features: [
        "Do 10 000 konverzácií/mesiac",
        "Pokročilé odporúčania produktov",
        "Prioritná podpora",
        "Vlastná databáza znalostí",
        "Analytický dashboard",
        "Webhook integrácie",
      ],
      popular: true
    },
    {
      name: t('enterprise'),
      price: "199",
      period: t('month'),
      description: t('enterpriseDesc'),
      features: [
        "Neobmedzené konverzácie",
        "Vlastné AI trénovanie",
        "Dedikovaný account manager",
        "24/7 telefonická podpora",
        "Vlastné integrácie",
        "White-label riešenie",
        "SLA záruka",
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('simplePricing')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricingDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${
              plan.popular ? "ring-2 ring-primary" : ""
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} />
                    {t('mostPopular')}
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="text-primary" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {t('getStarted')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('needCustom')}
          </p>
          <Button variant="outline">{t('contactSales')}</Button>
        </div>
      </div>
    </section>
  );
};
