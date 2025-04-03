
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, FileText, ChevronRight, ExternalLink, Lightbulb, BookmarksSimple, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
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
                <BookOpen className="h-10 w-10 text-white animate-pulse-scale" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gradient text-shadow">Resources</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of tools, guides, and educational materials to help you identify and combat misinformation.
            </p>
          </div>
          
          {/* Featured Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.1s"}}>
              <div className="p-2 bg-white/10 inline-block rounded-full mb-4">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Educational Materials</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive lessons and courses to help you understand misinformation and develop critical thinking skills.
              </p>
              <Link to="/education" className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Explore materials <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div className="p-2 bg-white/10 inline-block rounded-full mb-4">
                <FileText className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Research Papers</h3>
              <p className="text-gray-300 mb-4">
                Academic publications and white papers on misinformation detection, media literacy, and the psychology of fake news.
              </p>
              <Link to="/research" className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                Read research <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-white/10 hover-grow pulse-glow animate-slide-up" style={{animationDelay: "0.3s"}}>
              <div className="p-2 bg-white/10 inline-block rounded-full mb-4">
                <BookmarksSimple className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fact-Checking Guide</h3>
              <p className="text-gray-300 mb-4">
                Step-by-step techniques and trusted sources to verify information before sharing it with others.
              </p>
              <Link to="/guide" className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                View guide <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Tools Section */}
          <div className="mb-16 animate-slide-up" style={{animationDelay: "0.4s"}}>
            <h2 className="text-2xl font-bold text-white mb-6">Verification Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border border-white/10 hover-grow">
                <h3 className="text-lg font-semibold text-white mb-3">Image Verification</h3>
                <p className="text-gray-300 mb-4">
                  Tools to check if an image has been manipulated or taken out of context.
                </p>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>Google Reverse Image Search</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>TinEye</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>FotoForensics</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-white/10 hover-grow">
                <h3 className="text-lg font-semibold text-white mb-3">Source Credibility</h3>
                <p className="text-gray-300 mb-4">
                  Resources to evaluate the reliability and bias of news sources.
                </p>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>Media Bias/Fact Check</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>AllSides</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <span>NewsGuard</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fact-Checking Organizations */}
          <div className="mb-16 animate-slide-up" style={{animationDelay: "0.5s"}}>
            <h2 className="text-2xl font-bold text-white mb-6">Trusted Fact-Checking Organizations</h2>
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">Snopes</h3>
                  <p className="text-gray-300 text-sm">One of the first online fact-checking websites, focused on urban legends and misinformation.</p>
                </a>
                
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">PolitiFact</h3>
                  <p className="text-gray-300 text-sm">Pulitzer Prize-winning site that rates the accuracy of claims by politicians.</p>
                </a>
                
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">FactCheck.org</h3>
                  <p className="text-gray-300 text-sm">Nonpartisan, nonprofit organization that monitors factual accuracy in politics.</p>
                </a>
                
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">Reuters Fact Check</h3>
                  <p className="text-gray-300 text-sm">Fact-checking initiative from one of the world's largest news agencies.</p>
                </a>
                
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">AP Fact Check</h3>
                  <p className="text-gray-300 text-sm">The Associated Press's initiative to debunk misinformation and false claims.</p>
                </a>
                
                <a href="#" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  <h3 className="text-lg font-medium text-white mb-2">Full Fact</h3>
                  <p className="text-gray-300 text-sm">UK's independent fact-checking organization.</p>
                </a>
              </div>
            </div>
          </div>
          
          {/* Tips Section */}
          <div className="glass-card p-8 rounded-xl border border-white/10 animate-slide-up mb-12" style={{animationDelay: "0.6s"}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 bg-white/10 rounded-full flex-shrink-0">
                <Lightbulb className="text-yellow-400 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Quick Tips for Spotting Fake News</h2>
                <p className="text-gray-300">
                  Use these simple techniques to quickly assess the credibility of news articles and social media posts.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Check the Source</h3>
                <p className="text-gray-300">
                  Look at the website URL and about page. Research the publication's reputation and check if other reputable sources are reporting the same story.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Read Beyond Headlines</h3>
                <p className="text-gray-300">
                  Clickbait headlines often misrepresent the actual content. Read the full article before forming an opinion or sharing.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Check Dates</h3>
                <p className="text-gray-300">
                  Old news may be circulating out of context. Verify when the article was published and whether it's still relevant.
                </p>
              </div>
              
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-2">Check Your Biases</h3>
                <p className="text-gray-300">
                  We're all susceptible to confirmation bias. Be especially critical of stories that align perfectly with your views.
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

export default Resources;
