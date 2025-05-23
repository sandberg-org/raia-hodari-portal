
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FileComplaint from "./pages/FileComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import TrafficFines from "./pages/TrafficFines";
import ReplaceLicense from "./pages/ReplaceLicense";
import LostDocuments from "./pages/LostDocuments";
import DrivingResults from "./pages/DrivingResults";
import TrackService from "./pages/TrackService";
import TempDrivingLicense from "./pages/TempDrivingLicense";
import TrackLicense from "./pages/TrackLicense";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/file-complaint" element={<FileComplaint />} />
            <Route path="/track" element={<TrackComplaint />} />
            <Route path="/traffic-fines" element={<TrafficFines />} />
            <Route path="/replace-license" element={<ReplaceLicense />} />
            <Route path="/lost-documents" element={<LostDocuments />} />
            <Route path="/driving-results" element={<DrivingResults />} />
            <Route path="/track-service" element={<TrackService />} />
            <Route path="/temp-driving-license" element={<TempDrivingLicense />} />
            <Route path="/track-license" element={<TrackLicense />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
