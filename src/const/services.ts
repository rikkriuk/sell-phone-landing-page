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
      bg: "from-blue-50 to-blue-100",
      text: "text-blue-900",
   },
   {
      value: "95%",
      label: "Tingkat Sukses",
      bg: "from-orange-50 to-orange-100",
      text: "text-orange-900",
   },
   {
      value: "30 Hari",
      label: "Garansi Service",
      bg: "from-green-50 to-green-100",
      text: "text-green-900",
   },
];

export { services, serviceFeatures, floatingTools, stats };