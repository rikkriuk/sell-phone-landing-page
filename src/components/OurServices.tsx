import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { OurServicesProps, ServiceCardProps } from '../types/services';
import services from '../const/services';

const ServiceCard = ({ service, index, onBuySellClick }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.4,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
        service.highlighted
          ? 'border-orange-500 shadow-orange-100'
          : 'border-gray-100 hover:border-gray-200'
      } transition-all duration-300`}
    >
      {service.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
          Layanan Unggulan
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6">
        {service.description}
      </p>

      <div className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.15 + 0.2 + idx * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
            <span className="text-sm text-gray-700">{feature}</span>
          </motion.div>
        ))}
      </div>

      {service.highlighted && service.isPageServiceAvailable && (
        <motion.button
          onClick={onBuySellClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Jual HP Sekarang
        </motion.button>
      )}
        {/* <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
          Lihat Detail
        </button> */}
    </motion.div>
  );
}

const OurServices = ({ onBuySellClick }: OurServicesProps) => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headerRef} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Layanan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Solusi lengkap untuk segala kebutuhan smartphone Anda
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onBuySellClick={onBuySellClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { OurServices };