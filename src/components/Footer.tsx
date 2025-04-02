
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-semibold text-lg text-gradient">OnlyRealNews</span>
            <p className="text-sm text-gray-500 mt-2">
              Combating misinformation, one article at a time.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <h4 className="font-medium text-sm">Pages</h4>
              <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">Home</Link>
              <Link to="/verify" className="text-sm text-gray-500 hover:text-black transition-colors">Verify News</Link>
              <Link to="/about" className="text-sm text-gray-500 hover:text-black transition-colors">About</Link>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h4 className="font-medium text-sm">Resources</h4>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Research</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">API</a>
              <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Documentation</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {currentYear} OnlyRealNews. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
