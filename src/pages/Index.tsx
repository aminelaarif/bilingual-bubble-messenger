import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MessageInput } from "@/components/MessageInput";
import { useLanguage } from "@/hooks/useLanguage";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  id: number;
  text: string;
  sent: boolean;
};

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sent: true,
    };
    
    setMessages(prev => [...prev, newMessage]);
    toast({
      title: t("messageSent"),
      duration: 2000,
    });

    // Simulate received message
    setTimeout(() => {
      const receivedMessage: Message = {
        id: Date.now() + 1,
        text: "Auto-reply: " + text,
        sent: false,
      };
      setMessages(prev => [...prev, receivedMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20 pb-4 px-4 max-w-3xl mx-auto">
        <div className="space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-bubble ${
                message.sent ? "message-bubble-sent" : "message-bubble-received"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        
        <MessageInput onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
};

export default Index;