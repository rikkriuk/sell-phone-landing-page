import { Wrench, RefreshCw, Package } from 'lucide-react';
import type { ServiceItem } from '../types/services';

const services: ServiceItem[] = [
   {
      id: 1,
      icon: Wrench,
      title: 'Service HP',
      description: 'Perbaikan semua jenis kerusakan HP dengan teknisi berpengalaman',
      features: ['Ganti LCD', 'Baterai', 'Software', 'Hardware'],
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      isPageServiceAvailable: false,
   },
   {
      id: 2,
      icon: RefreshCw,
      title: 'Jual & Beli HP',
      description: 'Jual HP bekas Anda atau beli HP second berkualitas dengan harga terbaik',
      features: ['Harga Fair', 'Proses Cepat', 'Garansi', 'Pickup Service'],
      color: 'from-orange-600 to-orange-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      highlighted: true,
      isPageServiceAvailable: true,
   },
   {
      id: 3,
      icon: Package,
      title: 'Sparepart Lengkap',
      description: 'Tersedia berbagai sparepart original dan aftermarket berkualitas',
      features: ['LCD Screen', 'Baterai', 'Kamera', 'Konektor'],
      color: 'from-green-600 to-green-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      isPageServiceAvailable: false,
   },
];

export default services;