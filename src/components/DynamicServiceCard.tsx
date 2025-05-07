
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Service } from "@/types/service";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "./ui/badge";

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
  
  // Map scope to badge variant
  const getBadgeVariant = (scope: string) => {
    switch(scope) {
      case "licensing": return "default";
      case "traffic": return "destructive";
      case "documents": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="service-card flex flex-col h-full bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between mb-4">
        <div className="bg-police-100 p-3 inline-flex rounded-full self-start">
          <FileText className="h-6 w-6 text-police-700" />
        </div>
        <Badge variant={getBadgeVariant(service.scope)} className="capitalize">
          {service.scope}
        </Badge>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.identifiers.map((id, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {id.type}
            </Badge>
          ))}
        </div>
        
        <Button asChild className="w-full bg-police-700 hover:bg-police-800">
          <Link to={service.link}>{t("services.access")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default DynamicServiceCard;
