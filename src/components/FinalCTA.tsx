import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const FinalCTA = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
         <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
         >
            <motion.div
               animate={{
                  background: [
                  'linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%)',
                  'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
                  'linear-gradient(135deg, #1e3a8a 0%, #ea580c 100%)',
                  ],
               }}
               transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
               className="absolute inset-0"
            />
         </motion.div>

         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Siap Menjual HP Lama atau Rusak Anda?
               </h2>
               <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Dapatkan penawaran terbaik hari ini. Gratis konsultasi, tanpa komitmen!
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
               transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            >
               <motion.a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full text-lg font-bold shadow-2xl transition-colors duration-300 hover:bg-gray-50"
                  whileHover={{ 
                     scale: 1.05,
                     y: -5,
                     boxShadow: '0 20px 50px rgba(255, 255, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                     boxShadow: [
                        '0 15px 40px rgba(255, 255, 255, 0.2)',
                        '0 20px 60px rgba(255, 255, 255, 0.4)',
                        '0 15px 40px rgba(255, 255, 255, 0.2)',
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
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat via WhatsApp Sekarang
               </motion.a>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}
               className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
            >
               <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Transaksi Aman</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Harga Kompetitif</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Proses Cepat</span>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

export default FinalCTA;
