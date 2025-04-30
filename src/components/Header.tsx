
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, User, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "sw" | "fr">("en");
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: "en" | "sw" | "fr") => {
    setLanguage(lang);
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

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-police-700 flex items-center"
              onClick={() => {
                // Toggle dropdown in a real app
              }}
            >
              <Globe className="h-5 w-5 mr-1" />
              {language === "en" ? "English" : language === "sw" ? "Kiswahili" : "Français"}
            </Button>
            {/* This would be a dropdown menu in a real implementation */}
            <div className="absolute mt-1 right-0 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden">
              <div className="py-1">
                <button 
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>
                <button 
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => changeLanguage("sw")}
                >
                  Kiswahili
                </button>
                <button 
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => changeLanguage("fr")}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
          
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="bg-police-700 text-white hover:bg-police-600 border-police-600">
              <User size={16} className="mr-2" /> Sign In
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-police-700 animate-accordion-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Button variant="outline" size="sm" className="bg-police-600 text-white hover:bg-police-500 border-police-500">
              <User size={16} className="mr-2" /> Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
