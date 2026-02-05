import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { steps } from '../const/howitworks';

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-50px' });
   const Icon = step.icon;

   return (
      <div ref={ref} className="relative">
         {index < steps.length - 1 && (
            <motion.div
               initial={{ scaleX: 0 }}
               animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
               transition={{ duration: 0.5, delay: 0.3 + index * 0.2, ease: 'easeOut' }}
               className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 origin-left"
            >
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-orange-400 border-y-4 border-y-transparent"></div>
            </motion.div>
         )}

         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
               duration: 0.4,
               delay: index * 0.15,
               ease: 'easeOut',
            }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 relative"
         >
            <motion.div
               initial={{ scale: 0 }}
               animate={isInView ? { scale: 1 } : { scale: 0 }}
               transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                  delay: 0.2 + index * 0.15,
               }}
               className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
            >
               <span className="text-white font-bold text-lg">{index + 1}</span>
            </motion.div>

            <div className="pt-4">
               <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
               <p className="text-gray-600 dark:text-slate-300">{step.description}</p>
            </div>
         </motion.div>
      </div>
   );
}

const HowItWorks = () => {
   return (
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               Cara Kerjanya
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
               4 langkah mudah untuk mengubah HP lama jadi uang tunai
            </p>
         </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 relative">
            {steps.map((step, index) => (
               <StepCard key={index} step={step} index={index} />
            ))}
         </div>
         </div>
      </section>
   );
}

export default HowItWorks;