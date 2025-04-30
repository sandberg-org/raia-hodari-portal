
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="rounded-full bg-red-100 p-4 w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-police-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for cannot be found.
          </p>
          <p className="text-gray-500 mb-8">
            The link you followed may be broken, or the page may have been removed or renamed.
          </p>
          <Button asChild size="lg" className="bg-police-700 hover:bg-police-800">
            <Link to="/">Return to Homepage</Link>
          </Button>
          
          <div className="mt-10 border-t pt-8">
            <p className="text-gray-500 mb-4">Need assistance?</p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
