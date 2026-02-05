import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ShoppingCart, ExternalLink, Tag, TrendingUp } from 'lucide-react';
import { products } from '../const/products';

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-50px' });

   return (
      <motion.a
         ref={ref}
         href={product.shopeeUrl}
         target="_blank"
         rel="noopener noreferrer"
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: 'easeOut',
         }}
         whileHover={{ y: -8, transition: { duration: 0.3 } }}
         className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300 block"
      >
         <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-700">
            <img
               src={product.image}
               alt={product.name}
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
         
            {product.badge && (
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
               >
                  {product.badge}
               </motion.div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
               <div className="flex items-center gap-2 text-white font-semibold">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Beli Sekarang</span>
                  <ExternalLink className="w-4 h-4" />
               </div>
            </div>
         </div>

         <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors duration-300">
               {product.name}
            </h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
               {product.description}
            </p>
         
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                  <Tag className="w-4 h-4" />
                  <span className="font-bold">{product.price}</span>
               </div>
               
               <motion.div
                  className="flex items-center gap-1 text-blue-900 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 3 }}
               >
                  <span className="text-sm font-semibold">Lihat di Shopee</span>
                  <ExternalLink className="w-4 h-4" />
               </motion.div>
            </div>
         </div>
      </motion.a>
   );
}

export function Products() {
   const headerRef = useRef(null);
   const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

   return (
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white dark:from-slate-900 to-gray-50 dark:to-slate-800 transition-colors duration-300" id="products">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={headerRef} className="text-center mb-12">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full mb-4"
               >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Spare Parts Original</span>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
               >
                  Produk Sparepart Terlengkap
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto"
               >
                  Dapatkan sparepart berkualitas tinggi untuk perbaikan HP Anda. Semua produk tersedia di toko Shopee kami.
               </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="text-center mt-12"
            >
               <motion.a
                  href="https://shopee.co.id/arf_part"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300"
               >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Kunjungi Toko Shopee Kami</span>
                  <ExternalLink className="w-5 h-5" />
               </motion.a>
               
               <p className="text-sm text-gray-500 dark:text-slate-400 mt-4">
                  &nbsp; ✓ Pengiriman Cepat &nbsp; • &nbsp; ✓ Harga Terjangkau
               </p>
            </motion.div>
         </div>
      </section>
   );
}
