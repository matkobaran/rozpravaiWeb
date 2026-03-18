
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Target, Award } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('aboutDesc1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('aboutDesc2')}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">{t('uptime')}</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">{t('support')}</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Globe className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">SK/EN</div>
                <div className="text-sm text-muted-foreground">{t('languageSupport')}</div>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('ourVision')}</h3>
                <p className="text-muted-foreground">
                  {t('visionDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('whyChooseUs')}</h3>
                <p className="text-muted-foreground">
                  {t('whyChooseDesc')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
