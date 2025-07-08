
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Search, MessageCircle, FileText, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HelpCenter = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const helpTopics = [
    {
      icon: MessageCircle,
      title: t('gettingStarted'),
      description: t('gettingStartedDesc'),
      articles: 8
    },
    {
      icon: FileText,
      title: t('apiDocumentation'),
      description: t('apiDocumentationDesc'),
      articles: 12
    },
    {
      icon: Video,
      title: t('tutorials'),
      description: t('tutorialsDesc'),
      articles: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Button>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('helpCenter')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('helpCenterDesc')}
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('searchHelp')}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {helpTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <topic.icon className="text-primary" size={24} />
                </div>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <p className="text-sm text-primary">{topic.articles} {t('articles')}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('frequentlyAsked')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">{t('faq1Question')}</h3>
              <p className="text-muted-foreground">{t('faq1Answer')}</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">{t('faq2Question')}</h3>
              <p className="text-muted-foreground">{t('faq2Answer')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t('faq3Question')}</h3>
              <p className="text-muted-foreground">{t('faq3Answer')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
