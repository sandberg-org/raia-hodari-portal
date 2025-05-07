
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the FAQ item structure
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Simulate a backend API call
const fetchFAQs = async (): Promise<FAQItem[]> => {
  // In a real app, this would be an actual API call
  // For now, we'll return mock data
  return [
    {
      id: 1,
      question: "How do I file a complaint online?",
      answer: "Visit the 'File a Complaint' section, fill in the required details about the incident, attach any supporting documents, and submit the form. You will receive a tracking number to follow up on your complaint."
    },
    {
      id: 2,
      question: "How long does it take to process a complaint?",
      answer: "Most complaints are processed within 7-14 working days, depending on the complexity of the case. You can check the status of your complaint using the tracking number provided."
    },
    {
      id: 3,
      question: "Can I check my traffic fines without visiting a police station?",
      answer: "Yes, you can check your traffic fines online by entering your vehicle registration number or driving license number in the 'Check Traffic Fines' section."
    },
    {
      id: 4,
      question: "What should I do if I lost my identification documents?",
      answer: "You should report the loss using our online portal and check the 'Lost Documents' section regularly to see if they have been found and submitted to any of our stations."
    },
    {
      id: 5,
      question: "How can I get a copy of my police abstract?",
      answer: "After filing a report, you can request for a police abstract by visiting the station where you filed your report with your tracking number or by downloading it from your account if you filed online."
    },
  ];
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex w-full justify-between items-center py-3 text-left font-medium text-police-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const { t } = useLanguage();
  
  // Use React Query for data fetching with caching
  const { data: faqs, isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFAQs,
    staleTime: Infinity, // For production, we would want to cache the FAQs indefinitely after the first load
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-police-800 mb-4">{t("faq.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {isLoading ? (
            <div className="text-center py-8">{t("faq.loading")}</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              {t("faq.error")}
            </div>
          ) : (
            faqs?.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
