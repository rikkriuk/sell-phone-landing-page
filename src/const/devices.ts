import { Smartphone, Cpu, HardDrive, Wifi, Battery, Monitor, Speaker } from 'lucide-react';

const devices = [
   {
      name: 'Android',
      brands: 'Samsung, Xiaomi, Oppo, Vivo, Realme, dll',
      color: 'from-green-600 to-green-500',
   },
   {
      name: 'iPhone',
      brands: 'Semua seri iPhone dari 6 hingga terbaru',
      color: 'from-gray-800 to-gray-700',
   },
];

const specs = [
   {
      label: 'RAM',
      range: '2GB - 16GB+',
   },
   {
      label: 'Storage',
      range: '16GB - 1TB',
   },
   {
      label: 'Kondisi',
      range: 'Normal atau Rusak',
   },
   ];

   const hardwareIssues = [
   {
      icon: Monitor,
      title: 'LCD / Layar Rusak',
      description: 'Pecah, bergaris, atau mati',
   },
   {
      icon: Battery,
      title: 'Baterai Bermasalah',
      description: 'Bocor, kembung, atau cepat habis',
   },
   {
      icon: HardDrive,
      title: 'Storage Rusak',
      description: 'Memori internal error atau corrupt',
   },
   {
      icon: Cpu,
      title: 'RAM / Processor',
      description: 'Lemot, hang, atau restart sendiri',
   },
   {
      icon: Wifi,
      title: 'Konektivitas',
      description: 'WiFi, Bluetooth, atau sinyal bermasalah',
   },
   {
      icon: Speaker,
      title: 'Audio / Kamera',
      description: 'Speaker, mic, atau kamera tidak berfungsi',
   },
];

export { devices, specs, hardwareIssues };