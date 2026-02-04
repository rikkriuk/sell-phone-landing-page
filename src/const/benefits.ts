import { DollarSign, Clock, Shield, Zap, Award, Users } from 'lucide-react';

const benefits = [
   {
      icon: DollarSign,
      title: 'Harga Terbaik',
      description: 'Kami menawarkan harga buyback tertinggi di pasaran untuk HP Anda',
   },
   {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Estimasi harga instan, transaksi selesai dalam 30 menit',
   },
   {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Data pribadi Anda dijamin aman dan terhapus permanen',
   },
   // {
   //    icon: Zap,
   //    title: 'Pembayaran Langsung',
   //    description: 'Transfer bank atau cash on the spot, pilihan ada di tangan Anda',
   // },
   {
      icon: Award,
      title: 'Semua Kondisi',
      description: 'HP rusak, normal, atau bahkan mati total - kami terima semua!',
   },
];

const reasons = [
   {
      icon: Shield,
      title: 'Garansi Service',
      description: 'Semua perbaikan dilengkapi garansi hingga 30 hari',
      color: 'from-blue-500 to-blue-600',
   },
   {
      icon: Users,
      title: 'Teknisi Berpengalaman',
      description: '5+ tahun pengalaman menangani berbagai kerusakan HP',
      color: 'from-green-500 to-green-600',
   },
   {
      icon: DollarSign,
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi, harga jelas sejak awal',
      color: 'from-orange-500 to-orange-600',
   },
   {
      icon: Zap,
      title: 'Proses Cepat',
      description: 'Pengerjaan cepat, sebagian besar selesai dalam 1 hari',
      color: 'from-purple-500 to-purple-600',
   },
   {
      icon: Award,
      title: 'Sparepart Berkualitas',
      description: 'Menggunakan sparepart original dan aftermarket terbaik',
      color: 'from-red-500 to-red-600',
   },
];

export { benefits, reasons };