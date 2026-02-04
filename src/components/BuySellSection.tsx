import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { BuySellSectionProps } from '../types/buysell';
import { benefits } from '../const/benefits';
import { ArrowRight } from 'lucide-react';

const BuySellSection = ({ onViewBuybackPage }: BuySellSectionProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   return (
      <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">

         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
               >
                  <span className="text-lg font-bold">🔥 Layanan Unggulan</span>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
               >
                  Jual & Beli HP Bekas
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
               >
                  Upgrade HP lama Anda dengan mudah dan dapatkan harga terbaik. Proses cepat, aman, dan terpercaya!
               </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                     >
                        <motion.div
                           whileHover={{ scale: 1.1, rotate: 5 }}
                           transition={{ duration: 0.3 }}
                           className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
                        >
                           <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                     </motion.div>
                  );
               })}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 0.5, delay: 0.7 }}
               className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl" />

               <div className="relative z-10 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Siap Menjual HP Bekas Anda?
                  </h3>
                  <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Dapatkan penawaran harga instan untuk HP Anda. Proses mudah, cepat, dan transparan. Kami terima semua kondisi HP!
                  </p>

                  <motion.button
                     onClick={onViewBuybackPage}
                     whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)',
                     }}
                     whileTap={{ scale: 0.95 }}
                     className="inline-flex cursor-pointer items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                     <span>Jual HP Sekarang</span>
                     <motion.div
                        animate={{
                           x: [0, 5, 0],
                        }}
                        transition={{
                           duration: 1.5,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                     >
                        <ArrowRight className="w-6 h-6" />
                     </motion.div>
                  </motion.button>

                  <p className="text-sm text-blue-200 mt-6">
                     ✓ Gratis konsultasi &nbsp; • &nbsp; ✓ Harga transparan &nbsp; • &nbsp; ✓ Bayar langsung
                  </p>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}
               className="text-center mt-8"
            >
               <p className="text-gray-600">
                  <span className="font-semibold text-orange-600">Mau beli HP second berkualitas?</span> Kami juga menyediakan HP bekas terawat dengan garansi
               </p>
            </motion.div>
         </div>
      </section>
   );
}

export default BuySellSection;