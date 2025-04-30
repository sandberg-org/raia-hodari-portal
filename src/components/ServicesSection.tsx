
import ServiceCard from "./ServiceCard";
import { FileText, Search, MessageSquare, User } from "lucide-react";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="File a Complaint"
            description="Report incidents or file complaints online without visiting a police station."
            icon={FileText}
            link="/file-complaint"
          />
          <ServiceCard
            title="Check Traffic Fines"
            description="View and pay your traffic violation fines online."
            icon={Search}
            link="/traffic-fines"
          />
          <ServiceCard
            title="Replace Lost License"
            description="Request a duplicate license if yours is lost or damaged."
            icon={MessageSquare}
            link="/replace-license"
          />
          <ServiceCard
            title="Track Complaints"
            description="Check the status of your previously filed complaints."
            icon={User}
            link="/track"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
