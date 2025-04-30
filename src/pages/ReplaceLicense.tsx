
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReplaceLicense = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    licenseNumber: "",
    phone: "",
    email: "",
    reason: "",
    deliveryMethod: "",
    address: "",
    policeStation: "",
    paymentMethod: "",
  });
  const [applicationId, setApplicationId] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // For demo, just store file names
      const newFiles = [...uploadedFiles];
      for (let i = 0; i < e.target.files.length; i++) {
        newFiles.push(e.target.files[i].name);
      }
      setUploadedFiles(newFiles);
      
      toast({
        title: "File Uploaded",
        description: `${e.target.files.length} file(s) successfully uploaded.`,
      });
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
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
      // Generate a random application ID
      const randomId = "DL" + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(randomId);
      
      setIsSubmitting(false);
      setStep(4);
      window.scrollTo(0, 0);
      
      toast({
        title: "Application Submitted",
        description: `Your application has been submitted with ID: ${randomId}`,
      });
    }, 2000);
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
                  <FileText className="mr-3" />
                  Replace Lost License
                </CardTitle>
                <CardDescription className="text-police-100">
                  Apply for a duplicate driving license if yours is lost or damaged
                </CardDescription>
              </CardHeader>

              {/* Progress indicators */}
              <div className="bg-police-50 px-8 py-4">
                <div className="flex justify-between">
                  <div className={`text-sm font-medium ${step >= 1 ? "text-police-800" : "text-gray-400"}`}>
                    1. Personal Details
                  </div>
                  <div className={`text-sm font-medium ${step >= 2 ? "text-police-800" : "text-gray-400"}`}>
                    2. Documents
                  </div>
                  <div className={`text-sm font-medium ${step >= 3 ? "text-police-800" : "text-gray-400"}`}>
                    3. Review & Pay
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

              <CardContent className="p-6">
                {step === 1 && (
                  <form>
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

                      <div>
                        <Label htmlFor="licenseNumber">License Number (if known)</Label>
                        <Input
                          id="licenseNumber"
                          name="licenseNumber"
                          placeholder="Enter your driving license number if you know it"
                          value={formData.licenseNumber}
                          onChange={handleChange}
                        />
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
                        <Label htmlFor="reason">Reason for Replacement</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("reason", value)}
                          value={formData.reason}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select reason for replacement" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lost">Lost License</SelectItem>
                            <SelectItem value="stolen">Stolen License</SelectItem>
                            <SelectItem value="damaged">Damaged License</SelectItem>
                            <SelectItem value="expired">Expired License</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="deliveryMethod">Delivery Method</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("deliveryMethod", value)}
                          value={formData.deliveryMethod}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select delivery method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="deliver">Deliver to my address</SelectItem>
                            <SelectItem value="pickup">Pickup from police station</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {formData.deliveryMethod === "deliver" && (
                        <div>
                          <Label htmlFor="address">Delivery Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            placeholder="Enter your full delivery address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {formData.deliveryMethod === "pickup" && (
                        <div>
                          <Label htmlFor="policeStation">Select Pickup Police Station</Label>
                          <Select 
                            onValueChange={(value) => handleSelectChange("policeStation", value)}
                            value={formData.policeStation}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select police station" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="central">Central Police Station, Nairobi</SelectItem>
                              <SelectItem value="kilimani">Kilimani Police Station, Nairobi</SelectItem>
                              <SelectItem value="mombasa">Central Police Station, Mombasa</SelectItem>
                              <SelectItem value="kisumu">Central Police Station, Kisumu</SelectItem>
                              <SelectItem value="eldoret">Central Police Station, Eldoret</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-police-700 hover:bg-police-800"
                      >
                        Next Step
                      </Button>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form>
                    <div className="space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                        <p className="text-sm text-blue-700">
                          Please upload clear copies of the following documents to process your application:
                        </p>
                      </div>

                      <div className="border-b pb-6">
                        <Label className="mb-2 block">National ID (Required)</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => document.getElementById("id-upload")?.click()}
                          >
                            <Upload size={16} />
                            Upload ID
                          </Button>
                          <Input 
                            id="id-upload" 
                            type="file" 
                            className="hidden" 
                            accept="image/*, application/pdf"
                            onChange={handleFileChange}
                          />
                          <span className="text-sm text-gray-500">
                            JPG, PNG or PDF, max 2MB
                          </span>
                        </div>
                      </div>

                      <div className="border-b pb-6">
                        <Label className="mb-2 block">Police Abstract (Required for lost/stolen)</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => document.getElementById("abstract-upload")?.click()}
                          >
                            <Upload size={16} />
                            Upload Abstract
                          </Button>
                          <Input 
                            id="abstract-upload" 
                            type="file" 
                            className="hidden" 
                            accept="image/*, application/pdf"
                            onChange={handleFileChange} 
                          />
                          <span className="text-sm text-gray-500">
                            JPG, PNG or PDF, max 2MB
                          </span>
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Passport Photo (Required)</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-2"
                            onClick={() => document.getElementById("photo-upload")?.click()}
                          >
                            <Upload size={16} />
                            Upload Photo
                          </Button>
                          <Input 
                            id="photo-upload" 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={handleFileChange} 
                          />
                          <span className="text-sm text-gray-500">
                            Recent passport photo, JPG or PNG, max 1MB
                          </span>
                        </div>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-6">
                          <h3 className="font-medium mb-3">Uploaded Files:</h3>
                          <ul className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                                <span className="text-sm truncate max-w-[80%]">{file}</span>
                                <Button 
                                  type="button" 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => removeFile(index)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  Remove
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-police-700 hover:bg-police-800"
                        disabled={uploadedFiles.length < 2}
                      >
                        Next Step
                      </Button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="bg-police-50 p-4 rounded-md">
                        <h3 className="text-lg font-medium mb-3">Application Summary</h3>
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
                            <p className="text-gray-500">License Number</p>
                            <p className="font-medium">{formData.licenseNumber || "Not provided"}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Reason for Replacement</p>
                            <p className="font-medium">
                              {formData.reason ? formData.reason.charAt(0).toUpperCase() + formData.reason.slice(1) : "Not selected"}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Delivery Method</p>
                            <p className="font-medium">
                              {formData.deliveryMethod === "deliver" ? "Deliver to address" : "Pickup from police station"}
                            </p>
                          </div>
                          {formData.deliveryMethod === "deliver" && (
                            <div>
                              <p className="text-gray-500">Delivery Address</p>
                              <p className="font-medium">{formData.address}</p>
                            </div>
                          )}
                          {formData.deliveryMethod === "pickup" && (
                            <div>
                              <p className="text-gray-500">Pickup Location</p>
                              <p className="font-medium">
                                {formData.policeStation === "central" && "Central Police Station, Nairobi"}
                                {formData.policeStation === "kilimani" && "Kilimani Police Station, Nairobi"}
                                {formData.policeStation === "mombasa" && "Central Police Station, Mombasa"}
                                {formData.policeStation === "kisumu" && "Central Police Station, Kisumu"}
                                {formData.policeStation === "eldoret" && "Central Police Station, Eldoret"}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="mt-4">
                          <p className="text-gray-500 text-sm">Uploaded Documents</p>
                          <ul className="list-disc list-inside text-sm mt-1">
                            {uploadedFiles.map((file, index) => (
                              <li key={index}>{file}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                          <p className="text-sm text-yellow-700">
                            The fee for replacing a driving license is <span className="font-bold">KSh 3,000</span>. 
                            Please select your preferred payment method.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <Label>Select Payment Method</Label>
                          <Select 
                            onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                            value={formData.paymentMethod}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mpesa">M-Pesa</SelectItem>
                              <SelectItem value="card">Credit/Debit Card</SelectItem>
                              <SelectItem value="bank">Bank Transfer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {formData.paymentMethod && (
                          <div className="mt-6 bg-gray-50 p-4 rounded-md">
                            {formData.paymentMethod === "mpesa" && (
                              <div>
                                <p className="font-medium mb-2">M-Pesa Payment Instructions</p>
                                <ol className="list-decimal list-inside text-sm space-y-1">
                                  <li>Go to M-Pesa on your phone</li>
                                  <li>Select Pay Bill</li>
                                  <li>Enter Business Number: <span className="font-medium">522522</span></li>
                                  <li>Enter Account Number: <span className="font-medium">DL{formData.idNumber}</span></li>
                                  <li>Enter Amount: <span className="font-medium">KSh 3,000</span></li>
                                  <li>Enter your M-Pesa PIN and confirm</li>
                                </ol>
                              </div>
                            )}
                            {formData.paymentMethod === "card" && (
                              <div>
                                <p className="font-medium mb-2">You will be redirected to our secure payment gateway after submission.</p>
                                <p className="text-sm text-gray-600">We accept Visa, Mastercard, and American Express.</p>
                              </div>
                            )}
                            {formData.paymentMethod === "bank" && (
                              <div>
                                <p className="font-medium mb-2">Bank Transfer Details</p>
                                <div className="text-sm space-y-1">
                                  <p>Bank: Kenya National Bank</p>
                                  <p>Account Name: Kenya Police Service</p>
                                  <p>Account Number: 01098765432</p>
                                  <p>Branch: Central Branch</p>
                                  <p>Reference: DL{formData.idNumber}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous Step
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-police-700 hover:bg-police-800"
                        disabled={isSubmitting || !formData.paymentMethod}
                      >
                        {isSubmitting ? "Processing..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                )}

                {step === 4 && (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully</h2>
                    <p className="text-gray-600 mb-6">
                      Your application for a replacement driving license has been submitted successfully. 
                      Please keep your application ID for future reference.
                    </p>
                    <div className="bg-police-100 rounded-lg p-4 mb-6 inline-block">
                      <p className="text-gray-600 text-sm">Application ID</p>
                      <p className="text-xl font-bold text-police-800">{applicationId}</p>
                    </div>
                    <div className="text-left bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <p className="text-sm text-yellow-700">
                        A confirmation email has been sent to your email address with all the details. You can use this
                        tracking ID to check the status of your application.
                      </p>
                    </div>
                    <div className="text-left bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                      <p className="font-medium text-blue-800 mb-1">Next Steps:</p>
                      <ul className="text-sm text-blue-700 list-disc list-inside">
                        <li>Complete your payment if you haven't done so.</li>
                        <li>Your application will be processed within 7-14 working days.</li>
                        <li>You'll receive an SMS notification when your license is ready for pickup or dispatched.</li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button asChild className="bg-police-700 hover:bg-police-800">
                        <a href="/">Return to Homepage</a>
                      </Button>
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

export default ReplaceLicense;
