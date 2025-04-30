
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FileComplaint from "./pages/FileComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import TrafficFines from "./pages/TrafficFines";
import ReplaceLicense from "./pages/ReplaceLicense";
import LostDocuments from "./pages/LostDocuments";
import DrivingResults from "./pages/DrivingResults";
import TrackService from "./pages/TrackService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
