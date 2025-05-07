
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-police-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kenya Police Services</h3>
            <p className="text-sm text-gray-300">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-police-300 transition-colors">{t("footer.home")}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-police-300 transition-colors">{t("footer.services")}</Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-police-300 transition-colors">{t("footer.track")}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-police-300 transition-colors">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-police-300 transition-colors">{t("footer.contactUs")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>{t("footer.emergency")}</span>
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
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
