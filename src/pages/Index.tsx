
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Flag, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      title: "AI-Powered Detection",
      description: "Our advanced machine learning model identifies patterns in news content to determine authenticity.",
      icon: <Check className="w-8 h-8 text-black" />,
    },
    {
      title: "Fast & Reliable",
      description: "Get instant verification results with high accuracy to make informed decisions about what news to trust.",
      icon: <Flag className="w-8 h-8 text-black" />,
    },
    {
      title: "Combat Misinformation",
      description: "Join our mission to fight against fake news and promote media literacy in the digital age.",
      icon: <AlertTriangle className="w-8 h-8 text-black" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-gradient mb-6 animate-fade-in">
              Separating Fact from Fiction
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              OnlyRealNews uses cutting-edge AI to detect fake news and misinformation, helping you make informed decisions about what to trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="min-w-[160px]">
                <Link to="/verify">Verify News Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gradient">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white p-8 rounded-lg border border-gray-200 card-hover animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="mb-6 p-4 inline-block bg-gray-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Verify?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Don't let fake news influence your decisions. Use our tool to check the authenticity of any news article.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black border-white">
              <Link to="/verify">Start Verifying</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
