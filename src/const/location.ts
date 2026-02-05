import { MapPin, Phone, Clock } from 'lucide-react';
import type { LocationItem } from '../types/location';

export const locationItems: LocationItem[] = [
   {
      id: 'address',
      icon: MapPin,
      title: 'Alamat',
      description: 'Jl. Palasari No.27, Palasari, Kec. Ciater, Subang, Jawa Barat 41281',
      buttonText: 'Lihat di Google Maps',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
      type: 'address',
      url: 'https://maps.google.com/?q=Palasari+Ciater+Subang',
   },
   {
      id: 'whatsapp',
      icon: Phone,
      title: 'WhatsApp',
      description: '+62 856-5956-5885',
      buttonText: 'Klik untuk chat langsung',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
      type: 'whatsapp',
      url: 'https://wa.me/6285659565885',
   },
   {
      id: 'hours',
      icon: Clock,
      title: 'Jam Operasional',
      description: 'Setiap hari: 08:00 - 22:00',
      subDescription: '* Pickup service available 24/7',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      type: 'hours',
   },
];
