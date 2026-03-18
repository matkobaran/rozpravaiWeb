
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { About } from "@/components/sections/About";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LiveDemo />
        <Features />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
