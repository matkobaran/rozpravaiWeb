
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, User, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const LiveDemo = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t('demoGreeting') }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const demoResponses = [
    t('demoResponse1'),
    t('demoResponse2'),
    t('demoResponse3'),
    t('demoResponse4')
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      const assistantMessage: ChatMessage = { role: "assistant", content: randomResponse };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const resetDemo = () => {
    setMessages([
      { role: "assistant", content: t('demoGreeting') }
    ]);
    setInputValue("");
    setIsTyping(false);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-gray-50/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('tryAssistant')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('demoDescription')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="flex flex-col h-[500px]">
            <CardHeader className="pb-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="text-primary" size={20} />
                  {t('demoTitle')}
                </CardTitle>
                <Button variant="outline" size="sm" onClick={resetDemo}>
                  {t('resetDemo')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user" ? "bg-primary" : "bg-gray-200"
                      }`}>
                        {message.role === "user" ? (
                          <User size={16} className="text-primary-foreground" />
                        ) : (
                          <Bot size={16} className="text-gray-600" />
                        )}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-gray-100 text-gray-900"
                      }`}>
                        <p className="text-sm break-words">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('typeMessage')}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  disabled={isTyping}
                />
                <Button onClick={sendMessage} disabled={isTyping || !inputValue.trim()}>
                  <Send size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
