
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Scale, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
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
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-3 glass-card inline-block rounded-full pulse-glow">
                <Scale className="h-10 w-10 text-white animate-pulse-scale" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient text-shadow">Legal Information</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Important policies and legal information about OnlyRealNews and our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link to="/privacy" className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-full">
                  <Lock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Privacy Policy</h3>
                  <p className="text-gray-300 text-sm">
                    Learn how we collect, use, and protect your personal information when you use our services.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/terms" className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.1s"}}>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-full">
                  <FileText className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Terms of Service</h3>
                  <p className="text-gray-300 text-sm">
                    Read the rules and guidelines that govern the use of OnlyRealNews and all associated services.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/copyright" className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-full">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Copyright Policy</h3>
                  <p className="text-gray-300 text-sm">
                    Understand our approach to copyright protection and how we handle intellectual property rights.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/contact" className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.3s"}}>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-full">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                  <p className="text-gray-300 text-sm">
                    Have legal questions or concerns? Reach out to our legal team for assistance.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="glass-card p-8 rounded-xl border border-white/10 animate-slide-up mb-12" style={{animationDelay: "0.4s"}}>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Legal Questions</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-5 rounded-lg hover-grow">
                <h3 className="text-lg font-medium text-white mb-2">How is my data protected?</h3>
                <p className="text-gray-300">
                  We implement strong encryption and security protocols to protect your personal information. 
                  All data is stored on secure servers with strict access controls. We never sell your data 
                  to third parties and only use it as described in our Privacy Policy.
                </p>
              </div>
              
              <div className="glass-card p-5 rounded-lg hover-grow">
                <h3 className="text-lg font-medium text-white mb-2">Can I use OnlyRealNews content?</h3>
                <p className="text-gray-300">
                  OnlyRealNews content is protected by copyright. You may share links to our content, but 
                  republishing or commercial use requires explicit permission. Please contact our legal team 
                  for licensing requests.
                </p>
              </div>
              
              <div className="glass-card p-5 rounded-lg hover-grow">
                <h3 className="text-lg font-medium text-white mb-2">How do you handle GDPR compliance?</h3>
                <p className="text-gray-300">
                  We are fully compliant with GDPR requirements. Users in the EU have the right to access, 
                  correct, delete, restrict processing, and port their data. You can exercise these rights 
                  through your account settings or by contacting our data protection officer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
