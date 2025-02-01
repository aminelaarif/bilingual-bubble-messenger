import { Globe, MessageCircle, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">AR Engineering</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              className="flex items-center space-x-2 hover:bg-muted"
            >
              <Globe className="h-5 w-5" />
              <span>{language === "fr" ? "EN" : "FR"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};