
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
    category: "licensing",
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
    category: "traffic",
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
    category: "documents",
    link: "/background-check",
    identifiers: [{ type: "ID" }, { type: "Passport" }],
    additionalFields: [
      { name: "purpose", type: "text" },
      { name: "employerName", type: "text" }
    ],
    isActive: true
  },
  {
    id: "dl-duplicate",
    nameEn: "DL Duplicate",
    nameFr: "Duplicata de Permis de Conduire",
    nameSw: "Nakala Mbadala ya Leseni ya Udereva",
    descriptionEn: "Apply for a duplicate driving license in case you lost the original.",
    descriptionFr: "Demander un duplicata de permis de conduire en cas de perte de l'original.",
    descriptionSw: "Omba nakala mbadala ya leseni ya udereva ikiwa umepoteza ya awali.",
    scope: "licensing",
    category: "licensing",
    link: "/dl-duplicate",
    identifiers: [{ type: "ID" }],
    additionalFields: [
      { name: "originalLicenseNumber", type: "text" },
      { name: "issueDate", type: "date" }
    ],
    isActive: true
  },
  {
    id: "foreign-dl-exchange",
    nameEn: "Foreign DL Exchange",
    nameFr: "Échange de Permis de Conduire Étranger",
    nameSw: "Kubadilishana Leseni ya Udereva ya Kigeni",
    descriptionEn: "Exchange your foreign driving license for a local one.",
    descriptionFr: "Échangez votre permis de conduire étranger contre un permis local.",
    descriptionSw: "Badilisha leseni yako ya udereva ya kigeni kwa ya ndani.",
    scope: "licensing",
    category: "licensing",
    link: "/foreign-dl-exchange",
    identifiers: [{ type: "ID" }, { type: "Passport" }],
    additionalFields: [
      { name: "countryOfIssue", type: "text" },
      { name: "foreignLicenseNumber", type: "text" },
      { name: "expiryDate", type: "date" }
    ],
    isActive: true
  },
  {
    id: "pdl-correction",
    nameEn: "Correction of PDL",
    nameFr: "Correction de Permis Provisoire",
    nameSw: "Marekebisho ya Leseni ya Udereva ya Muda",
    descriptionEn: "Correct information on your provisional driving license.",
    descriptionFr: "Corriger les informations sur votre permis de conduire provisoire.",
    descriptionSw: "Rekebisha taarifa kwenye leseni yako ya udereva ya muda.",
    scope: "licensing",
    category: "licensing",
    link: "/pdl-correction",
    identifiers: [{ type: "ID" }, { type: "License" }],
    additionalFields: [
      { name: "fieldToCorrect", type: "text" },
      { name: "correctInformation", type: "text" }
    ],
    isActive: true
  },
  {
    id: "dl-correction",
    nameEn: "Correction of DL",
    nameFr: "Correction de Permis de Conduire",
    nameSw: "Marekebisho ya Leseni ya Udereva",
    descriptionEn: "Correct information on your driving license.",
    descriptionFr: "Corriger les informations sur votre permis de conduire.",
    descriptionSw: "Rekebisha taarifa kwenye leseni yako ya udereva.",
    scope: "licensing",
    category: "licensing",
    link: "/dl-correction",
    identifiers: [{ type: "ID" }, { type: "License" }],
    additionalFields: [
      { name: "fieldToCorrect", type: "text" },
      { name: "correctInformation", type: "text" }
    ],
    isActive: true
  }
];

export const fetchDynamicServices = async (): Promise<Service[]> => {
  await delay(800); // Simulate network delay
  return dynamicServices.filter(service => service.isActive);
};

