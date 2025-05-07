
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    console.log(`Language changed to ${lang}`);
  };

  // Language display names
  const languageNames: Record<Language, string> = {
    en: "English",
    sw: "Kiswahili",
    fr: "Français",
  };

  return (
    <header className="bg-police-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="text-police-800 font-bold text-xl">KP</div>
          </div>
          <div className="font-bold text-xl hidden sm:block">Kenya Police Services</div>
        </Link>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-police-700 flex items-center"
              >
                <Globe className="h-5 w-5 mr-2" />
                {languageNames[language]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem 
                onClick={() => changeLanguage("en")}
                className="cursor-pointer"
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => changeLanguage("sw")}
                className="cursor-pointer"
              >
                Kiswahili
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => changeLanguage("fr")}
                className="cursor-pointer"
              >
                Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white ml-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu - simplified without sign in */}
      {isMobile && isMenuOpen && (
        <div className="bg-police-700 animate-accordion-down">
          <div className="container mx-auto px-4 py-3">
            {/* Mobile menu content if needed */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
