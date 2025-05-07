
import ServiceCard from "./ServiceCard";
import DynamicServiceCard from "./DynamicServiceCard";
import { Search, FileText, MessageSquare, User, IdCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServices } from "@/hooks/useServices";
import { Skeleton } from "./ui/skeleton";

const ServicesSection = () => {
  const { t } = useLanguage();
  const { data: dynamicServices, isLoading, error } = useServices();
  
  // Skeleton loader for services that are loading
  const ServiceSkeletons = () => (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow-md">
          <Skeleton className="h-8 w-8 rounded-full mb-4" />
          <Skeleton className="h-6 w-2/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-6" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </>
  );
  
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
          {/* Static services */}
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
          <ServiceCard
            title={t("services.tempDrivingLicense")}
            description={t("services.tempDrivingLicense.desc")}
            icon={IdCard}
            link="/temp-driving-license"
            buttonText={t("services.access")}
          />
          
          {/* Dynamic services section */}
          {isLoading ? (
            <ServiceSkeletons />
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Error loading services. Please try again later.</p>
            </div>
          ) : (
            dynamicServices?.map(service => (
              <DynamicServiceCard key={service.id} service={service} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
