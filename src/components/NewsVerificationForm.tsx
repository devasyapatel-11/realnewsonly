
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { toast } from "sonner";
import { AlertTriangle, FileText, Globe, BarChart3, FileCheck2 } from "lucide-react";

const NewsVerificationForm = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [inputType, setInputType] = useState<"text" | "url">("text");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleVerify = async () => {
    if ((inputType === "text" && !text) || (inputType === "url" && !url)) {
      toast.error("Please enter content to verify");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock results - frontend only demo
      setResults({
        credibility_score: Math.random() * 100,
        classification: Math.random() > 0.5 ? "Real News" : "Potentially Misleading",
        confidence: Math.floor(Math.random() * 40) + 60,
        analysis: {
          clickbait_score: Math.random() * 100,
          emotional_tone: Math.random() * 100,
          source_credibility: Math.random() * 100,
        },
        explanation: "This is a frontend demo with randomly generated results. In a real application, this would be connected to an ML model.",
        fact_check_points: [
          { claim: "First key claim from the article", assessment: Math.random() > 0.5 ? "Accurate" : "Misleading", confidence: Math.floor(Math.random() * 30) + 70 },
          { claim: "Second key claim from the article", assessment: Math.random() > 0.3 ? "Accurate" : "Misleading", confidence: Math.floor(Math.random() * 40) + 60 },
        ]
      });
      
      setIsLoading(false);
    }, 1500);
  };

  const clearForm = () => {
    setText("");
    setUrl("");
    setResults(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-2">
        <Toggle
          pressed={inputType === "text"}
          onClick={() => {
            setInputType("text");
            clearForm();
          }}
          className="data-[state=on]:bg-white/20 data-[state=on]:text-white"
          aria-label="Text Input"
        >
          <FileText className="mr-2 h-4 w-4" />
          Text
        </Toggle>
        <Toggle
          pressed={inputType === "url"}
          onClick={() => {
            setInputType("url");
            clearForm();
          }}
          className="data-[state=on]:bg-white/20 data-[state=on]:text-white"
          aria-label="URL Input"
        >
          <Globe className="mr-2 h-4 w-4" />
          URL
        </Toggle>
      </div>

      {inputType === "text" ? (
        <div>
          <textarea
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white min-h-[200px] focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Paste the news article text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div>
          <input
            type="url"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Enter article URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      )}

      <div className="flex justify-center">
        <Button 
          onClick={handleVerify} 
          disabled={isLoading}
          className="w-full py-6 text-lg font-medium rounded-xl bg-white/10 hover:bg-black/40 text-white border border-white/10 transition-all duration-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          {isLoading ? "Analyzing..." : "Verify Now"}
        </Button>
      </div>

      {results && (
        <div className="mt-10 animate-fade-in">
          <div className="glass-card p-6 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Verification Results</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                results.classification === "Real News" 
                  ? "bg-emerald-500/20 text-emerald-300" 
                  : "bg-amber-500/20 text-amber-300"
              }`}>
                {results.classification}
              </span>
            </div>
            
            <div className="mb-6">
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-gray-300">Confidence Score</span>
                <span className="text-sm font-medium text-white">{results.confidence}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    results.confidence > 70 
                      ? "bg-emerald-500" 
                      : results.confidence > 40 
                        ? "bg-amber-500" 
                        : "bg-red-500"
                  }`}
                  style={{ width: `${results.confidence}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm">{results.explanation}</p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-white">Key Metrics:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-medium text-white">Clickbait Score</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: `${results.analysis.clickbait_score}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Low</span>
                    <span className="text-gray-400">High</span>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">Emotional Tone</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${results.analysis.emotional_tone}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Neutral</span>
                    <span className="text-gray-400">Emotional</span>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileCheck2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Source Score</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                    <div 
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${results.analysis.source_credibility}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Low</span>
                    <span className="text-gray-400">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-medium text-white mb-4">Fact Check:</h4>
            <div className="space-y-4">
              {results.fact_check_points.map((point: any, index: number) => (
                <div key={index} className="glass-card p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white">{point.claim}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      point.assessment === "Accurate" 
                        ? "bg-emerald-500/20 text-emerald-300" 
                        : "bg-amber-500/20 text-amber-300"
                    }`}>
                      {point.assessment} ({point.confidence}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsVerificationForm;
