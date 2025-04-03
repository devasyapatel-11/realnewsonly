
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, CheckCircle, AlertTriangle, FileText, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Grid Dots Background */}
          <div className="absolute inset-0 z-0 opacity-30">
            {[...Array(20)].map((_, i) => (
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
          
          {/* Floating Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="floating-item absolute left-1/4 top-1/4 opacity-30">
              <Shield className="text-white/20 w-24 h-24 animate-pulse-scale" />
            </div>
            <div className="floating-item absolute right-1/4 bottom-1/4 opacity-20" style={{animationDelay: "2s"}}>
              <CheckCircle className="text-white/20 w-16 h-16 animate-spin-slow" />
            </div>
            <div className="floating-item absolute left-3/4 top-1/2 opacity-20" style={{animationDelay: "4s"}}>
              <AlertTriangle className="text-white/20 w-20 h-20 animate-bounce-slow" />
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-6 p-3 rounded-full bg-white/5 border border-white/10 animate-fade-in pulse-glow">
                <Shield className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 animate-fade-in leading-tight tracking-tight text-shadow">
                One-Click News <br/> Verification
              </h1>
              
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                OnlyRealNews uses cutting-edge technology to help you identify potential misinformation, 
                ensuring you're always informed with the most reliable news sources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="interactive-button min-w-[200px] rounded-full py-6 button-glow hover-grow">
                  <Link to="/verify" className="flex items-center gap-2">
                    Verify News Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white/20 hover:bg-white/5 text-white min-w-[200px] rounded-full py-6 hover-grow">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <button className="flex flex-col items-center gap-2 text-sm text-gray-400 mx-auto transition-colors hover:text-white animate-bounce-slow">
                <span>Scroll to learn more</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-gradient mb-4 text-shadow">How It Works</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform makes it easy to verify the authenticity of any news article in seconds
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Input News Content",
                  description: "Enter the news article text or URL you want to verify.",
                  icon: <FileText className="w-10 h-10 text-white" />,
                },
                {
                  title: "Smart Analysis",
                  description: "Our system analyzes the content for patterns of misinformation.",
                  icon: <Shield className="w-10 h-10 text-white" />,
                },
                {
                  title: "Get Results",
                  description: "Receive a detailed report on the credibility of the news source.",
                  icon: <CheckCircle className="w-10 h-10 text-white" />,
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card p-8 rounded-2xl glowing-border animate-slide-up hover-grow pulse-glow"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="mb-6 p-4 inline-block bg-white/5 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto hover-grow pulse-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-shadow">Ready to Verify?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                Don't let fake news influence your decisions. Use our verification tools to ensure 
                you're getting reliable information every time.
              </p>
              <Button asChild size="lg" className="interactive-button min-w-[200px] rounded-full py-6 button-glow">
                <Link to="/verify" className="flex items-center gap-2">
                  Start Verifying <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
