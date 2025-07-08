
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <LiveDemo />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
