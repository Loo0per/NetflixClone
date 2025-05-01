export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-15 px-4 md:px-16 max-w-7xl mx-auto mr-20">
        <p className="text-left mb-6 hover:underline cursor-pointer">
          Questions? Contact us.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 text-sm">
     
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Speed Test</a>
          </div>
          

          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Legal Notices</a>
          </div>
          

          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>
          
         
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
        
        
        <div className="mt-8">
          <button className="border border-gray-600 bg-black text-gray-400 px-4 py-1 rounded flex items-center space-x-2 cursor-pointer">
            <span className="text-lg">🌐</span>
            <span>English</span>
            <span className="ml-1">▼</span>
          </button>
        </div>
        
       
        <p className="mt-6 text-sm">Netflix Sri Lanka</p>
      </footer>
    );
  }