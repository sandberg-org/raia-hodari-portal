
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FileText, FilePlus, Truck, Info } from "lucide-react";
import { Service } from "@/types/service";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface DynamicServiceCardProps {
  service: Service;
}

const DynamicServiceCard = ({ service }: DynamicServiceCardProps) => {
  const { language, t } = useLanguage();

  // Get the name and description based on the current language
  const name = 
    language === "fr" ? service.nameFr : 
    language === "sw" ? service.nameSw : 
    service.nameEn;
  
  const description = 
    language === "fr" ? service.descriptionFr : 
    language === "sw" ? service.descriptionSw : 
    service.descriptionEn;
  
  // Select icon based on service id
  const getIcon = (id: string) => {
    if (id.includes("dl-duplicate") || id.includes("foreign-dl") || id.includes("correction")) {
      return <FilePlus className="h-6 w-6 text-police-700" />;
    } else if (id.includes("track")) {
      return <Truck className="h-6 w-6 text-police-700" />;
    } else {
      return <FileText className="h-6 w-6 text-police-700" />;
    }
  };

  // Determine who can use this service
  const userTypes = ["Individual"];
  if (service.scope === "licensing" || service.scope === "traffic") {
    userTypes.push("Business");
  }

  return (
    <Card className="overflow-hidden h-full">
      <div className="p-6">
        {/* Icon with background */}
        <div className="flex justify-between mb-4">
          <div className="bg-red-100 p-3 rounded-lg">
            {getIcon(service.id)}
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Info size={20} />
          </button>
        </div>
        
        {/* Service name and description */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        
        {/* User type badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {userTypes.map((type) => (
            <Badge 
              key={type} 
              variant="outline" 
              className="bg-gray-100 hover:bg-gray-100 text-gray-700 rounded-full py-1 px-3"
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Apply button - full width with different background */}
      <div className="mt-auto">
        <Button 
          asChild 
          className="w-full bg-green-50 hover:bg-green-100 text-green-700 rounded-none h-12"
          variant="ghost"
        >
          <Link to={service.link}>{t("services.access")}</Link>
        </Button>
      </div>
    </Card>
  );
};

export default DynamicServiceCard;
