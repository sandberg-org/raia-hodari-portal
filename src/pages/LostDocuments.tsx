
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const LostDocuments = () => {
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<"found" | "not_found" | null>(null);

  const handleSearch = () => {
    // Simulate a search with random results
    setSearched(true);
    // For demo purposes, randomly determine if document is found or not
    setResult(Math.random() > 0.5 ? "found" : "not_found");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-police-800 mb-6 text-center">Check Lost Documents</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Check if your lost documents have been found and submitted to any police station in Kenya.
          </p>
          
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>Document Search</CardTitle>
              <CardDescription>
                Enter your document details to check if it has been found
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="document-type">Document Type</Label>
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger id="document-type">
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national_id">National ID</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="driving_license">Driving License</SelectItem>
                    <SelectItem value="student_id">Student ID</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="document-number">Document Number</Label>
                <Input
                  id="document-number"
                  placeholder="Enter document number"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSearch} 
                className="w-full bg-police-700 hover:bg-police-800"
                disabled={!documentType || !documentNumber}
              >
                Search
              </Button>
            </CardFooter>
          </Card>
          
          {searched && result && (
            <Card className={`max-w-xl mx-auto mt-6 ${
              result === "found" ? "border-green-500" : "border-amber-500"
            }`}>
              <CardHeader>
                <CardTitle className={
                  result === "found" ? "text-green-700" : "text-amber-700"
                }>
                  {result === "found" ? "Document Found!" : "Document Not Found"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result === "found" ? (
                  <div>
                    <p>Good news! Your {documentType.replace("_", " ")} with document number {documentNumber} has been found.</p>
                    <div className="mt-4 p-4 bg-green-50 rounded-md">
                      <h3 className="font-medium">Collection Information</h3>
                      <p className="text-sm text-gray-700 mt-2">
                        Your document is available for collection at Central Police Station, Nairobi. 
                        Please bring a valid form of identification to verify ownership.
                      </p>
                      <p className="text-sm font-medium mt-2">
                        Reference Number: LDP{Math.floor(Math.random() * 1000000)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>Unfortunately, your {documentType.replace("_", " ")} with document number {documentNumber} has not been found in our system yet.</p>
                    <div className="mt-4 p-4 bg-amber-50 rounded-md">
                      <h3 className="font-medium">What to do next</h3>
                      <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                        <li>File a lost document report if you haven't already</li>
                        <li>Check back regularly as new documents are added to our system daily</li>
                        <li>Consider applying for a replacement document if necessary</li>
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LostDocuments;
