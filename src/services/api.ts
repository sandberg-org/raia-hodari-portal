
import { Service } from "@/types/service";

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data for dynamic services
const dynamicServices: Service[] = [
  {
    id: "vehicle-registration",
    nameEn: "Vehicle Registration",
    nameFr: "Immatriculation de véhicule",
    nameSw: "Usajili wa Gari",
    descriptionEn: "Register a new vehicle or transfer ownership of an existing vehicle.",
    descriptionFr: "Enregistrer un nouveau véhicule ou transférer la propriété d'un véhicule existant.",
    descriptionSw: "Sajili gari mpya au hamisha umiliki wa gari lililopo.",
    scope: "licensing",
    link: "/vehicle-registration",
    identifiers: [{ type: "ID" }, { type: "VehicleRegistration" }],
    additionalFields: [
      { name: "purchaseDate", type: "date" },
      { name: "vehicleModel", type: "text" }
    ],
    isActive: true
  },
  {
    id: "accident-report",
    nameEn: "Accident Report",
    nameFr: "Rapport d'accident",
    nameSw: "Ripoti ya Ajali",
    descriptionEn: "File a police report for a vehicle accident.",
    descriptionFr: "Déposer un rapport de police pour un accident de véhicule.",
    descriptionSw: "Faili ripoti ya polisi kwa ajali ya gari.",
    scope: "traffic",
    link: "/accident-report",
    identifiers: [{ type: "ID" }, { type: "License" }],
    additionalFields: [
      { name: "accidentDate", type: "date" },
      { name: "accidentLocation", type: "text" },
      { name: "otherPartyDetails", type: "text" }
    ],
    isActive: true
  },
  {
    id: "background-check",
    nameEn: "Background Check",
    nameFr: "Vérification des antécédents",
    nameSw: "Ukaguzi wa Historia",
    descriptionEn: "Request a background check certificate for employment or visa purposes.",
    descriptionFr: "Demander un certificat de vérification des antécédents à des fins d'emploi ou de visa.",
    descriptionSw: "Omba cheti cha ukaguzi wa historia kwa madhumuni ya ajira au visa.",
    scope: "documents",
    link: "/background-check",
    identifiers: [{ type: "ID" }, { type: "Passport" }],
    additionalFields: [
      { name: "purpose", type: "text" },
      { name: "employerName", type: "text" }
    ],
    isActive: true
  },
  {
    id: "firearm-license",
    nameEn: "Firearm License Application",
    nameFr: "Demande de permis d'arme à feu",
    nameSw: "Maombi ya Leseni ya Silaha",
    descriptionEn: "Apply for a firearm license or renew an existing one.",
    descriptionFr: "Demander un permis d'arme à feu ou renouveler un permis existant.",
    descriptionSw: "Omba leseni ya silaha au fanya upya iliyopo.",
    scope: "licensing",
    link: "/firearm-license",
    identifiers: [{ type: "ID" }],
    additionalFields: [
      { name: "weaponType", type: "text" },
      { name: "reasonForApplication", type: "text" },
      { name: "previousLicenseNumber", type: "text" }
    ],
    isActive: false // This service is currently inactive
  }
];

export const fetchDynamicServices = async (): Promise<Service[]> => {
  await delay(800); // Simulate network delay
  return dynamicServices.filter(service => service.isActive);
};
