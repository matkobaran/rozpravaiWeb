
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About RozpravaAI
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're a team of AI specialists and e-commerce experts dedicated to revolutionizing 
              customer service for online businesses. Our mission is to make advanced AI technology 
              accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded in 2024, RozpravaAI has quickly become a trusted partner for e-commerce 
              businesses looking to enhance their customer experience through intelligent automation.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To empower every e-commerce business with AI that feels natural, 
                  helpful, and truly understands their customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation in customer experience</li>
                  <li>• Reliability and trust</li>
                  <li>• Accessibility for all business sizes</li>
                  <li>• Continuous learning and improvement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Why Choose Us</h3>
                <p className="text-muted-foreground">
                  We combine cutting-edge AI technology with deep understanding of e-commerce 
                  needs, delivering solutions that drive real business results.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
