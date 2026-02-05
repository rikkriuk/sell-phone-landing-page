import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { benefits } from '../const/benefits';

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const Icon = benefit.icon;

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
         }}
         className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700"
      >
         <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-4"
         >
            <Icon className="w-7 h-7 text-white" />
         </motion.div>
         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
         <p className="text-gray-600 dark:text-slate-300">{benefit.description}</p>
      </motion.div>
   );
}

const WhyChooseUs = () => {
   return (
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Kenapa Pilih Kami?
               </h2>
               <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Pengalaman jual beli HP bekas yang mudah, cepat, dan menguntungkan
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {benefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default WhyChooseUs;