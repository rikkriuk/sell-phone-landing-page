import { Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { devices, hardwareIssues, specs } from '../const/devices';

const DeviceCard = ({ device, index }: { device: typeof devices[0]; index: number }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ 
            opacity: 1, 
            y: [0, -8, 0],
         }}
         transition={{
            opacity: { duration: 0.5, delay: index * 0.2 },
            y: {
               duration: 2.5,
               delay: index * 0.3,
               repeat: Infinity,
               ease: 'easeInOut',
            },
         }}
         className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-slate-700 text-center"
      >
         <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${device.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
            <Smartphone className="w-10 h-10 text-white" />
         </div>
         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{device.name}</h3>
         <p className="text-gray-600 dark:text-slate-300">{device.brands}</p>
      </motion.div>
   );
}

const HardwareIssueCard = ({ issue, index }: { issue: typeof hardwareIssues[0]; index: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-50px' });
   const Icon = issue.icon;

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 20 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
         transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: 'easeOut',
         }}
         className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
      >
         <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
               <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
               <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{issue.title}</h4>
               <p className="text-sm text-gray-600 dark:text-slate-300">{issue.description}</p>
            </div>
         </div>
      </motion.div>
   );
}

const SupportedDevices = () => {
   const specsRef = useRef(null);
   const isSpecsInView = useInView(specsRef, { once: true, margin: '-100px' });

   return (
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 dark:from-slate-800 to-white dark:to-slate-900 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Perangkat yang Kami Terima
               </h2>
               <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Dari Android hingga iPhone, semua merek kami layani
               </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
               {devices.map((device, index) => (
                  <DeviceCard key={index} device={device} index={index} />
               ))}
            </div>

            <div ref={specsRef} className="mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSpecsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
               >
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                     Spesifikasi yang Kami Terima
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300">
                     Semua spesifikasi, dari entry level hingga flagship
                  </p>
               </motion.div>

               <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {specs.map((spec, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSpecsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{
                           duration: 0.4,
                           delay: index * 0.1,
                           ease: 'easeOut',
                        }}
                        className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-center text-white shadow-lg"
                     >
                        <p className="text-sm text-blue-200 mb-2">{spec.label}</p>
                        <p className="text-xl font-bold">{spec.range}</p>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Hardware Issues */}
            <div>
               <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Masalah Hardware yang Kami Terima
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300">
                  HP rusak? Tidak masalah! Kami tetap beli dengan harga fair
                  </p>
               </div>

               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {hardwareIssues.map((issue, index) => (
                     <HardwareIssueCard key={index} issue={issue} index={index} />
                  ))}
               </div>

               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8 text-center"
               >
                  <p className="text-gray-600 text-lg">
                     <span className="font-semibold text-orange-600 dark:text-orange-400">Bahkan HP mati total?</span>
                     <span className="font-semibold"> Kami tetap tertarik!</span>
                  </p>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default SupportedDevices;