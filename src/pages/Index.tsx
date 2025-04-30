
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
        
        {/* Featured Service - Traffic Fines */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-police-50 rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-2/3 p-8">
                  <div className="text-police-700 font-semibold text-lg mb-1">Most Popular Service</div>
                  <h2 className="text-3xl font-bold text-police-800 mb-4">Check & Pay Traffic Fines</h2>
                  <p className="text-gray-600 mb-6">
                    Easily check if you have any outstanding traffic fines and pay them online 
                    without having to visit a police station. Simply enter your ID number, 
                    driving license or vehicle registration number.
                  </p>
                  <div className="flex space-x-2">
                    <a href="/traffic-fines" 
                      className="bg-police-700 text-white px-6 py-2 rounded-md font-medium hover:bg-police-800 transition-colors">
                      Check Fines Now
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3 bg-police-100 flex items-center justify-center p-8">
                  <div className="text-police-800 text-center">
                    <div className="text-6xl font-bold mb-2">24/7</div>
                    <div className="text-lg">Online Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
