import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { whatsappText } from '../const/text';

const Location = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   const address = 'Jl. Palasari II, Palasari, Ciater, Subang, West Java 41281';
   const businessName = 'ARFIX SERVICE HANDPHONE';
   const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessName + ', ' + address)}`;

   return (
      <section ref={ref} className="py-16 sm:py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5 }}
               className="text-center mb-12"
            >
               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Lokasi Kami
               </h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Kunjungi toko kami atau hubungi untuk pickup service
               </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px] lg:h-[500px]"
               >
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.76385!3d-6.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693d4b6c8f8b8b%3A0x4e65e7c8f6a7e8c8!2sPalasari%2C%20Ciater%2C%20Subang%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Location Map"
                  ></iframe>
                  
                  <motion.a
                     href={mapsUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-800 transition-colors duration-300"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                  <Navigation className="w-4 h-4" />
                     <span className="text-sm font-semibold">Buka di Maps</span>
                  </motion.a>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6"
               >
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                     <h3 className="text-2xl font-bold mb-2">{businessName}</h3>
                     <p className="text-blue-100">Layanan Jual Beli HP Bekas Terpercaya</p>
                  </div>

                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                     className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-orange-600" />
                     </div>
                     <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                        <p className="text-gray-600 leading-relaxed">{address}</p>
                        <a
                           href={mapsUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-1 text-blue-900 hover:text-blue-700 font-semibold mt-3 transition-colors duration-300"
                        >
                           Lihat di Google Maps
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                        </a>
                     </div>
                  </div>
                  </motion.div>

                  <motion.a
                     href={`https://wa.me/6285659565885?text=${encodeURIComponent(whatsappText)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                     className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 block"
                  >
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                           <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                           <p className="text-gray-600">+62 856-5956-5885</p>
                           <p className="text-sm text-green-600 font-semibold mt-1">Klik untuk chat langsung</p>
                        </div>
                     </div>
                  </motion.a>

                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                     className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                           <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                           <div className="space-y-1 text-gray-600">
                           <p>Setiap hari: 08:00 - 22:00</p>
                           <p className="text-sm text-orange-600 font-semibold mt-2">
                              * Pickup service available 24/7
                           </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default Location;