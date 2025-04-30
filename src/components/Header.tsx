
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-police-300 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-police-300 transition-colors">Services</Link>
            <Link to="/track" className="hover:text-police-300 transition-colors">Track Complaint</Link>
            <Link to="/about" className="hover:text-police-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-police-300 transition-colors">Contact</Link>
            <Button variant="outline" size="sm" className="bg-police-700 text-white hover:bg-police-600 border-police-600">
              <User size={16} className="mr-2" /> Sign In
            </Button>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-police-700 animate-accordion-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" className="text-white py-2 border-b border-police-600" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-white py-2 border-b border-police-600" onClick={toggleMenu}>Services</Link>
            <Link to="/track" className="text-white py-2 border-b border-police-600" onClick={toggleMenu}>Track Complaint</Link>
            <Link to="/about" className="text-white py-2 border-b border-police-600" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-white py-2 border-b border-police-600" onClick={toggleMenu}>Contact</Link>
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
