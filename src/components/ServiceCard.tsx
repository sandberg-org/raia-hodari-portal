
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { LucideIcon, Info } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  buttonText?: string;
  userTypes?: string[];
}

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  buttonText = "Access Service",
  userTypes = ["Individual"] 
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="p-6">
        {/* Icon with background */}
        <div className="flex justify-between mb-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-police-700" />
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <Info size={20} />
          </button>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
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
      
      {/* Apply button */}
      <div className="mt-auto">
        <Button 
          asChild 
          className="w-full bg-green-50 hover:bg-green-100 text-green-700 rounded-none h-12"
          variant="ghost"
        >
          <Link to={link}>{buttonText}</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
