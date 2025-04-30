
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Fine {
  id: string;
  date: string;
  location: string;
  offense: string;
  amount: number;
  paid: boolean;
  dueDate: string;
}

const TrafficFines = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [fines, setFines] = useState<Fine[] | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery) return;
    
    setIsSearching(true);
    setSearchPerformed(true);
    
    // Simulate API call
    setTimeout(() => {
      if (searchQuery.length >= 5) {
        // Generate sample fines for demo
        const sampleFines: Fine[] = [
          {
            id: "TF" + Math.floor(100000 + Math.random() * 900000),
            date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            location: "Mombasa Road, Nairobi",
            offense: "Exceeding speed limit",
            amount: 5000,
            paid: Math.random() > 0.5,
            dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()
          }
        ];
        
        // 50% chance to have a second fine
        if (Math.random() > 0.5) {
          sampleFines.push({
            id: "TF" + Math.floor(100000 + Math.random() * 900000),
            date: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            location: "Uhuru Highway, Nairobi",
            offense: "Running a red light",
            amount: 3000,
            paid: false,
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
          });
        }
        
        setFines(sampleFines);
      } else {
        setFines([]);
      }
      
      setIsSearching(false);
    }, 1500);
  };

  const calculateTotalDue = () => {
    if (!fines) return 0;
    return fines
      .filter(fine => !fine.paid)
      .reduce((total, fine) => total + fine.amount, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="bg-police-700 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Search className="mr-3" />
                  Check Traffic Fines
                </CardTitle>
                <CardDescription className="text-police-100">
                  Check and pay for outstanding traffic violation fines
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSearch}>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium">Enter one of the following:</p>
                      <Input
                        placeholder="ID Number / Driving License / Vehicle Registration"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-grow"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-police-700 hover:bg-police-800"
                      disabled={isSearching}
                    >
                      {isSearching ? "Searching..." : "Check Fines"}
                    </Button>
                  </div>
                </form>

                {searchPerformed && fines !== null && (
                  <div className="mt-8">
                    {fines.length === 0 ? (
                      <Alert className="bg-green-50 text-green-800 border border-green-200">
                        <AlertTitle className="flex items-center">
                          No Traffic Fines Found
                        </AlertTitle>
                        <AlertDescription>
                          No outstanding traffic fines were found for the provided information.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium mb-4">Traffic Fines Found</h3>
                        <div className="space-y-4">
                          {fines.map((fine) => (
                            <div 
                              key={fine.id} 
                              className={`border rounded-md p-4 ${!fine.paid ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}
                            >
                              <div className="flex justify-between mb-2">
                                <div className="font-medium">{fine.offense}</div>
                                <div className={`text-sm font-medium px-2 py-1 rounded ${fine.paid ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                  {fine.paid ? "Paid" : "Unpaid"}
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-gray-500">Fine ID</p>
                                  <p>{fine.id}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Date</p>
                                  <p>{fine.date}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Location</p>
                                  <p>{fine.location}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Amount</p>
                                  <p className="font-medium">KSh {fine.amount.toLocaleString()}</p>
                                </div>
                                {!fine.paid && (
                                  <div>
                                    <p className="text-gray-500">Due Date</p>
                                    <p>{fine.dueDate}</p>
                                  </div>
                                )}
                              </div>
                              {!fine.paid && (
                                <div className="mt-3">
                                  <Button 
                                    size="sm" 
                                    className="w-full bg-police-700 hover:bg-police-800"
                                  >
                                    Pay Now
                                  </Button>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {calculateTotalDue() > 0 && (
                          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium">Total Amount Due:</p>
                                <p className="text-lg font-bold text-red-600">KSh {calculateTotalDue().toLocaleString()}</p>
                              </div>
                              <Button className="bg-police-700 hover:bg-police-800">
                                Pay All Fines
                              </Button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex-col items-start border-t pt-6">
                <h4 className="font-medium mb-2">Important Information</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>Traffic fines must be paid within 14 days from the date of issue.</li>
                  <li>Late payments may incur additional penalties.</li>
                  <li>You can pay your fines online, via M-Pesa, or at any Kenya Police station.</li>
                  <li>For disputes, please visit your nearest traffic police department with your fine receipt.</li>
                </ul>
              </CardFooter>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Multiple ways to pay your traffic fines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4 text-center">
                    <h3 className="font-medium mb-2">M-Pesa</h3>
                    <p className="text-sm text-gray-600">Paybill: 222111</p>
                    <p className="text-sm text-gray-600">Account: Fine ID</p>
                  </div>
                  <div className="border rounded-md p-4 text-center">
                    <h3 className="font-medium mb-2">Bank Transfer</h3>
                    <p className="text-sm text-gray-600">Account: 001122334455</p>
                    <p className="text-sm text-gray-600">Bank: Kenya National Bank</p>
                  </div>
                  <div className="border rounded-md p-4 text-center">
                    <h3 className="font-medium mb-2">Police Station</h3>
                    <p className="text-sm text-gray-600">Visit any Police station</p>
                    <p className="text-sm text-gray-600">with your Fine ID</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrafficFines;
