
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sk: {
    // Header
    features: "Funkcie",
    demo: "Demo",
    pricing: "Cenník",
    about: "O nás",
    contact: "Kontakt",
    clientPortal: "Klientsky portál",
    tryItFree: "Vyskúšať zadarmo",
    
    // Hero
    aiPoweredSupport: "AI-poháňaná zákaznícka podpora",
    heroTitle: "Posilnite svoj obchod pomocou",
    aiConversations: "AI konverzácií",
    heroDescription: "Transformujte vašu e-commerce zákaznícku podporu pomocou nášho inteligentného AI chatbota. Poskytujte 24/7 podporu, odpovedajte na časté otázky okamžite a zvyšujte predaj pomocou inteligentných odporúčaní produktov.",
    tryLiveDemo: "Vyskúšať živé demo",
    bookDemo: "Rezervovať demo",
    
    // Features
    whyChoose: "Prečo si vybrať RozpravAI?",
    featuresDescription: "Objavte výkonné funkcie, ktoré robia z nášho AI chatbota perfektné riešenie pre váš e-commerce podnik.",
    support247: "24/7 zákaznícka podpora",
    support247Desc: "Váš AI asistent nikdy nespí a poskytuje okamžité odpovede na zákaznícke otázky kedykoľvek.",
    smartFaq: "Inteligentné odpovedanie na FAQ",
    smartFaqDesc: "Automaticky odpovedá na bežné otázky pomocou vašej databázy znalostí a učí sa z interakcií.",
    productRecs: "Odporúčania produktov",
    productRecsDesc: "Navrhuje relevantné produkty na základe preferencií zákazníkov a histórie prehliadania.",
    languageSupport: "Podpora slovenčiny a angličtiny",
    languageSupportDesc: "Komunikujte so zákazníkmi v ich preferovanom jazyku s prirodzeným konverzačným tokom.",
    easyIntegration: "Jednoduchá API integrácia",
    easyIntegrationDesc: "Jednoduché zapojenie do vašej existujúcej e-commerce platformy prostredníctvom nášho robustného API.",
    analytics: "Analytika a prehľady",
    analyticsDesc: "Sledujte výkonnostné metriky a získajte prehľady o správaní a preferenciách zákazníkov.",
    
    // Live Demo
    tryAssistant: "Vyskúšajte nášho AI asistenta",
    demoDescription: "Zažite silu RozpravAI s naším živým demo. Pýtajte sa otázky, požiadajte o produkty alebo získajte podporu.",
    demoTitle: "RozpravAI Demo",
    alwaysReady: "Vždy pripravený pomôcť",
    resetDemo: "Resetovať demo",
    typeMessage: "Napíšte svoju správu...",
    
    // Pricing
    simplePricing: "Jednoduché, transparentné ceny",
    pricingDescription: "Vyberte si perfektný plán pre váš podnik. Všetky plány zahŕňajú naše základné AI funkcie bez skrytých poplatkov.",
    starter: "Štartovací",
    starterDesc: "Perfektný pre malé e-shopy začínajúce s AI podporou",
    pro: "Pro",
    proDesc: "Ideálny pre rastúce podniky s vyšším objemom zákazníkov",
    enterprise: "Enterprise",
    enterpriseDesc: "Pre veľké podniky vyžadujúce vlastné riešenia",
    month: "mesiac",
    mostPopular: "Najpopulárnejší",
    getStarted: "Začať",
    needCustom: "Potrebujete vlastné riešenie? Sme tu, aby sme pomohli.",
    contactSales: "Kontaktovať predaj",
    
    // About
    aboutTitle: "O RozpravAI",
    aboutDesc1: "Sme tím AI špecialistov a e-commerce expertov, ktorí sa venujú revolúcii v zákazníckej podpore pre online podniky. Naším poslaním je sprístupniť pokročilé AI technológie podnikom všetkých veľkostí.",
    aboutDesc2: "Založená v roku 2025, RozpravAI sa rýchlo stala dôveryhodným partnerom pre e-commerce podniky, ktoré chcú zlepšiť zákaznícku skúsenosť prostredníctvom inteligentnej automatizácie.",
    happyClients: "Spokojní klienti",
    uptime: "Dostupnosť",
    support: "Podpora",
    ourVision: "Naša vízia",
    visionDesc: "Posilniť každý e-commerce podnik pomocou AI, ktoré je prirodzené, užitočné a skutočne rozumie ich zákazníkom.",
    ourValues: "Naše hodnoty",
    innovation: "• Inovácie v zákazníckej skúsenosti",
    reliability: "• Spoľahlivosť a dôvera",
    accessibility: "• Dostupnosť pre všetky veľkosti podnikov",
    learning: "• Neustále učenie a zlepšovanie",
    whyChooseUs: "Prečo si vybrať nás",
    whyChooseDesc: "Kombinujeme najmodernejšie AI technológie s hlbokým pochopením potrieb e-commerce a dodávame riešenia, ktoré prinášajú skutočné obchodné výsledky.",
    
    // Contact
    getInTouch: "Spojte sa s nami",
    contactDescription: "Pripravení transformovať vašu zákaznícku podporu? Kontaktujte nás dnes pre personalizované demo alebo na diskusiu o vašich špecifických potrebách.",
    sendMessage: "Pošlite nám správu",
    name: "Meno",
    yourName: "Vaše celé meno",
    email: "Email",
    yourEmail: "vas.email@priklad.com",
    message: "Správa",
    messagePlaceholder: "Povedzte nám o vašom projekte alebo sa opýtajte na otázky...",
    emailUs: "Napíšte nám email",
    emailDesc: "Pošlite nám email a odpovieme do 24 hodín.",
    callUs: "Zavolajte nám",
    callDesc: "Dostupní pondelok až piatok, 9:00 až 18:00 CET.",
    visitUs: "Navštívte nás",
    visitDesc: "Naplánujte si stretnutie v našej kancelárii pre osobnú konzultáciu.",
    quickResponse: "Záruka rýchlej odpovede",
    quickResponseDesc: "Chápeme, že načasovanie je pre váš podnik kľúčové. Preto garantujeme odpoveď na všetky otázky do 24 hodín v pracovných dňoch.",
    messageSent: "Správa odoslaná!",
    thankYou: "Ďakujeme, že ste nás kontaktovali. Čoskoro sa vám ozveme.",
    
    // Footer
    footerDesc: "Posilňujeme e-commerce pomocou inteligentných AI konverzácií. Transformujte svoju zákaznícku podporu ešte dnes.",
    quickLinks: "Rýchle odkazy",
    legal: "Právne informácie",
    privacyPolicy: "Zásady ochrany osobných údajov",
    termsOfService: "Podmienky použitia",
    cookiePolicy: "Zásady súborov cookie",
    gdprCompliance: "GDPR súlad",
    helpCenter: "Centrum pomoci",
    apiDocs: "API dokumentácia",
    statusPage: "Stránka stavu",
    readyToStart: "Pripravení začať?",
    joinBusinesses: "Pripojte sa k stovkám podnikov, ktoré už používajú RozpravAI na zlepšenie zákazníckej skúsenosti.",
    rights: "Všetky práva vyhradené.",
    
    // Demo responses
    demoGreeting: "Ahoj! Som váš AI nákupný asistent. Ako vám môžem pomôcť?",
    demoResponse1: "Rád vám s tým pomôžem! Dovoľte mi prehľadať náš katalóg produktov.",
    demoResponse2: "Na základe vašich preferencií som našiel niekoľko skvelých možností. Chceli by ste vidieť top 3 odporúčania?",
    demoResponse3: "Skvelá voľba! Tento produkt má vynikajúce recenzie. Chceli by ste vedieť o možnostiach doručenia alebo ho pridať do košíka?",
    demoResponse4: "Perfektne! Pridal som to do vášho košíka. Môžem vám ešte s niečím pomôcť?"
  },
  en: {
    // Header
    features: "Features",
    demo: "Demo",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    clientPortal: "Client Portal",
    tryItFree: "Try It Free",
    
    // Hero
    aiPoweredSupport: "AI-Powered Customer Support",
    heroTitle: "Empower Your Store with",
    aiConversations: "AI Conversations",
    heroDescription: "Transform your e-commerce customer service with our intelligent AI chatbot. Provide 24/7 support, answer FAQs instantly, and boost sales with smart product recommendations.",
    tryLiveDemo: "Try Live Demo",
    bookDemo: "Book a Demo",
    
    // Features
    whyChoose: "Why Choose RozpravAI?",
    featuresDescription: "Discover the powerful features that make our AI chatbot the perfect solution for your e-commerce business.",
    support247: "24/7 Customer Support",
    support247Desc: "Your AI assistant never sleeps, providing instant responses to customer inquiries at any time.",
    smartFaq: "Smart FAQ Answering",
    smartFaqDesc: "Automatically answers common questions using your knowledge base and learns from interactions.",
    productRecs: "Product Recommendations",
    productRecsDesc: "Suggests relevant products based on customer preferences and browsing history.",
    languageSupport: "Slovak & English Support",
    languageSupportDesc: "Communicate with customers in their preferred language with natural conversation flow.",
    easyIntegration: "Easy API Integration",
    easyIntegrationDesc: "Simple integration with your existing e-commerce platform through our robust API.",
    analytics: "Analytics & Insights",
    analyticsDesc: "Track performance metrics and gain insights into customer behavior and preferences.",
    
    // Live Demo
    tryAssistant: "Try Our AI Assistant",
    demoDescription: "Experience the power of RozpravAI with our live demo. Ask questions, request products, or get support.",
    demoTitle: "RozpravAI Demo",
    alwaysReady: "Always ready to help",
    resetDemo: "Reset Demo",
    typeMessage: "Type your message...",
    
    // Pricing
    simplePricing: "Simple, Transparent Pricing",
    pricingDescription: "Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.",
    starter: "Starter",
    starterDesc: "Perfect for small e-shops getting started with AI support",
    pro: "Pro",
    proDesc: "Ideal for growing businesses with higher customer volume",
    enterprise: "Enterprise",
    enterpriseDesc: "For large businesses requiring custom solutions",
    month: "month",
    mostPopular: "Most Popular",
    getStarted: "Get Started",
    needCustom: "Need a custom solution? We're here to help.",
    contactSales: "Contact Sales",
    
    // About
    aboutTitle: "About RozpravAI",
    aboutDesc1: "We're a team of AI specialists and e-commerce experts dedicated to revolutionizing customer service for online businesses. Our mission is to make advanced AI technology accessible to businesses of all sizes.",
    aboutDesc2: "Founded in 2025, RozpravAI has quickly become a trusted partner for e-commerce businesses looking to enhance their customer experience through intelligent automation.",
    happyClients: "Happy Clients",
    uptime: "Uptime",
    support: "Support",
    ourVision: "Our Vision",
    visionDesc: "To empower every e-commerce business with AI that feels natural, helpful, and truly understands their customers.",
    ourValues: "Our Values",
    innovation: "• Innovation in customer experience",
    reliability: "• Reliability and trust",
    accessibility: "• Accessibility for all business sizes",
    learning: "• Continuous learning and improvement",
    whyChooseUs: "Why Choose Us",
    whyChooseDesc: "We combine cutting-edge AI technology with deep understanding of e-commerce needs, delivering solutions that drive real business results.",
    
    // Contact
    getInTouch: "Get In Touch",
    contactDescription: "Ready to transform your customer service? Contact us today for a personalized demo or to discuss your specific needs.",
    sendMessage: "Send us a message",
    name: "Name",
    yourName: "Your full name",
    email: "Email",
    yourEmail: "your.email@example.com",
    message: "Message",
    messagePlaceholder: "Tell us about your project or ask any questions...",
    emailUs: "Email Us",
    emailDesc: "Send us an email and we'll respond within 24 hours.",
    callUs: "Call Us",
    callDesc: "Available Monday to Friday, 9 AM to 6 PM CET.",
    visitUs: "Visit Us",
    visitDesc: "Schedule a meeting at our office for in-person consultation.",
    quickResponse: "Quick Response Guarantee",
    quickResponseDesc: "We understand that timing is crucial for your business. That's why we guarantee a response to all inquiries within 24 hours on business days.",
    messageSent: "Message sent!",
    thankYou: "Thank you for contacting us. We'll get back to you soon.",
    
    // Footer
    footerDesc: "Empowering e-commerce with intelligent AI conversations. Transform your customer service today.",
    quickLinks: "Quick Links",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    gdprCompliance: "GDPR Compliance",
    helpCenter: "Help Center",
    apiDocs: "API Documentation",
    statusPage: "Status Page",
    readyToStart: "Ready to Get Started?",
    joinBusinesses: "Join hundreds of businesses already using RozpravAI to enhance their customer experience.",
    rights: "All rights reserved.",
    
    // Demo responses
    demoGreeting: "Hello! I'm your AI shopping assistant. How can I help you today?",
    demoResponse1: "I'd be happy to help you find that! Let me search our product catalog for you.",
    demoResponse2: "Based on your preferences, I found several great options. Would you like to see the top 3 recommendations?",
    demoResponse3: "Great choice! This product has excellent reviews. Would you like to know about shipping options or add it to your cart?",
    demoResponse4: "Perfect! I've added that to your cart. Is there anything else I can help you with today?"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['sk']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
