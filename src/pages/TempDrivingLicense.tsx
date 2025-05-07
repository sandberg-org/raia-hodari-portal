import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { IdCard, Download, FileText, Clock, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { jsPDF } from "jspdf";

// Mock temporary license applications database
// In a real application, this would be fetched from a backend
const mockApplications = [
  {
    id: "12345678",
    name: "John Doe",
    applicationDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    expiryDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
  },
  {
    id: "87654321",
    name: "Jane Smith",
    applicationDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    expiryDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000), // 13 days from now
  },
  {
    id: "11111111",
    name: "Test User",
    applicationDate: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000), // 16 days ago (expired)
    expiryDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago (expired)
  },
];

type ApplicationStatus = "checking" | "eligible" | "not-eligible" | "not-found" | "error" | null;

const TempDrivingLicense = () => {
  const { t } = useLanguage();
  const [nationalId, setNationalId] = useState("");
  const [status, setStatus] = useState<ApplicationStatus>(null);
  const [application, setApplication] = useState<typeof mockApplications[0] | null>(null);

  const checkEligibility = () => {
    if (!nationalId.trim()) return;

    setStatus("checking");
    
    // Simulate API call
    setTimeout(() => {
      try {
        const foundApplication = mockApplications.find(app => app.id === nationalId);
        
        if (!foundApplication) {
          setStatus("not-found");
          setApplication(null);
          return;
        }
        
        // Check if application is within 14 days
        const daysSinceApplication = Math.floor(
          (Date.now() - foundApplication.applicationDate.getTime()) / (24 * 60 * 60 * 1000)
        );
        
        if (daysSinceApplication <= 14) {
          setStatus("eligible");
          setApplication(foundApplication);
        } else {
          setStatus("not-eligible");
          setApplication(null);
        }
      } catch (error) {
        console.error("Error checking eligibility:", error);
        setStatus("error");
        setApplication(null);
      }
    }, 1000);
  };

  const generatePDF = () => {
    if (!application) return;
    
    try {
      const doc = new jsPDF();
      
      // Add Kenya Police Logo (placeholder)
      doc.setDrawColor(0);
      doc.setFillColor(30, 64, 124);
      doc.rect(10, 10, 190, 20, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.text("KENYA POLICE SERVICE", 105, 22, { align: "center" });
      
      // Certificate title
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(22);
      doc.text(t("tempLicense.certificateTitle"), 105, 50, { align: "center" });
      
      // Draw border
      doc.setLineWidth(0.5);
      doc.rect(10, 60, 190, 160);
      
      // Certificate content
      doc.setFontSize(12);
      doc.text(`Name: ${application.name}`, 20, 80);
      doc.text(`National ID: ${application.id}`, 20, 95);
      doc.text(`Application Date: ${application.applicationDate.toLocaleDateString()}`, 20, 110);
      doc.text(`${t("tempLicense.validUntil")}: ${application.expiryDate.toLocaleDateString()}`, 20, 125);
      
      // Certificate info
      doc.setFontSize(10);
      doc.text(t("tempLicense.certInfo"), 20, 150, { maxWidth: 170 });
      
      // Official stamp placeholder
      doc.setDrawColor(0, 0, 255);
      doc.circle(160, 180, 15);
      doc.text("OFFICIAL", 160, 177, { align: "center" });
      doc.text("STAMP", 160, 183, { align: "center" });
      
      // Signature line
      doc.setDrawColor(0);
      doc.line(30, 200, 100, 200);
      doc.setFontSize(8);
      doc.text("Authorized Signature", 65, 210, { align: "center" });
      
      // Save the PDF
      doc.save(`temporary_license_${application.id}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-police-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("tempLicense.title")}</h1>
              <p className="text-lg md:text-xl">
                {t("tempLicense.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Service Description Section */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-police-100 p-2 rounded-full">
                    <FileText className="h-6 w-6 text-police-700" />
                  </div>
                  <h2 className="text-2xl font-semibold">{t("tempLicense.aboutService")}</h2>
                </div>
                
                <p className="mb-4">
                  {t("tempLicense.aboutServiceDesc")}
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 my-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <Clock className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("tempLicense.validityPeriod")}</h3>
                      <p className="text-gray-600 text-sm">{t("tempLicense.validityDesc")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <IdCard className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{t("tempLicense.requirements")}</h3>
                      <p className="text-gray-600 text-sm">{t("tempLicense.requirementsDesc")}</p>
                    </div>
                  </div>
                </div>
                
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800">
                    {t("tempLicense.alertText")}
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="border-police-200 shadow-lg">
                <CardHeader className="bg-police-50 border-b border-police-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-police-100 p-2 rounded-full">
                      <IdCard className="h-6 w-6 text-police-700" />
                    </div>
                    <div>
                      <CardTitle>{t("tempLicense.title")}</CardTitle>
                      <CardDescription className="text-police-600 mt-1">
                        Check eligibility and get your certificate
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nationalId" className="text-police-800">{t("tempLicense.idLabel")}</Label>
                      <Input 
                        id="nationalId" 
                        placeholder={t("tempLicense.idPlaceholder")} 
                        value={nationalId} 
                        onChange={(e) => setNationalId(e.target.value)}
                        className="border-police-200 focus-visible:ring-police-500"
                      />
                      <p className="text-xs text-gray-500">Enter the National ID number you used when applying for your duplicate license</p>
                    </div>
                    
                    <Button 
                      className="bg-police-700 hover:bg-police-800 transition-colors mt-2"
                      onClick={checkEligibility}
                      disabled={status === "checking" || !nationalId.trim()}
                    >
                      {status === "checking" ? t("tempLicense.checking") : t("tempLicense.checkButton")}
                    </Button>
                    
                    {status === "error" && (
                      <Alert variant="destructive" className="mt-4">
                        <AlertDescription>{t("tempLicense.errorChecking")}</AlertDescription>
                      </Alert>
                    )}
                    
                    {status === "not-found" && (
                      <Alert className="mt-4 border-amber-300 bg-amber-50">
                        <AlertTitle className="text-amber-800">{t("tempLicense.notFound")}</AlertTitle>
                        <AlertDescription className="text-amber-700">{t("tempLicense.applyFirst")}</AlertDescription>
                      </Alert>
                    )}
                    
                    {status === "not-eligible" && (
                      <Alert variant="destructive" className="mt-4">
                        <AlertTitle>{t("tempLicense.notEligible")}</AlertTitle>
                        <AlertDescription>{t("tempLicense.applyFirst")}</AlertDescription>
                      </Alert>
                    )}
                    
                    {status === "eligible" && application && (
                      <>
                        <Alert className="mt-4 bg-green-50 border-green-200">
                          <AlertTitle className="text-green-800 font-medium">{t("tempLicense.eligible")}</AlertTitle>
                          <AlertDescription className="text-green-700">
                            <p className="mb-1">Name: {application.name}</p>
                            <p className="mb-1">Application Date: {application.applicationDate.toLocaleDateString()}</p>
                            <p>Valid until: {application.expiryDate.toLocaleDateString()}</p>
                          </AlertDescription>
                        </Alert>
                        <Button 
                          className="bg-police-700 hover:bg-police-800 mt-4 w-full flex items-center justify-center gap-2"
                          onClick={generatePDF}
                        >
                          <Download className="h-4 w-4" />
                          {t("tempLicense.downloadButton")}
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TempDrivingLicense;
