
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToHome')}
        </Button>
        
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {t('privacyPolicy')}
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            {t('lastUpdated')}: 8. január 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. {t('dataCollection')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('dataCollectionDesc')}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>{t('personalInfo')}</li>
              <li>{t('usageData')}</li>
              <li>{t('technicalData')}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. {t('dataUsage')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('dataUsageDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. {t('dataSharing')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('dataSharingDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. {t('dataRetention')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('dataRetentionDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. {t('yourRights')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('yourRightsDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. {t('contact')}</h2>
            <p className="text-muted-foreground">
              {t('privacyContactDesc')} rozpravai@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
