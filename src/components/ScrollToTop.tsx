import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { CTAHomeData, CTABuySellData } from '../const/cta';

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);
   const location = useLocation();

   const getWhatsappData = () => {
      if (location.pathname.includes('sell')) {
         return CTABuySellData;
      }
      return CTAHomeData;
   };

   const waData = getWhatsappData();
   const waUrl = `https://wa.me/6285659565885?text=${encodeURIComponent(waData.whatsappText)}`;

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 300) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <AnimatePresence>
         {isVisible && (
            <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.8 }}
               animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
               }}
               exit={{ opacity: 0, y: 20, scale: 0.8 }}
               className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
            >
               <motion.a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                     scale: 1.1,
                     boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg shadow-xl hover:from-green-600 hover:to-green-700 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Chat on WhatsApp"
               >
                  <Send className="w-6 h-6" />
               </motion.a>

               <motion.button
                  whileHover={{ 
                     scale: 1.1,
                     boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 rounded-lg shadow-xl hover:from-blue-800 hover:to-blue-600 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Scroll to top"
               >
                  <motion.div
                     animate={{
                        y: [0, -3, 0],
                     }}
                     transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  >
                     <ArrowUp className="w-6 h-6" />
                  </motion.div>
               </motion.button>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default ScrollToTop;