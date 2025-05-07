import { createContext, useContext, useState, ReactNode } from "react";

// Define the translation type
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Create translations for different languages
export const translations: Translations = {
  en: {
    // Hero section
    "hero.title": "Kenya Police Online Services",
    "hero.subtitle": "Check your traffic fines and access other police services easily",
    "hero.button.checkFines": "Check Traffic Fines",
    "hero.button.fileComplaint": "File a Complaint",
    
    // Services section
    "services.title": "Our Services",
    "services.subtitle": "Access a range of police services online, designed to serve you better and make your interaction with the Kenya Police more efficient.",
    "services.trafficFines": "Check Traffic Fines",
    "services.trafficFines.desc": "View and pay your traffic violation fines online without visiting a police station.",
    "services.lostDocuments": "Check Lost Documents",
    "services.lostDocuments.desc": "Check if your lost documents have been found and submitted to any police station.",
    "services.drivingResults": "Driving Test Results",
    "services.drivingResults.desc": "View your driving test results online and download your certificate.",
    "services.trackService": "Track Service Status",
    "services.trackService.desc": "Check the status and progress of your submitted service requests.",
    "services.tempDrivingLicense": "Temporary Driving License",
    "services.tempDrivingLicense.desc": "Get a 15-day temporary driving license certificate while waiting for your duplicate license.",
    "services.access": "Access Service",
    
    // Temporary Driving License page
    "tempLicense.title": "Temporary Driving License Certificate",
    "tempLicense.subtitle": "Get a 15-day temporary driving license certificate if you've applied for a duplicate license",
    "tempLicense.idLabel": "National ID Number",
    "tempLicense.idPlaceholder": "Enter your National ID number",
    "tempLicense.checkButton": "Check Eligibility",
    "tempLicense.downloadButton": "Download Certificate",
    "tempLicense.eligible": "You're eligible for a temporary driving license certificate",
    "tempLicense.notEligible": "You're not eligible for a temporary certificate",
    "tempLicense.notFound": "No application found for this ID",
    "tempLicense.applyFirst": "Please apply for a duplicate driving license first",
    "tempLicense.checking": "Checking eligibility...",
    "tempLicense.errorChecking": "Error checking eligibility. Please try again.",
    "tempLicense.certificateTitle": "Temporary Driving License Certificate",
    "tempLicense.validUntil": "Valid until",
    "tempLicense.certInfo": "This certificate confirms that the holder has applied for a duplicate driving license and is authorized to drive for a period of 15 days from the date of application.",
    
    // FAQ section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our online services and procedures.",
    "faq.loading": "Loading frequently asked questions...",
    "faq.error": "Failed to load FAQs. Please try again later.",
    
    // Statistics section
    "stats.title": "Our Impact",
    "stats.subtitle": "We are committed to serving and protecting the citizens of Kenya.",
    "stats.resolved": "Complaints Resolved",
    "stats.satisfaction": "Satisfaction Rate",
    "stats.counties": "Counties Covered",
    "stats.service": "Hours of Service",
    
    // Footer
    "footer.tagline": "Serving and protecting the citizens of Kenya with integrity, efficiency, and professionalism.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.home": "Home",
    "footer.services": "Services",
    "footer.track": "Track Complaint",
    "footer.about": "About Us",
    "footer.contactUs": "Contact",
    "footer.emergency": "Emergency: 999 / 112",
    "footer.rights": "© 2025 Kenya Police Service. All rights reserved."
  },
  sw: {
    // Hero section
    "hero.title": "Huduma za Polisi Kenya Mtandaoni",
    "hero.subtitle": "Angalia faini za trafiki na upate huduma zingine za polisi kwa urahisi",
    "hero.button.checkFines": "Angalia Faini za Trafiki",
    "hero.button.fileComplaint": "Wasilisha Malalamiko",
    
    // Services section
    "services.title": "Huduma Zetu",
    "services.subtitle": "Pata huduma mbalimbali za polisi mtandaoni, zilizoundwa kukuhudumia vyema na kurahisisha uhusiano wako na Polisi wa Kenya.",
    "services.trafficFines": "Angalia Faini za Trafiki",
    "services.trafficFines.desc": "Tazama na lipa faini za ukiukaji wa trafiki mtandaoni bila kutembelea kituo cha polisi.",
    "services.lostDocuments": "Angalia Hati Zilizopotea",
    "services.lostDocuments.desc": "Angalia kama hati zako zilizopotea zimepatikana na kuwasilishwa katika kituo chochote cha polisi.",
    "services.drivingResults": "Matokeo ya Mtihani wa Udereva",
    "services.drivingResults.desc": "Tazama matokeo ya mtihani wako wa udereva mtandaoni na upakue cheti chako.",
    "services.trackService": "Fuatilia Hali ya Huduma",
    "services.trackService.desc": "Angalia hali na maendeleo ya maombi yako ya huduma yaliyowasilishwa.",
    "services.tempDrivingLicense": "Leseni ya Udereva ya Muda",
    "services.tempDrivingLicense.desc": "Pata cheti cha leseni ya udereva ya siku 15 ikiwa umeomba leseni mbadala.",
    "services.access": "Pata Huduma",
    
    // Temporary Driving License page
    "tempLicense.title": "Cheti cha Leseni ya Udereva ya Muda",
    "tempLicense.subtitle": "Pata cheti cha leseni ya udereva ya siku 15 ikiwa umeomba leseni mbadala",
    "tempLicense.idLabel": "Nambari ya Kitambulisho",
    "tempLicense.idPlaceholder": "Ingiza nambari ya kitambulisho chako",
    "tempLicense.checkButton": "Angalia Ustahiki",
    "tempLicense.downloadButton": "Pakua Cheti",
    "tempLicense.eligible": "Unastahiki kupata cheti cha leseni ya udereva ya muda",
    "tempLicense.notEligible": "Hustahiki kupata cheti cha muda",
    "tempLicense.notFound": "Hakuna maombi yaliyopatikana kwa kitambulisho hiki",
    "tempLicense.applyFirst": "Tafadhali anza kuomba leseni ya udereva mbadala",
    "tempLicense.checking": "Inakagua ustahiki...",
    "tempLicense.errorChecking": "Hitilafu katika kukagua ustahiki. Tafadhali jaribu tena.",
    "tempLicense.certificateTitle": "Cheti cha Leseni ya Udereva ya Muda",
    "tempLicense.validUntil": "Halali mpaka",
    "tempLicense.certInfo": "Cheti hiki kinathibitisha kuwa mmiliki ameomba leseni ya udereva mbadala na ameruhusiwa kuendesha kwa kipindi cha siku 15 kuanzia tarehe ya maombi.",
    
    // FAQ section
    "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
    "faq.subtitle": "Pata majibu ya maswali ya kawaida kuhusu huduma zetu za mtandaoni na taratibu.",
    "faq.loading": "Inapakia maswali yanayoulizwa mara kwa mara...",
    "faq.error": "Imeshindwa kupakia Maswali. Tafadhali jaribu tena baadaye.",
    
    // Statistics section
    "stats.title": "Athari Yetu",
    "stats.subtitle": "Tumejitolea kutumikia na kulinda raia wa Kenya.",
    "stats.resolved": "Malalamiko Yaliyotatuliwa",
    "stats.satisfaction": "Kiwango cha Kuridhika",
    "stats.counties": "Kaunti Zilizoshughulikiwa",
    "stats.service": "Masaa ya Huduma",
    
    // Footer
    "footer.tagline": "Kutumikia na kulinda raia wa Kenya kwa uadilifu, ufanisi, na utaalamu.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.contact": "Wasiliana Nasi",
    "footer.home": "Nyumbani",
    "footer.services": "Huduma",
    "footer.track": "Fuatilia Malalamiko",
    "footer.about": "Kuhusu Sisi",
    "footer.contactUs": "Wasiliana",
    "footer.emergency": "Dharura: 999 / 112",
    "footer.rights": "© 2025 Huduma za Polisi Kenya. Haki zote zimehifadhiwa."
  },
  fr: {
    // Hero section
    "hero.title": "Services en Ligne de la Police du Kenya",
    "hero.subtitle": "Vérifiez vos amendes routières et accédez facilement à d'autres services de police",
    "hero.button.checkFines": "Vérifier les Amendes",
    "hero.button.fileComplaint": "Déposer une Plainte",
    
    // Services section
    "services.title": "Nos Services",
    "services.subtitle": "Accédez à une gamme de services de police en ligne, conçus pour mieux vous servir et rendre votre interaction avec la Police du Kenya plus efficace.",
    "services.trafficFines": "Vérifier les Amendes",
    "services.trafficFines.desc": "Consultez et payez vos amendes pour infractions routières en ligne sans visiter un poste de police.",
    "services.lostDocuments": "Vérifier les Documents Perdus",
    "services.lostDocuments.desc": "Vérifiez si vos documents perdus ont été trouvés et déposés dans un poste de police.",
    "services.drivingResults": "Résultats du Test de Conduite",
    "services.drivingResults.desc": "Consultez vos résultats de test de conduite en ligne et téléchargez votre certificat.",
    "services.trackService": "Suivre l'État du Service",
    "services.trackService.desc": "Vérifiez l'état et la progression de vos demandes de service soumises.",
    "services.tempDrivingLicense": "Permis de Conduire Temporaire",
    "services.tempDrivingLicense.desc": "Obtenez un certificat de permis de conduire temporaire de 15 jours en attendant votre duplicata.",
    "services.access": "Accéder au Service",
    
    // Temporary Driving License page
    "tempLicense.title": "Certificat de Permis de Conduire Temporaire",
    "tempLicense.subtitle": "Obtenez un certificat de permis de conduire temporaire de 15 jours si vous avez demandé un duplicata",
    "tempLicense.idLabel": "Numéro d'Identité Nationale",
    "tempLicense.idPlaceholder": "Entrez votre numéro d'identité nationale",
    "tempLicense.checkButton": "Vérifier l'Éligibilité",
    "tempLicense.downloadButton": "Télécharger le Certificat",
    "tempLicense.eligible": "Vous êtes éligible pour un certificat de permis de conduire temporaire",
    "tempLicense.notEligible": "Vous n'êtes pas éligible pour un certificat temporaire",
    "tempLicense.notFound": "Aucune demande trouvée pour cette identité",
    "tempLicense.applyFirst": "Veuillez d'abord demander un duplicata de permis de conduite",
    "tempLicense.checking": "Vérification de l'éligibilité...",
    "tempLicense.errorChecking": "Erreur lors de la vérification de l'éligibilité. Veuillez réessayer.",
    "tempLicense.certificateTitle": "Certificat de Permis de Conduire Temporaire",
    "tempLicense.validUntil": "Valable jusqu'au",
    "tempLicense.certInfo": "Ce certificat confirme que le titulaire a demandé un duplicata de permis de conduite et est autorisé à conduire pendant une période de 15 jours à partir de la date de demande.",
    
    // FAQ section
    "faq.title": "Questions Fréquemment Posées",
    "faq.subtitle": "Trouvez des réponses aux questions courantes sur nos services en ligne et nos procédures.",
    "faq.loading": "Chargement des questions fréquemment posées...",
    "faq.error": "Échec du chargement des FAQ. Veuillez réessayer plus tard.",
    
    // Statistics section
    "stats.title": "Notre Impact",
    "stats.subtitle": "Nous nous engageons à servir et à protéger les citoyens du Kenya.",
    "stats.resolved": "Plaintes Résolues",
    "stats.satisfaction": "Taux de Satisfaction",
    "stats.counties": "Comtés Couverts",
    "stats.service": "Heures de Service",
    
    // Footer
    "footer.tagline": "Servir et protéger les citoyens du Kenya avec intégrité, efficacité et professionnalisme.",
    "footer.quickLinks": "Liens Rapides",
    "footer.contact": "Contactez-nous",
    "footer.home": "Accueil",
    "footer.services": "Services",
    "footer.track": "Suivre une Plainte",
    "footer.about": "À Propos",
    "footer.contactUs": "Contact",
    "footer.emergency": "Urgence: 999 / 112",
    "footer.rights": "© 2025 Service de Police du Kenya. Tous droits réservés."
  }
};

// Define types
export type Language = "en" | "sw" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
