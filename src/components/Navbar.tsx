import { Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">AR Engineering</span>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Globe className="h-5 w-5" />
            <span>{language === "fr" ? "EN" : "FR"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};