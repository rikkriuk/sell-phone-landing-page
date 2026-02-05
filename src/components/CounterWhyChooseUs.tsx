import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { reasons } from '../const/benefits';

const CounterWhyChooseUs = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   return (
      <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 dark:from-slate-800 to-white dark:to-slate-900 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
               >
                  Mengapa Pilih Konter Kami?
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto"
               >
                  Komitmen kami untuk memberikan layanan terbaik bagi pelanggan
               </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {reasons.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={
                           isInView
                           ? { opacity: 1, y: 0, scale: 1 }
                           : { opacity: 0, y: 30, scale: 0.95 }
                        }
                        transition={{
                           duration: 0.4,
                           delay: index * 0.1,
                           ease: 'easeOut',
                        }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
                     >
                        <motion.div
                           initial={{ scale: 0 }}
                           animate={isInView ? { scale: 1 } : { scale: 0 }}
                           transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                           whileHover={{ scale: 1.1, rotate: 10 }}
                           className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        >
                           <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                           {reason.title}
                        </h3>
                        <p className="text-gray-600 dark:text-slate-300">{reason.description}</p>
                     </motion.div>
                  );
               })}

               <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={
                  isInView
                     ? { opacity: 1, y: 0, scale: 1 }
                     : { opacity: 0, y: 30, scale: 0.95 }
                  }
                  transition={{
                     duration: 0.4,
                     delay: reasons.length * 0.1,
                     ease: 'easeOut',
                  }}
                  className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 shadow-xl text-white flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1"
               >
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold mb-3">Dipercaya 100+</h3>
                  <p className="text-blue-100 mb-4">Pelanggan di Subang & sekitarnya</p>

                  <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                        <motion.span
                           key={i}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                           transition={{ delay: reasons.length * 0.1 + 0.3 + i * 0.1 }}
                           className="text-2xl"
                        >
                           ⭐
                        </motion.span>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default CounterWhyChooseUs;