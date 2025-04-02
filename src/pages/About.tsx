
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const faqs = [
    {
      question: "How accurate is the fake news detection?",
      answer: "Our model has been trained on thousands of articles and achieves approximately 90% accuracy on test datasets. However, like any AI system, it's not perfect and should be used as a tool to assist your judgment, not replace it."
    },
    {
      question: "What types of fake news can the system detect?",
      answer: "The system is trained to detect various types of misinformation, including completely fabricated content, misleading information, manipulated content, and content with false context. It works best with news articles in English."
    },
    {
      question: "How does the AI determine if news is fake?",
      answer: "Our AI analyzes various linguistic patterns, writing style, emotional tone, source credibility factors, and contextual information. It looks for inconsistencies, exaggerated claims, emotional manipulation, and other patterns commonly found in fake news."
    },
    {
      question: "Can I verify news in languages other than English?",
      answer: "Currently, our system is optimized for English content. We're working on expanding to other languages in future updates."
    },
    {
      question: "Is my data stored when I verify an article?",
      answer: "We don't permanently store the content of articles you verify. Anonymous usage statistics may be collected to improve our service, but without personally identifiable information."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gradient">About OnlyRealNews</h1>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              OnlyRealNews was created with a simple mission: to combat the spread of misinformation in our digital ecosystem. In an era where information travels at unprecedented speeds, the distinction between truth and falsehood has become increasingly blurred.
            </p>
            <p className="text-gray-700">
              We believe that by providing tools that help people verify the credibility of news content, we can contribute to a more informed public discourse and strengthen the foundations of our democratic society.
            </p>
          </div>
          
          <div className="mb-12 animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6">How Our Technology Works</h2>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">The Machine Learning Model</h3>
              <p className="text-gray-700 mb-6">
                Our fake news detection system is powered by a sophisticated machine learning model trained on thousands of verified real and fake news articles. The model has learned to identify linguistic patterns, structural characteristics, and contextual elements that distinguish genuine reporting from deceptive content.
              </p>
              
              <h3 className="text-xl font-medium mb-4">Key Features of Our Model</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Linguistic pattern analysis to detect sensationalist language</li>
                <li>Source credibility evaluation based on historical accuracy</li>
                <li>Contextual verification against established facts</li>
                <li>Sentiment analysis to identify emotional manipulation</li>
                <li>Content structure evaluation typical of professional journalism</li>
              </ul>
              
              <p className="text-gray-700">
                While our technology is powerful, we acknowledge its limitations. No AI system can replace critical thinking and multiple-source verification. We encourage users to use our tool as one component of their information evaluation process.
              </p>
            </div>
          </div>
          
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white p-6 rounded-lg border border-gray-200">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-black text-white p-8 rounded-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
            <p className="text-gray-300 mb-6">
              The fight against misinformation requires a collective effort. By using OnlyRealNews, you're already contributing to this important cause. Share our tool with your network to help create a more informed digital environment.
            </p>
            <p className="text-gray-300">
              For developers and researchers interested in contributing to our project, please contact us at contact@onlyrealnews.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
