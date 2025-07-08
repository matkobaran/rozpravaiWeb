
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
          {t('termsOfService')}
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            {t('lastUpdated')}: 8. január 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. {t('acceptance')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('acceptanceDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. {t('serviceDescription')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('serviceDescriptionDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. {t('userResponsibilities')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('userResponsibilitiesDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. {t('payment')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('paymentDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. {t('limitation')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('limitationDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. {t('termination')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('terminationDesc')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. {t('contact')}</h2>
            <p className="text-muted-foreground">
              {t('termsContactDesc')} rozpravai@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
