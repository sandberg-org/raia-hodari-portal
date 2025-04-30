
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-police-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kenya Police Services</h3>
            <p className="text-sm text-gray-300">
              Serving and protecting the citizens of Kenya with integrity, efficiency, and professionalism.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-police-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-police-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-police-300 transition-colors">Track Complaint</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-police-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-police-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>Emergency: 999 / 112</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@kenyapolice.go.ke</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Police Headquarters, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-police-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Kenya Police Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
