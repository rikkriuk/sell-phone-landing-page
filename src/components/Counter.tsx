import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { shopImages } from '../const/counter';

const CounterHero = () => {
   const [currentImage, setCurrentImage] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImage((prev) => (prev + 1) % shopImages.length);
      }, 4000);

      return () => clearInterval(interval);
   }, []);

   const scrollToLocation = () => {
      const element = document.querySelector('#location');
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
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Content */}
               <div className="text-center lg:text-left">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     className="inline-block"
                  >
                     <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-semibold">Subang, Jawa Barat</span>
                     </div>
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                  >
                     Konter HP Terpercaya di Kota Anda
                  </motion.h1>

                  <motion.p
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     className="text-xl text-gray-600 mb-8"
                  >
                     <span className="text-blue-900 font-semibold">Service</span> • 
                     <span className="text-orange-600 font-semibold"> Jual Beli HP</span> • 
                     <span className="text-blue-900 font-semibold"> Sparepart Lengkap</span>
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     className="grid sm:grid-cols-2 gap-4 mb-8"
                  >
                     <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <Clock className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-left">
                           <p className="text-xs text-gray-500">Buka Setiap Hari</p>
                           <p className="text-sm font-semibold text-gray-900">09:00 - 20:00</p>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                           <p className="text-xs text-gray-500">Hubungi Kami</p>
                           <p className="text-sm font-semibold text-gray-900">+62 812-3456-7890</p>
                        </div>
                     </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     onClick={scrollToLocation}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300 inline-flex items-center gap-2"
                  >
                     <MapPin className="w-5 h-5" />
                     <span>Kunjungi Konter</span>
                     <motion.div
                        animate={{
                           scale: [1, 1.2, 1],
                        }}
                        transition={{
                           duration: 2,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                        className="w-2 h-2 bg-white rounded-full"
                     />
                  </motion.button>
               </div>

               {/* Right Image Carousel */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
               >
                  <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                     {shopImages.map((image, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: currentImage === index ? 1 : 0,
                              scale: currentImage === index ? 1 : 1.1,
                           }}
                           transition={{ duration: 0.7, ease: 'easeInOut' }}
                           className="absolute inset-0"
                        >
                           <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                           />
                        </motion.div>
                     ))}

                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {shopImages.map((_, index) => (
                           <button
                           key={index}
                           onClick={() => setCurrentImage(index)}
                           className={`transition-all duration-300 rounded-full ${
                              currentImage === index
                                 ? 'w-8 h-2 bg-white'
                                 : 'w-2 h-2 bg-white/50'
                           }`}
                           aria-label={`Go to image ${index + 1}`}
                           />
                        ))}
                     </div>

                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <p className="text-sm font-semibold text-gray-900">ARFIX SERVICE HANDPHONE</p>
                     </div>
                  </div>

                  <motion.div
                     animate={{
                        y: [0, -10, 0],
                     }}
                     transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                     className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"
                  />
                  <motion.div
                     animate={{
                        y: [0, 10, 0],
                     }}
                     transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                     }}
                     className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"
                  />

               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default CounterHero;