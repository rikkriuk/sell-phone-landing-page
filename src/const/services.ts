import { Wrench, RefreshCw, Package, Smartphone, Battery, Cpu, Wifi } from 'lucide-react';
import type { ServiceItem } from '../types/services';

const services: ServiceItem[] = [
   {
      id: 1,
      icon: Wrench,
      title: 'Service HP',
      description: 'Perbaikan semua jenis kerusakan HP dengan teknisi berpengalaman',
      features: ['Ganti LCD', 'Baterai', 'Software', 'Hardware'],
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      isPageServiceAvailable: false,
   },
   {
      id: 2,
      icon: RefreshCw,
      title: 'Jual & Beli HP',
      description: 'Jual HP bekas Anda atau beli HP second berkualitas dengan harga terbaik',
      features: ['Harga Fair', 'Proses Cepat', 'Garansi', 'Pickup Service'],
      color: 'from-orange-600 to-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
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
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
      isPageServiceAvailable: false,
   },
];

const serviceFeatures = [
   {
      icon: Smartphone,
      text: 'Ganti LCD & Touchscreen',
   },
   {
      icon: Battery,
      text: 'Penggantian Baterai',
   },
   {
      icon: Cpu,
      text: 'Perbaikan Software & Hardware',
   },
   {
      icon: Wifi,
      text: 'Service Sinyal & Konektivitas',
   },
];

const floatingTools = [
   { icon: '🔧', delay: 0 },
   { icon: '🔨', delay: 0.5 },
   { icon: '⚡', delay: 1 },
   { icon: '🛠️', delay: 1.5 },
];

const stats = [
   {
      value: "100+",
      label: "HP Diperbaiki",
      bg: "from-blue-50 dark:from-blue-900/30 to-blue-100 dark:to-blue-800/30",
      text: "text-blue-900 dark:text-blue-300",
   },
   {
      value: "95%",
      label: "Tingkat Sukses",
      bg: "from-orange-50 dark:from-orange-900/30 to-orange-100 dark:to-orange-800/30",
      text: "text-orange-900 dark:text-orange-300",
   },
   {
      value: "30 Hari",
      label: "Garansi Service",
      bg: "from-green-50 dark:from-green-900/30 to-green-100 dark:to-green-800/30",
      text: "text-green-900 dark:text-green-300",
   },
];

export { services, serviceFeatures, floatingTools, stats };