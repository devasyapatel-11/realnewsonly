
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, AlertTriangle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const NewsVerificationForm = () => {
  const [newsText, setNewsText] = useState("");
  const [newsUrl, setNewsUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | { 
    isReal: boolean;
    confidence: number;
    text?: string;
    url?: string;
    explanation?: string;
    factChecks?: {text: string, source: string}[];
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
      // More realistic result simulation
      const keywords = ["covid", "vaccine", "virus", "government", "conspiracy"];
      const lowerText = newsText.toLowerCase();
      
      // Check if text contains suspicious keywords or patterns
      const suspiciousFactors = keywords.filter(word => lowerText.includes(word)).length;
      const hasExclamation = lowerText.includes("!");
      const hasCapsLock = newsText.split(" ").some(word => word.length > 4 && word === word.toUpperCase());
      
      // Calculate a more meaningful confidence score
      let mockConfidence = Math.random() * 0.3 + 0.35; // Base confidence between 35-65%
      
      // Adjust based on content analysis
      if (suspiciousFactors > 2) mockConfidence -= 0.2;
      if (hasExclamation) mockConfidence -= 0.1;
      if (hasCapsLock) mockConfidence -= 0.15;
      if (lowerText.length < 100) mockConfidence -= 0.1;
      
      // Bound the confidence
      mockConfidence = Math.max(0.1, Math.min(0.9, mockConfidence));
      
      // Generate an explanation
      const explanation = generateExplanation(mockConfidence < 0.5, suspiciousFactors, hasExclamation, hasCapsLock);
      
      setResult({
        isReal: mockConfidence >= 0.5,
        confidence: mockConfidence,
        text: newsText,
        explanation,
        factChecks: generateFactChecks(mockConfidence < 0.5)
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
      // URL analysis for more realistic classification
      const domain = extractDomain(newsUrl);
      const suspiciousDomains = ['viral', 'daily', 'breaking', 'truth', 'real'];
      const isReputableDomain = domain.includes('.gov') || domain.includes('.edu') || 
                               domain.includes('reuters') || domain.includes('bbc') || 
                               domain.includes('apnews');
      
      // Generate confidence based on domain analysis
      let mockConfidence = Math.random() * 0.3 + 0.35; // Base confidence
      
      if (isReputableDomain) mockConfidence += 0.35;
      if (suspiciousDomains.some(word => domain.includes(word))) mockConfidence -= 0.25;
      if (domain.length > 20) mockConfidence -= 0.1; // Unusually long domains are suspicious
      
      // Bound the confidence
      mockConfidence = Math.max(0.1, Math.min(0.9, mockConfidence));
      
      // Generate explanation
      const explanation = generateUrlExplanation(mockConfidence < 0.5, domain, isReputableDomain);
      
      setResult({
        isReal: mockConfidence >= 0.5,
        confidence: mockConfidence,
        url: newsUrl,
        explanation,
        factChecks: generateFactChecks(mockConfidence < 0.5)
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
  
  const extractDomain = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace('www.', '');
    } catch {
      return url;
    }
  };
  
  const generateExplanation = (isFake: boolean, suspiciousFactors: number, hasExclamation: boolean, hasCapsLock: boolean) => {
    if (isFake) {
      let reasons = [];
      if (suspiciousFactors > 2) reasons.push("contains multiple controversial keywords");
      if (hasExclamation) reasons.push("uses excessive exclamation marks");
      if (hasCapsLock) reasons.push("contains words in ALL CAPS (often used for emphasis in fake news)");
      
      return `This content appears suspicious because it ${reasons.join(", ")}.
      Our analysis suggests that this may be misleading or contain unverified information.`;
    } else {
      return "The content appears to follow journalistic standards and doesn't contain typical patterns found in misleading information. However, always cross-verify important news with multiple sources.";
    }
  };
  
  const generateUrlExplanation = (isFake: boolean, domain: string, isReputable: boolean) => {
    if (isFake) {
      return `The source domain "${domain}" is not recognized as a mainstream news outlet. URLs from lesser-known sources require additional verification as they may not adhere to rigorous fact-checking standards.`;
    } else {
      if (isReputable) {
        return `This URL is from "${domain}", which is generally considered a reputable source with editorial standards. However, always stay vigilant as even legitimate sites can occasionally publish inaccurate information.`;
      } else {
        return `While our analysis doesn't flag this source as suspicious, we recommend verifying this information with additional trusted sources.`;
      }
    }
  };
  
  const generateFactChecks = (isFake: boolean) => {
    if (isFake) {
      return [
        {
          text: "Similar claims have been debunked by fact-checkers",
          source: "FactCheck.org"
        },
        {
          text: "Sources cited are not verifiable or don't exist",
          source: "OnlyRealNews Analysis"
        }
      ];
    } else {
      return [
        {
          text: "Information aligns with reports from multiple outlets",
          source: "OnlyRealNews Analysis"
        }
      ];
    }
  };

  const resetForm = () => {
    setNewsText("");
    setNewsUrl("");
    setResult(null);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence < 0.35) return "bg-red-500";
    if (confidence < 0.65) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!result ? (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="text">Verify by Text</TabsTrigger>
              <TabsTrigger value="url">Verify by URL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="animate-fade-in space-y-4">
              <Alert className="bg-blue-50 border-blue-200 mb-4">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-700">Analyze news content</AlertTitle>
                <AlertDescription className="text-blue-600">
                  Paste the text of a news article to check its credibility.
                </AlertDescription>
              </Alert>
              
              <form onSubmit={handleTextSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="news-text" className="text-sm font-medium text-gray-700 flex justify-between items-center">
                    <span>News Article Text</span>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <span className="text-xs text-blue-600 cursor-help">Verification Tips</span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-3 text-sm">
                        <p>For best results, include the full article text. Partial content may result in less accurate verification.</p>
                      </HoverCardContent>
                    </HoverCard>
                  </label>
                  <Textarea
                    id="news-text"
                    placeholder="Paste the news article text here..."
                    className="min-h-[200px] border-gray-300 focus:border-blue-400 focus:ring-blue-300"
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                  disabled={isLoading}
                >
                  {isLoading ? 
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Analyzing...
                    </span> 
                    : "Verify News"
                  }
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="url" className="animate-fade-in space-y-4">
              <Alert className="bg-blue-50 border-blue-200 mb-4">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-700">Analyze by URL</AlertTitle>
                <AlertDescription className="text-blue-600">
                  Enter the web address of a news article to verify its source and content.
                </AlertDescription>
              </Alert>
              
              <form onSubmit={handleUrlSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="news-url" className="text-sm font-medium text-gray-700">
                    News Article URL
                  </label>
                  <Input
                    id="news-url"
                    type="url"
                    placeholder="https://example.com/news-article"
                    className="border-gray-300 focus:border-blue-400 focus:ring-blue-300"
                    value={newsUrl}
                    onChange={(e) => setNewsUrl(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                  disabled={isLoading}
                >
                  {isLoading ? 
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Analyzing...
                    </span> 
                    : "Verify News"
                  }
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800">Verification Result</h3>
            <Button variant="outline" size="sm" onClick={resetForm} className="border-gray-300 hover:bg-gray-50">
              Verify Another
            </Button>
          </div>
          
          <div className="mb-8">
            <div className={`flex items-center justify-center w-24 h-24 mx-auto rounded-full ${
              result.isReal ? "bg-green-50 border-2 border-green-100" : "bg-red-50 border-2 border-red-100"
            } transition-all duration-300 shadow-inner`}>
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
                {result.isReal ? "Likely Authentic News" : "Potential Misinformation"}
              </h4>
              
              <div className="mt-3 flex flex-col items-center gap-1">
                <div className="text-sm text-gray-500 w-full max-w-xs flex justify-between mb-1">
                  <span>Low confidence</span>
                  <span>High confidence</span>
                </div>
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 mb-1">
                  <div 
                    className={`h-2.5 rounded-full ${getConfidenceColor(result.confidence)} transition-all duration-500`} 
                    style={{ width: `${Math.round(result.confidence * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Confidence: {Math.round(result.confidence * 100)}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-4">
            <div>
              <h5 className="font-medium text-sm mb-2 text-gray-700">Source:</h5>
              <p className="text-sm text-gray-700 break-words bg-gray-50 p-3 rounded-md">
                {result.text || (
                  <span className="flex items-center gap-1">
                    {result.url} 
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </a>
                  </span>
                )}
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-sm mb-2 text-gray-700">Analysis Explanation:</h5>
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                {result.explanation}
              </p>
            </div>
            
            {result.factChecks && result.factChecks.length > 0 && (
              <div>
                <h5 className="font-medium text-sm mb-2 text-gray-700">Fact Check Points:</h5>
                <ul className="space-y-2">
                  {result.factChecks.map((check, idx) => (
                    <li key={idx} className="text-sm flex gap-2 bg-gray-50 p-3 rounded-md">
                      <span className={result.isReal ? "text-green-600" : "text-red-600"}>
                        {result.isReal ? "✓" : "✗"}
                      </span>
                      <div>
                        <p className="text-gray-700">{check.text}</p>
                        <p className="text-xs text-gray-500">Source: {check.source}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
            <p className="text-gray-600">
              <strong>Disclaimer:</strong> This result is based on our AI model's analysis. 
              While our system uses advanced algorithms to detect misinformation patterns, 
              we recommend cross-checking with other reliable sources before making conclusions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsVerificationForm;
