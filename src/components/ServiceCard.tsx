
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  buttonText?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, buttonText = "Access Service" }: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col h-full">
      <div className="bg-police-100 p-4 inline-flex rounded-full self-start mb-4">
        <Icon className="h-8 w-8 text-police-700" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Button asChild className="w-full bg-police-700 hover:bg-police-800">
        <Link to={link}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
