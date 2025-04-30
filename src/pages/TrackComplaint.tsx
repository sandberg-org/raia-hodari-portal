
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface ComplaintStatus {
  id: string;
  status: "pending" | "in-progress" | "resolved" | "not-found";
  description?: string;
  dateSubmitted?: string;
  lastUpdated?: string;
  assignedOfficer?: string;
  statusHistory?: { date: string; status: string; comments: string }[];
}

const TrackComplaint = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [complaintStatus, setComplaintStatus] = useState<ComplaintStatus | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingId) return;
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      if (trackingId.toUpperCase().startsWith("KPS")) {
        // Random statuses for demo
        const statuses = ["pending", "in-progress", "resolved"];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)] as "pending" | "in-progress" | "resolved";
        
        const today = new Date();
        const submittedDate = new Date(today.getTime() - Math.random() * 20 * 24 * 60 * 60 * 1000); // Random date within 20 days
        const updatedDate = new Date(submittedDate.getTime() + Math.random() * (today.getTime() - submittedDate.getTime()));
        
        setComplaintStatus({
          id: trackingId.toUpperCase(),
          status: randomStatus,
          description: "Sample complaint for demo purposes.",
          dateSubmitted: submittedDate.toLocaleDateString(),
          lastUpdated: updatedDate.toLocaleDateString(),
          assignedOfficer: "Officer J. Kamau",
          statusHistory: [
            {
              date: submittedDate.toLocaleDateString(),
              status: "Submitted",
              comments: "Complaint received and logged into the system."
            },
            {
              date: new Date(submittedDate.getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
              status: "Under Review",
              comments: "Complaint assigned to investigating officer."
            },
            {
              date: updatedDate.toLocaleDateString(),
              status: randomStatus === "resolved" ? "Resolved" : "In Progress",
              comments: randomStatus === "resolved" 
                ? "Investigation completed. Case resolved." 
                : "Investigation in progress."
            }
          ]
        });
      } else {
        setComplaintStatus({
          id: trackingId,
          status: "not-found",
        });
      }
      
      setIsSearching(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-6 w-6 text-amber-500" />;
      case "in-progress":
        return <Clock className="h-6 w-6 text-blue-500" />;
      case "resolved":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "not-found":
        return <AlertTriangle className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-amber-500 bg-amber-50 border-amber-200";
      case "in-progress":
        return "text-blue-500 bg-blue-50 border-blue-200";
      case "resolved":
        return "text-green-500 bg-green-50 border-green-200";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-police-700 py-6 px-8 text-white">
                <h1 className="text-2xl font-bold flex items-center">
                  <Search className="mr-3" />
                  Track Your Complaint
                </h1>
                <p className="mt-2 text-police-100">
                  Enter your complaint tracking ID to check its current status
                </p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSearch}>
                  <div className="flex gap-3">
                    <Input
                      placeholder="Enter tracking ID (e.g. KPS123456)"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      className="flex-grow"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-police-700 hover:bg-police-800 whitespace-nowrap"
                      disabled={isSearching}
                    >
                      {isSearching ? "Searching..." : "Track Complaint"}
                    </Button>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      Your tracking ID was provided to you when you filed your complaint
                      and sent to your email address.
                    </p>
                  </div>
                </form>

                {complaintStatus && (
                  <div className="mt-8">
                    {complaintStatus.status === "not-found" ? (
                      <Alert variant="destructive" className="mt-6">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Complaint Not Found</AlertTitle>
                        <AlertDescription>
                          We couldn't find any complaint with the tracking ID: {complaintStatus.id}. 
                          Please check the ID and try again.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <h2 className="text-xl font-bold">Complaint Status</h2>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaintStatus.status)}`}>
                            {complaintStatus.status === "in-progress" ? "In Progress" : 
                              complaintStatus.status.charAt(0).toUpperCase() + complaintStatus.status.slice(1)}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md mb-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Tracking ID</p>
                              <p className="font-medium">{complaintStatus.id}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Date Submitted</p>
                              <p className="font-medium">{complaintStatus.dateSubmitted}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Last Updated</p>
                              <p className="font-medium">{complaintStatus.lastUpdated}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Assigned Officer</p>
                              <p className="font-medium">{complaintStatus.assignedOfficer}</p>
                            </div>
                          </div>
                        </div>

                        <h3 className="font-semibold mb-4">Status History</h3>
                        <div className="border rounded-md divide-y">
                          {complaintStatus.statusHistory?.map((item, index) => (
                            <div key={index} className="p-4">
                              <div className="flex justify-between mb-1">
                                <p className="font-medium">{item.status}</p>
                                <p className="text-gray-500 text-sm">{item.date}</p>
                              </div>
                              <p className="text-sm text-gray-600">{item.comments}</p>
                            </div>
                          ))}
                        </div>

                        {complaintStatus.status !== "resolved" && (
                          <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
                            <p className="text-sm text-blue-700">
                              Your complaint is being processed. You'll receive updates via email as the status changes.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-1">What does 'Pending' status mean?</h3>
                    <p className="text-gray-600">
                      A pending status indicates that your complaint has been received and is waiting to be assigned 
                      to an investigating officer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">How long will it take to resolve my complaint?</h3>
                    <p className="text-gray-600">
                      Resolution times vary depending on the nature and complexity of the complaint. Most complaints
                      are addressed within 14-30 days.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">How can I provide additional information?</h3>
                    <p className="text-gray-600">
                      If you need to provide additional information about your complaint, please visit your nearest
                      police station with your tracking ID or call our helpline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackComplaint;
