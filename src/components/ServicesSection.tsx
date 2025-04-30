
import ServiceCard from "./ServiceCard";
import { Search, FileText, MessageSquare, User } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-police-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access a range of police services online, designed to serve you better and make your
            interaction with the Kenya Police more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Check Traffic Fines"
            description="View and pay your traffic violation fines online without visiting a police station."
            icon={Search}
            link="/traffic-fines"
          />
          <ServiceCard
            title="Check Lost Documents"
            description="Check if your lost documents have been found and submitted to any police station."
            icon={FileText}
            link="/lost-documents"
          />
          <ServiceCard
            title="Driving Test Results"
            description="View your driving test results online and download your certificate."
            icon={MessageSquare}
            link="/driving-results"
          />
          <ServiceCard
            title="Track Service Status"
            description="Check the status and progress of your submitted service requests."
            icon={User}
            link="/track-service"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
