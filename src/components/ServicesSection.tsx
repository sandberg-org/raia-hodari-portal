
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import DynamicServiceCard from "./DynamicServiceCard";
import { Search, FileText, MessageSquare, User, Truck, IdCard, TrafficCone, FilePlus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServices, useServicesByCategory } from "@/hooks/useServices";
import { Skeleton } from "./ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategory } from "@/types/service";

const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("traffic");
  const { data: allServices, isLoading } = useServices();
  const { data: categorizedServices } = useServicesByCategory(activeCategory);
  
  // Skeleton loader for services that are loading
  const ServiceSkeletons = () => (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg shadow">
          <div className="p-6">
            <Skeleton className="h-10 w-10 rounded-lg mb-4" />
            <Skeleton className="h-6 w-2/3 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-12 w-full" />
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
        
        <Tabs
          defaultValue="traffic"
          className="w-full max-w-5xl mx-auto mb-10"
          onValueChange={(value) => setActiveCategory(value as ServiceCategory)}
        >
          <div className="flex justify-center mb-6">
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="traffic" className="px-4 py-2 data-[state=active]:bg-police-50 data-[state=active]:text-police-800">
                <TrafficCone className="h-4 w-4 mr-2" />
                Traffic & Road Safety
              </TabsTrigger>
              <TabsTrigger value="driving" className="px-4 py-2 data-[state=active]:bg-police-50 data-[state=active]:text-police-800">
                <IdCard className="h-4 w-4 mr-2" />
                Driving Tests
              </TabsTrigger>
              <TabsTrigger value="documents" className="px-4 py-2 data-[state=active]:bg-police-50 data-[state=active]:text-police-800">
                <FileText className="h-4 w-4 mr-2" />
                Documents
              </TabsTrigger>
              <TabsTrigger value="licensing" className="px-4 py-2 data-[state=active]:bg-police-50 data-[state=active]:text-police-800">
                <FilePlus className="h-4 w-4 mr-2" />
                Licensing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="traffic" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title={t("services.trafficFines")}
                description={t("services.trafficFines.desc")}
                icon={Search}
                link="/traffic-fines"
                buttonText="Apply"
                userTypes={["Individual", "Business"]}
              />
              <ServiceCard
                title={t("services.fileComplaint")}
                description="File a complaint or dispute a traffic ticket with the police service"
                icon={FileText}
                link="/file-complaint"
                buttonText="Apply"
                userTypes={["Individual", "Business"]}
              />
              <ServiceCard
                title={t("services.trackComplaint")}
                description="Track the status of your filed complaints or disputes"
                icon={MessageSquare}
                link="/track"
                buttonText="Apply"
                userTypes={["Individual"]}
              />
              
              {/* Dynamic traffic services */}
              {isLoading ? (
                <ServiceSkeletons />
              ) : (
                categorizedServices?.map(service => (
                  <DynamicServiceCard key={service.id} service={service} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="driving" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title={t("services.drivingResults")}
                description={t("services.drivingResults.desc")}
                icon={Search}
                link="/driving-results"
                buttonText="Apply"
                userTypes={["Individual"]}
              />
              <ServiceCard
                title="Track License Production"
                description="Track the status of your driving license production process"
                icon={Truck}
                link="/track-license"
                buttonText="Apply"
                userTypes={["Individual"]}
              />
              
              {/* Dynamic driving services */}
              {isLoading ? (
                <ServiceSkeletons />
              ) : (
                categorizedServices?.map(service => (
                  <DynamicServiceCard key={service.id} service={service} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title={t("services.lostDocuments")}
                description={t("services.lostDocuments.desc")}
                icon={Search}
                link="/lost-documents"
                buttonText="Apply"
                userTypes={["Individual"]}
              />
              <ServiceCard
                title={t("services.tempDrivingLicense")}
                description={t("services.tempDrivingLicense.desc")}
                icon={IdCard}
                link="/temp-driving-license"
                buttonText="Apply"
                userTypes={["Individual"]}
              />
              
              {/* Dynamic document services */}
              {isLoading ? (
                <ServiceSkeletons />
              ) : (
                categorizedServices?.map(service => (
                  <DynamicServiceCard key={service.id} service={service} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="licensing" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <ServiceSkeletons />
              ) : (
                categorizedServices?.map(service => (
                  <DynamicServiceCard key={service.id} service={service} />
                ))
              )}
              {categorizedServices?.length === 0 && !isLoading && (
                <div className="col-span-full text-center py-10 text-gray-500">
                  No licensing services available at the moment.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
