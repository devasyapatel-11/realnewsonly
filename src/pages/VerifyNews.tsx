
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsVerificationForm from "@/components/NewsVerificationForm";
import { Shield, AlertTriangle } from "lucide-react";

const VerifyNews = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <main className="flex-1 py-16 px-6 relative">
        {/* Grid Dots Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="grid-dot absolute" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-3 glass-card inline-block rounded-full pulse-glow">
                <Shield className="h-10 w-10 text-white animate-pulse-scale" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient text-shadow">Verify News</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our verification tool helps you identify potential misinformation. 
              Enter the news content or URL you want to verify below.
            </p>
          </div>
          
          <div className="my-8 max-w-3xl mx-auto px-4">
            <div className="glass-card p-6 rounded-xl border border-white/10 mb-8 animate-slide-up hover-grow pulse-glow">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-400 h-5 w-5 mt-0.5 flex-shrink-0 animate-bounce-slow" />
                <div className="text-sm">
                  <p className="font-medium mb-2 text-white">How to get the best results</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Use complete articles rather than headlines or snippets</li>
                    <li>Include the source URL when possible for more accurate analysis</li>
                    <li>This is a demo interface. In a real application, this would connect to your trained ML model</li>
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
