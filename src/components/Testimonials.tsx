import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../const/testimonials';

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.review}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-900/10">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">Pembeli</p>
        </div>
      </div>
    </motion.div>
  );
}

const CarouselView = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);

      return () => clearInterval(interval);
   }, []);

   return (
      <div className="relative max-w-2xl mx-auto">
         <div className="relative !h-[320px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
               <motion.div
                  key={index}
                  initial={false}
                  animate={{
                     opacity: currentIndex === index ? 1 : 0,
                     x: currentIndex === index ? 0 : currentIndex > index ? -100 : 100,
                     scale: currentIndex === index ? 1 : 0.95,
                  }}
                  transition={{
                     duration: 0.5,
                     ease: 'easeOut',
                  }}
                  className="absolute inset-0"
               >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between">
                     <div>
                        <div className="flex gap-1 mb-4">
                           {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                           ))}
                        </div>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                           "{testimonial.review}"
                        </p>
                     </div>

                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-900/10">
                           <img
                              src={testimonial.photo}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                           <p className="text-sm text-gray-500">Pembeli</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                     ? 'bg-orange-500 w-8'
                     : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
               />
            ))}
         </div>
      </div>
   );
}

const Testimonials = () => {
   const [viewMode] = useState<'grid' | 'carousel'>('carousel');

   return (
      <section className="py-16 sm:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
               Apa Kata Pelanggan Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Ribuan pelanggan puas telah mempercayai kami
            </p>
         </div>

         {viewMode === 'carousel' ? (
            <CarouselView />
         ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {testimonials.map((testimonial, index) => (
               <TestimonialCard key={index} testimonial={testimonial} index={index} />
               ))}
            </div>
         )}
         </div>
      </section>
   );
}

export default Testimonials;