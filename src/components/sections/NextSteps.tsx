import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const NextSteps = () => {
  const { t } = useLanguage();

  const openChat = () => {
    const el = document.getElementById("demo");
    el?.scrollIntoView({ behavior: "smooth" });

    const maybeOpen = (window as unknown as { rozpravaiOpenDemoWidget?: () => void }).rozpravaiOpenDemoWidget;
    if (maybeOpen) {
      maybeOpen();
      return;
    }

    (window as unknown as { rozpravaiOpenDemoRequested?: boolean }).rozpravaiOpenDemoRequested = true;
    window.dispatchEvent(new Event("rozpravai-open-demo-widget"));
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Čo robiť ďalej</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Postupujte krok po kroku — začnite testom na vašej stránke a potom sa prepnite na produkčné nasadenie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Krok 1</div>
              <div className="text-lg font-semibold mb-3">Otestujte chatbot</div>
              <div className="text-muted-foreground mb-4">
                Kliknite na tlačidlo a skúste položiť otázky ako zákazník.
              </div>
              <Button onClick={openChat} className="w-full">
                {t("tryLiveDemo")}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Krok 2</div>
              <div className="text-lg font-semibold mb-3">Nastavenie kontextu</div>
              <div className="text-muted-foreground mb-4">
                Kontext (FAQ/produkty) nastavíte na strane tenant-a v našom backend-e podľa vášho `tenant_id`.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Krok 3</div>
              <div className="text-lg font-semibold mb-3">Nasadenie</div>
              <div className="text-muted-foreground mb-4">
                Vložte jediný script tag do vašej stránky a chatbot bude fungovať bez ďalších zásahov.
              </div>
              <pre className="mt-2 rounded-lg border bg-muted p-3 overflow-x-auto text-sm">
                <code>{`<script src="{API_BASE_URL}/static/embed.js" data-tenant-id="{TENANT_ID}" data-title="RozpravaAI"></script>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

