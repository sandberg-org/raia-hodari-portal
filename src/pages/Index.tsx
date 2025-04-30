
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <FAQSection />
        
        {/* Call to Action Section */}
        <section className="py-16 bg-police-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our emergency response team is available 24/7. For emergencies, call our hotline numbers.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="text-3xl font-bold bg-white text-police-800 px-6 py-3 rounded-lg">
                999
              </div>
              <div className="text-3xl font-bold">or</div>
              <div className="text-3xl font-bold bg-white text-police-800 px-6 py-3 rounded-lg">
                112
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
