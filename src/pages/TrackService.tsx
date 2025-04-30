
import { useState } from "react";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock service status data
const serviceStatusMock = {
  "SRV123456": {
    id: "SRV123456",
    type: "Traffic Fine Payment",
    status: "completed",
    steps: [
      { name: "Request Received", date: "15 Apr 2025", completed: true },
      { name: "Processing Payment", date: "16 Apr 2025", completed: true },
      { name: "Verification", date: "17 Apr 2025", completed: true },
      { name: "Completed", date: "18 Apr 2025", completed: true }
    ]
  },
  "SRV234567": {
    id: "SRV234567",
    type: "Lost Document Check",
    status: "processing",
    steps: [
      { name: "Request Received", date: "20 Apr 2025", completed: true },
      { name: "Document Search", date: "21 Apr 2025", completed: true },
      { name: "Verification", date: "Pending", completed: false },
      { name: "Completed", date: "Pending", completed: false }
    ]
  },
  "SRV345678": {
    id: "SRV345678",
    type: "Driving Test Results",
    status: "pending",
    steps: [
      { name: "Request Received", date: "25 Apr 2025", completed: true },
      { name: "Results Processing", date: "Pending", completed: false },
      { name: "Verification", date: "Pending", completed: false },
      { name: "Completed", date: "Pending", completed: false }
    ]
  }
};

const TrackService = () => {
  const [trackingId, setTrackingId] = useState("");
  const [serviceDetails, setServiceDetails] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const normalizedId = trackingId.trim();
    
    if (!normalizedId) {
      setError("Please enter a tracking ID");
      setServiceDetails(null);
      return;
    }

    if (serviceStatusMock[normalizedId]) {
      setServiceDetails(serviceStatusMock[normalizedId]);
      setError("");
    } else {
      setError("No service found with this tracking ID. Please check and try again.");
      setServiceDetails(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-police-800 mb-6 text-center">Track Your Service</h1>
          
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle>Service Tracking</CardTitle>
              <CardDescription>
                Enter your service tracking ID to check the status of your request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Input
                  placeholder="e.g. SRV123456"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSearch}
                  className="bg-police-700 hover:bg-police-800"
                >
                  Track
                </Button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <div className="text-sm text-gray-500 mt-4">
                <p>For testing, use these tracking IDs:</p>
                <ul className="list-disc pl-5">
                  <li>SRV123456 (Completed service)</li>
                  <li>SRV234567 (Processing service)</li>
                  <li>SRV345678 (Pending service)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {serviceDetails && (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>{serviceDetails.type}</CardTitle>
                <CardDescription>
                  Tracking ID: {serviceDetails.id}
                </CardDescription>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  serviceDetails.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  serviceDetails.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {serviceDetails.status.charAt(0).toUpperCase() + serviceDetails.status.slice(1)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                  <ol className="relative space-y-6">
                    {serviceDetails.steps.map((step: any, index: number) => (
                      <li key={index} className="ml-10">
                        <div className={`absolute -left-5 mt-1.5 h-10 w-10 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-600' : 'bg-gray-300'
                        }`}>
                          {step.completed && <Check className="h-5 w-5 text-white" />}
                        </div>
                        <div>
                          <h3 className="font-medium">{step.name}</h3>
                          <p className="text-sm text-gray-500">{step.date}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackService;
