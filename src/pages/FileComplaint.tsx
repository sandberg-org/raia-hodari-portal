
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileComplaint = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [complaintId, setComplaintId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    incidentType: "",
    incidentLocation: "",
    incidentDate: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Generate a random complaint ID
      const randomId = "KPS" + Math.floor(100000 + Math.random() * 900000);
      setComplaintId(randomId);
      
      setIsSubmitting(false);
      setStep(4);
      window.scrollTo(0, 0);
      
      toast({
        title: "Complaint Filed Successfully",
        description: `Your complaint has been filed with ID: ${randomId}`,
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-police-700 py-6 px-8 text-white">
              <h1 className="text-2xl font-bold flex items-center">
                <FileText className="mr-3" />
                File a Complaint
              </h1>
              <p className="mt-2 text-police-100">
                Report an incident or file a complaint with the Kenya Police Service
              </p>
            </div>

            {/* Progress indicators */}
            <div className="bg-police-50 px-8 py-4">
              <div className="flex justify-between">
                <div className={`text-sm font-medium ${step >= 1 ? "text-police-800" : "text-gray-400"}`}>
                  1. Personal Information
                </div>
                <div className={`text-sm font-medium ${step >= 2 ? "text-police-800" : "text-gray-400"}`}>
                  2. Incident Details
                </div>
                <div className={`text-sm font-medium ${step >= 3 ? "text-police-800" : "text-gray-400"}`}>
                  3. Review & Submit
                </div>
                <div className={`text-sm font-medium ${step >= 4 ? "text-police-800" : "text-gray-400"}`}>
                  4. Confirmation
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-police-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="p-8">
              {step === 1 && (
                <form>
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="idNumber">ID Number</Label>
                        <Input
                          id="idNumber"
                          name="idNumber"
                          placeholder="Enter your national ID number"
                          value={formData.idNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Residential Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        placeholder="Enter your residential address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button type="button" onClick={nextStep} className="bg-police-700 hover:bg-police-800">
                      Next Step
                    </Button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form>
                  <h2 className="text-xl font-semibold mb-6">Incident Details</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="incidentType">Type of Incident</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("incidentType", value)}
                        value={formData.incidentType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select incident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="theft">Theft</SelectItem>
                          <SelectItem value="assault">Assault</SelectItem>
                          <SelectItem value="fraud">Fraud</SelectItem>
                          <SelectItem value="vandalism">Vandalism</SelectItem>
                          <SelectItem value="harassment">Harassment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="incidentLocation">Location of Incident</Label>
                      <Input
                        id="incidentLocation"
                        name="incidentLocation"
                        placeholder="Where did the incident occur?"
                        value={formData.incidentLocation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="incidentDate">Date of Incident</Label>
                      <Input
                        id="incidentDate"
                        name="incidentDate"
                        type="date"
                        value={formData.incidentDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description of Incident</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Please provide a detailed description of the incident"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="min-h-[150px]"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous Step
                    </Button>
                    <Button type="button" onClick={nextStep} className="bg-police-700 hover:bg-police-800">
                      Next Step
                    </Button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
                  <div className="space-y-6">
                    <div className="bg-police-50 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-3">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Full Name</p>
                          <p className="font-medium">{formData.fullName}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">ID Number</p>
                          <p className="font-medium">{formData.idNumber}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Phone Number</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Email Address</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-gray-500">Residential Address</p>
                          <p className="font-medium">{formData.address}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-police-50 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-3">Incident Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Type of Incident</p>
                          <p className="font-medium">
                            {formData.incidentType.charAt(0).toUpperCase() + formData.incidentType.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Location of Incident</p>
                          <p className="font-medium">{formData.incidentLocation}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date of Incident</p>
                          <p className="font-medium">{formData.incidentDate}</p>
                        </div>
                      </div>
                      <div className="mt-4 text-sm">
                        <p className="text-gray-500">Description of Incident</p>
                        <p className="font-medium whitespace-pre-line">{formData.description}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-sm text-yellow-700">
                        Please review all information carefully before submitting. Once submitted, a tracking ID will be
                        provided to you for follow-up.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous Step
                    </Button>
                    <Button
                      type="submit"
                      className="bg-police-700 hover:bg-police-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Complaint"}
                    </Button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Complaint Filed Successfully</h2>
                  <p className="text-gray-600 mb-6">
                    Your complaint has been filed successfully. Please keep your tracking ID for future reference.
                  </p>
                  <div className="bg-police-100 rounded-lg p-4 mb-6 inline-block">
                    <p className="text-gray-600 text-sm">Tracking ID</p>
                    <p className="text-xl font-bold text-police-800">{complaintId}</p>
                  </div>
                  <div className="text-left bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p className="text-sm text-yellow-700">
                      A copy of your complaint details and tracking ID has been sent to your email address. You can use this
                      tracking ID to check the status of your complaint.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Button asChild className="bg-police-700 hover:bg-police-800">
                      <a href="/track">Track Your Complaint</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FileComplaint;
