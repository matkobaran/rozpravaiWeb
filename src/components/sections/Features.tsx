
import { Clock, MessageCircle, Globe, Zap, ShoppingCart, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Your AI assistant never sleeps, providing instant responses to customer inquiries at any time."
  },
  {
    icon: MessageCircle,
    title: "Smart FAQ Answering",
    description: "Automatically answers common questions using your knowledge base and learns from interactions."
  },
  {
    icon: ShoppingCart,
    title: "Product Recommendations",
    description: "Suggests relevant products based on customer preferences and browsing history."
  },
  {
    icon: Globe,
    title: "Slovak & English Support",
    description: "Communicate with customers in their preferred language with natural conversation flow."
  },
  {
    icon: Zap,
    title: "Easy API Integration",
    description: "Simple integration with your existing e-commerce platform through our robust API."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track performance metrics and gain insights into customer behavior and preferences."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose RozpravaAI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our AI chatbot the perfect solution for your e-commerce business.
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
