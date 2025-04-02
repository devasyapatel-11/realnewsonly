
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsVerificationForm from "@/components/NewsVerificationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertTriangle } from "lucide-react";

const VerifyNews = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black inline-block rounded-full">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gradient">Verify News</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered tool analyzes news content to help you identify potential 
              misinformation. Enter the news content or URL you want to verify below.
            </p>
          </div>
          
          <div className="my-8 max-w-3xl mx-auto px-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6 animate-slide-up">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-1">How to get the best results</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use complete articles rather than headlines or snippets</li>
                    <li>Include the source URL when possible for more accurate analysis</li>
                    <li>Even highly credible content may receive an 85-95% confidence score as all information requires verification</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <NewsVerificationForm />
            
            <div className="mt-10 text-center text-xs text-gray-500">
              <p>OnlyRealNews is committed to fighting misinformation online. Our tool is for educational purposes and should not be the sole basis for determining news credibility.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyNews;
