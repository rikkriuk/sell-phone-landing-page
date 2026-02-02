import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

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
            <motion.button
               initial={{ opacity: 0, y: 20, scale: 0.8 }}
               animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
               }}
               exit={{ opacity: 0, y: 20, scale: 0.8 }}
               whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)',
               }}
               whileTap={{ scale: 0.9 }}
               onClick={scrollToTop}
               className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 rounded-full shadow-xl hover:from-blue-800 hover:to-blue-600 transition-colors duration-300"
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
         )}
      </AnimatePresence>
   );
}

export default ScrollToTop;