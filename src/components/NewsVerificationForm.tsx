
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import { useToast } from "@/components/ui/toaster";

const NewsVerificationForm = () => {
  const [newsText, setNewsText] = useState("");
  const [newsUrl, setNewsUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | { 
    isReal: boolean;
    confidence: number;
    text?: string;
    url?: string;
  }>(null);
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
    
    // Simulate API call to the ML model
    setTimeout(() => {
      // Random result for demonstration
      const mockConfidence = Math.random();
      setResult({
        isReal: mockConfidence > 0.5,
        confidence: mockConfidence,
        text: newsText
      });
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
    
    // Simulate API call to the ML model
    setTimeout(() => {
      // Random result for demonstration
      const mockConfidence = Math.random();
      setResult({
        isReal: mockConfidence > 0.5,
        confidence: mockConfidence,
        url: newsUrl
      });
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
    setResult(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!result ? (
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="text">Verify by Text</TabsTrigger>
            <TabsTrigger value="url">Verify by URL</TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="animate-fade-in">
            <form onSubmit={handleTextSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="news-text" className="text-sm font-medium">
                  News Article Text
                </label>
                <Textarea
                  id="news-text"
                  placeholder="Paste the news article text here..."
                  className="min-h-[200px]"
                  value={newsText}
                  onChange={(e) => setNewsText(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify News"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="url" className="animate-fade-in">
            <form onSubmit={handleUrlSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="news-url" className="text-sm font-medium">
                  News Article URL
                </label>
                <Input
                  id="news-url"
                  type="url"
                  placeholder="https://example.com/news-article"
                  value={newsUrl}
                  onChange={(e) => setNewsUrl(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify News"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">Verification Result</h3>
            <Button variant="ghost" size="sm" onClick={resetForm}>
              Verify Another
            </Button>
          </div>
          
          <div className="mb-8">
            <div className={`flex items-center justify-center w-24 h-24 mx-auto rounded-full ${
              result.isReal ? "bg-green-100" : "bg-red-100"
            }`}>
              {result.isReal ? (
                <Check className="w-12 h-12 text-green-600" />
              ) : (
                <X className="w-12 h-12 text-red-600" />
              )}
            </div>
            
            <div className="text-center mt-4">
              <h4 className={`text-xl font-bold ${
                result.isReal ? "text-green-600" : "text-red-600"
              }`}>
                {result.isReal ? "Likely Real News" : "Potential Fake News"}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Confidence: {Math.round(result.confidence * 100)}%
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h5 className="font-medium text-sm mb-2">Source:</h5>
            <p className="text-sm text-gray-700 break-words">
              {result.text || result.url}
            </p>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded text-sm">
            <p className="text-gray-600">
              This result is based on our AI model's analysis. While our model is highly accurate, we recommend cross-checking with other reliable sources.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsVerificationForm;
