
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const TrackLicense = () => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      setShowResults(true);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-police-100 p-4 rounded-full">
                    <Truck className="w-8 h-8 text-police-700" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">Track License Production</CardTitle>
                <CardDescription>
                  Track the status of your driving license production process after passing your exam and making payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="licenseNumber" className="block text-sm font-medium mb-1">
                      License Application Number or ID Number
                    </label>
                    <Input
                      id="licenseNumber"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      placeholder="Enter your license application number or ID number"
                      className="w-full"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-police-700 hover:bg-police-800"
                    disabled={isTracking}
                  >
                    {isTracking ? "Checking Status..." : "Track License"}
                  </Button>
                </form>
                
                {showResults && (
                  <div className="mt-8 border-t pt-6">
                    <h3 className="font-bold text-xl mb-4">License Production Status</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                        <div className="ml-3">
                          <p className="font-medium">Application Received</p>
                          <p className="text-sm text-gray-500">May 2, 2025 - 10:30 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                        <div className="ml-3">
                          <p className="font-medium">Application Approved</p>
                          <p className="text-sm text-gray-500">May 5, 2025 - 2:45 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">⋯</div>
                        <div className="ml-3">
                          <p className="font-medium">Printing in Progress</p>
                          <p className="text-sm text-gray-500">Estimated: May 9, 2025</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center opacity-50">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">-</div>
                        <div className="ml-3">
                          <p className="font-medium">Distribution to Local Center</p>
                          <p className="text-sm text-gray-500">Pending</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center opacity-50">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">-</div>
                        <div className="ml-3">
                          <p className="font-medium">Ready for Collection</p>
                          <p className="text-sm text-gray-500">Pending</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-sm text-yellow-800">
                        <strong>Estimated completion:</strong> May 16, 2025. You will receive an SMS when your license is ready for collection.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackLicense;
