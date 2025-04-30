
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex w-full justify-between items-center py-2 text-left font-medium text-police-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <HelpCircle className="h-5 w-5 text-police-600 mr-2" />
          <span>{question}</span>
        </div>
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
        <div className="mt-2 pl-7">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I file a complaint online?",
      answer: "Visit the 'File a Complaint' section, fill in the required details about the incident, attach any supporting documents, and submit the form. You will receive a tracking number to follow up on your complaint."
    },
    {
      question: "How long does it take to process a complaint?",
      answer: "Most complaints are processed within 7-14 working days, depending on the complexity of the case. You can check the status of your complaint using the tracking number provided."
    },
    {
      question: "Can I check my traffic fines without visiting a police station?",
      answer: "Yes, you can check your traffic fines online by entering your vehicle registration number or driving license number in the 'Check Traffic Fines' section."
    },
    {
      question: "What should I do if I lost my identification documents?",
      answer: "You should report the loss using our online portal and check the 'Lost Documents' section regularly to see if they have been found and submitted to any of our stations."
    },
    {
      question: "How can I get a copy of my police abstract?",
      answer: "After filing a report, you can request for a police abstract by visiting the station where you filed your report with your tracking number or by downloading it from your account if you filed online."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-police-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our online services and procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
