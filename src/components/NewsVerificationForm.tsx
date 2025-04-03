
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, AlertTriangle, ExternalLink, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const NewsVerificationForm = () => {
  const [newsText, setNewsText] = useState("");
  const [newsUrl, setNewsUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultView, setResultView] = useState(false);
  const { toast } = useToast();

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some news text to verify.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing (frontend only, no ML model)
    setTimeout(() => {
      setResultView(true);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a URL to verify.",
        variant: "destructive",
      });
      return;
    }
    
    if (!isValidUrl(newsUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing (frontend only, no ML model)
    setTimeout(() => {
      setResultView(true);
      setIsLoading(false);
    }, 1500);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const resetForm = () => {
    setNewsText("");
    setNewsUrl("");
    setResultView(false);
  };

  // Simple UI-only demo result component
  const ResultView = () => (
    <div className="glass-card p-8 rounded-2xl animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-medium text-white">Verification Demo</h3>
        <Button variant="outline" size="sm" onClick={resetForm} className="border-white/20 bg-white/5 hover:bg-white/10 text-white">
          Verify Another
        </Button>
      </div>
      
      <div className="mb-10">
        <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-white/5 border-2 border-green-400/30 transition-all duration-300 mb-6">
          <Check className="w-12 h-12 text-green-400" />
        </div>
        
        <div className="text-center mt-4">
          <h4 className="text-2xl font-bold text-gradient mb-2">
            Verification Complete
          </h4>
          <p className="text-gray-300 max-w-lg mx-auto">
            This is a front-end demonstration. In a real application, this would display actual verification results from your model.
          </p>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-6 space-y-4">
        <div>
          <h5 className="font-medium text-sm mb-2 text-gray-300">Sample Results:</h5>
          <div className="space-y-3">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Check className="text-green-400 w-4 h-4" />
                <h6 className="text-sm font-medium text-white">Source Reputation</h6>
              </div>
              <p className="text-sm text-gray-300 pl-6">Recognized as a legitimate news source</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Check className="text-green-400 w-4 h-4" />
                <h6 className="text-sm font-medium text-white">Content Analysis</h6>
              </div>
              <p className="text-sm text-gray-300 pl-6">No red flags detected in article content</p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Check className="text-green-400 w-4 h-4" />
                <h6 className="text-sm font-medium text-white">Cross Reference</h6>
              </div>
              <p className="text-sm text-gray-300 pl-6">Information matches other reliable sources</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white/5 p-5 rounded-xl border border-white/10 text-sm">
        <p className="text-gray-300">
          <strong className="text-white">Note:</strong> This is a demo interface. In a real application, 
          this would connect to your trained ML model to provide actual verification results.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!resultView ? (
        <div className="glass-card p-8 rounded-2xl">
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 p-1 border border-white/10">
              <TabsTrigger value="text" className="data-[state=active]:bg-white/10 text-white">Verify by Text</TabsTrigger>
              <TabsTrigger value="url" className="data-[state=active]:bg-white/10 text-white">Verify by URL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="animate-fade-in space-y-6">
              <Alert className="bg-white/5 border-white/10">
                <AlertTriangle className="h-4 w-4 text-blue-400" />
                <AlertTitle className="text-white">Analyze news content</AlertTitle>
                <AlertDescription className="text-gray-300">
                  Paste the text of a news article to check its credibility.
                </AlertDescription>
              </Alert>
              
              <form onSubmit={handleTextSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="news-text" className="text-sm font-medium text-gray-300 flex justify-between items-center">
                    <span>News Article Text</span>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="text-xs text-blue-400 cursor-help">Verification Tips</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-4 text-sm glass-card border-white/10 text-gray-300">
                        <p>For best results, include the full article text. Partial content may result in less accurate verification.</p>
                      </HoverCardContent>
                    </HoverCard>
                  </label>
                  <Textarea
                    id="news-text"
                    placeholder="Paste the news article text here..."
                    className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-400"
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full interactive-button py-6 rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? 
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Processing...
                    </span> 
                    : <span className="flex items-center gap-2">Verify News <ArrowRight className="w-4 h-4" /></span>
                  }
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="url" className="animate-fade-in space-y-6">
              <Alert className="bg-white/5 border-white/10">
                <AlertTriangle className="h-4 w-4 text-blue-400" />
                <AlertTitle className="text-white">Analyze by URL</AlertTitle>
                <AlertDescription className="text-gray-300">
                  Enter the web address of a news article to verify its source and content.
                </AlertDescription>
              </Alert>
              
              <form onSubmit={handleUrlSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="news-url" className="text-sm font-medium text-gray-300">
                    News Article URL
                  </label>
                  <Input
                    id="news-url"
                    type="url"
                    placeholder="https://example.com/news-article"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-400"
                    value={newsUrl}
                    onChange={(e) => setNewsUrl(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full interactive-button py-6 rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? 
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Processing...
                    </span> 
                    : <span className="flex items-center gap-2">Verify News <ArrowRight className="w-4 h-4" /></span>
                  }
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <ResultView />
      )}
    </div>
  );
};

export default NewsVerificationForm;
