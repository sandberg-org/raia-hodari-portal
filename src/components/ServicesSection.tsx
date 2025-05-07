
import ServiceCard from "./ServiceCard";
import { Search, FileText, MessageSquare, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-police-800 mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title={t("services.trafficFines")}
            description={t("services.trafficFines.desc")}
            icon={Search}
            link="/traffic-fines"
            buttonText={t("services.access")}
          />
          <ServiceCard
            title={t("services.lostDocuments")}
            description={t("services.lostDocuments.desc")}
            icon={FileText}
            link="/lost-documents"
            buttonText={t("services.access")}
          />
          <ServiceCard
            title={t("services.drivingResults")}
            description={t("services.drivingResults.desc")}
            icon={MessageSquare}
            link="/driving-results"
            buttonText={t("services.access")}
          />
          <ServiceCard
            title={t("services.trackService")}
            description={t("services.trackService.desc")}
            icon={User}
            link="/track-service"
            buttonText={t("services.access")}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
