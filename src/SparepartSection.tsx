import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { infoCards, spareParts } from './const/sparepart';

const SparepartSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   const scrollToProducts = () => {
      const element = document.querySelector('#products');
      if (element) {
         const headerOffset = 80;
         const elementPosition = element.getBoundingClientRect().top;
         const offsetPosition = elementPosition + window.scrollY - headerOffset;

         window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth',
         });
      }
   };

   return (
      <section ref={ref} className="py-16 sm:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6"
               >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="font-semibold">Sparepart Original</span>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
               >
                  Sparepart Lengkap & Berkualitas
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
               >
                  Tersedia berbagai sparepart original dan aftermarket untuk semua tipe HP
               </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
               {spareParts.map((part, index) => (
                  <motion.div
                     key={part.id}
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                     transition={{ duration: 0.4, delay: index * 0.1 }}
                     className="group"
                  >
                     <motion.div
                        animate={{
                           y: [0, -8, 0],
                        }}
                        transition={{
                           duration: 3,
                           delay: index * 0.2,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                        className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                     >
                        <div className="relative h-32 overflow-hidden">
                           <img
                              src={part.image}
                              alt={part.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-3 text-center">
                           <p className="font-semibold text-gray-900 text-sm">{part.name}</p>
                        </div>
                     </motion.div>
                  </motion.div>
               ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
               {infoCards.map((info, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                     className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center"
                  >
                     <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                     <p className="text-sm text-gray-600">{info.description}</p>
                  </motion.div>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5, delay: 0.9 }}
               className="text-center"
            >
               <motion.a
                  onClick={scrollToProducts}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://shopee.co.id/arf_part"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300"
               >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Lihat Semua Produk</span>
                  <ExternalLink className="w-5 h-5" />
               </motion.a>
               <p className="text-sm text-gray-500 mt-4">
                  Belanja online di Shopee atau kunjungi toko kami langsung
               </p>
            </motion.div>
         </div>
      </section>
   );
}

export default SparepartSection;