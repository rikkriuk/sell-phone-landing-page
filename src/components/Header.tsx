import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
   const navigate = useNavigate();

   const navigateToHome = () => {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={navigateToHome}
         >
            <div className="w-8 h-8">
               <img
                  src={Logo}
                  alt="ARF PART Logo"
                  className="w-full h-full rounded-lg"
               />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">ARF PART</span>
          </button>
          <ThemeToggle />
        </div>
      </header>
   )
}

export default Header;