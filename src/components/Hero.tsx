import { motion } from 'motion/react';
import { whatsappText } from '../const/text';
import BrokenPhone from '../assets/broken-phone.jpg'

const Hero = () => {
   return (
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 dark:from-slate-800 to-white dark:to-slate-900 py-16 sm:py-24 lg:py-32 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="text-center lg:text-left">
                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, ease: 'easeOut' }}
                     className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                  >
                     Mau Jual HP Rusak atau Bekas?{' '}
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-500">
                        Loakin aja!
                     </span>
                  </motion.h1>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                     className="text-lg sm:text-xl text-gray-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0"
                  >
                     Proses cepat, harga terbaik, pembayaran langsung. 
                     HP rusak atau normal, kami terima!
                  </motion.p>

                  {/* CTA Button with pulse animation */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                  >
                     <motion.a
                        href={`https://wa.me/6285659565885?text=${encodeURIComponent(whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-lg transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                           boxShadow: [
                           '0 10px 25px rgba(34, 197, 94, 0.3)',
                           '0 10px 35px rgba(34, 197, 94, 0.5)',
                           '0 10px 25px rgba(34, 197, 94, 0.3)',
                           ],
                        }}
                        transition={{
                           boxShadow: {
                           duration: 2,
                           repeat: Infinity,
                           ease: 'easeInOut',
                           },
                        }}
                     >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Hubungi WhatsApp
                     </motion.a>
                  </motion.div>
               </div>

               {/* Broken Phone Illustration with floating animation */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                     opacity: 1, 
                     scale: 1,
                     y: [0, -10, 0],
                  }}
                  transition={{
                     opacity: { duration: 0.5, delay: 0.4 },
                     scale: { duration: 0.5, delay: 0.4 },
                     y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     },
                  }}
                  className="relative"
               >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                     <img
                        src={BrokenPhone}
                        alt="HP Rusak atau Bekas"
                        className="w-full h-auto"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default Hero;