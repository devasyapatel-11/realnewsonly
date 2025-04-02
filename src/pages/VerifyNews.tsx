
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsVerificationForm from "@/components/NewsVerificationForm";

const VerifyNews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gradient">Verify News</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter the news content or URL you want to verify. Our AI will analyze the content and determine if it's likely real or fake news.
            </p>
          </div>
          
          <NewsVerificationForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyNews;
