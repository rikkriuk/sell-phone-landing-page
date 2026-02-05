import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Smartphone, Check } from 'lucide-react';
import { floatingTools, serviceFeatures, stats } from '../const/services';
import PhoneTechImage from '../assets/phone-techniker.webp';

const ServiceSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   return (
      <section ref={ref} className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
               >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img
                        src={PhoneTechImage}
                        alt="Teknisi Profesional"
                        className="w-full h-[400px] object-cover"
                     />
                  
                     {floatingTools.map((tool, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={
                           isInView
                              ? {
                                 opacity: 1,
                                 scale: 1,
                                 y: [0, -15, 0],
                                 }
                              : { opacity: 0, scale: 0 }
                           }
                           transition={{
                              opacity: { delay: tool.delay, duration: 0.3 },
                              scale: { delay: tool.delay, duration: 0.3 },
                              y: {
                                 delay: tool.delay + 0.5,
                                 duration: 2.5,
                                 repeat: Infinity,
                                 ease: 'easeInOut',
                              },
                           }}
                           className="absolute bg-white dark:bg-slate-700 rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl"
                           style={{
                              top: `${20 + index * 20}%`,
                              right: `${10 + (index % 2) * 10}%`,
                           }}
                        >
                           {tool.icon}
                        </motion.div>
                     ))}
                  </div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                     transition={{ delay: 0.3, duration: 0.4 }}
                     className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white px-6 py-4 rounded-2xl shadow-xl"
                  >
                     <p className="text-sm font-semibold">Teknisi Berpengalaman</p>
                     <p className="text-2xl font-bold">5+ Tahun</p>
                  </motion.div>
               </motion.div>

               <div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.5 }}
                     className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full mb-6"
                  >
                  <Smartphone className="w-4 h-4" />
                     <span className="font-semibold">Service Profesional</span>
                  </motion.div>

                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                  >
                     Perbaikan HP Profesional & Terpercaya
                  </motion.h2>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     className="text-lg text-gray-600 dark:text-slate-300 mb-8"
                  >
                     Teknisi berpengalaman siap menangani semua jenis kerusakan HP Anda dengan cepat dan bergaransi.
                  </motion.p>

                  <div className="space-y-4 mb-8">
                     {serviceFeatures.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                           <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                              className="flex items-center gap-4 bg-gray-50 dark:bg-slate-800 rounded-xl p-4 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-300"
                           >
                              <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                                 <FeatureIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <span className="font-semibold text-gray-900 dark:text-white">{feature.text}</span>
                              <Check className="w-5 h-5 text-green-600 dark:text-green-400 ml-auto" />
                           </motion.div>
                        );
                     })}
                  </div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.5, delay: 0.7 }}
                     className="grid grid-cols-3 gap-4"
                  >
                     {
                        stats.map((stat, index) => (
                           <div key={index} className={`text-center p-4 bg-gradient-to-br ${stat.bg} rounded-xl`}>
                              <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
                              <p className="text-xs text-gray-600 dark:text-slate-400">{stat.label}</p>
                           </div>
                        ))
                     }
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ServiceSection;