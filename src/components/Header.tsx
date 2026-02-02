import Logo from "../assets/logo.png";

const Header = () => {
   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
               <img 
                  src={Logo} 
                  alt="ARF PART Logo" 
                  className="w-full h-full rounded-lg" 
               />
            </div>
            <span className="text-xl font-bold text-gray-900">ARF PART</span>
          </div>
        </div>
      </header>
   )
}

export default Header;