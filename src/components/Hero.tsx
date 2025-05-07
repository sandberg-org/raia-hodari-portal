
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gradient-to-b from-police-900 to-police-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-police-800 hover:bg-gray-100 text-lg py-6 px-8">
              <Link to="/traffic-fines">{t("hero.button.checkFines")}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-police-600 text-lg py-6 px-8">
              <Link to="/file-complaint">{t("hero.button.fileComplaint")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
