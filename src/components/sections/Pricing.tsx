
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small e-shops getting started with AI support",
    features: [
      "Up to 1,000 conversations/month",
      "Basic FAQ answering",
      "Email support",
      "Slovak & English support",
      "API integration",
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "79",
    period: "month",
    description: "Ideal for growing businesses with higher customer volume",
    features: [
      "Up to 10,000 conversations/month",
      "Advanced product recommendations",
      "Priority support",
      "Custom knowledge base",
      "Analytics dashboard",
      "Webhook integrations",
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "199",
    period: "month",
    description: "For large businesses requiring custom solutions",
    features: [
      "Unlimited conversations",
      "Custom AI training",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label solution",
      "SLA guarantee",
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
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
                    Most Popular
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
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};
