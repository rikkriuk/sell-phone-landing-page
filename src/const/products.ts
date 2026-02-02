import LCD from "../assets/lcd.jpg";
import Battery from "../assets/phone-battrey.jpg";
import Connector from "../assets/phone-connector.webp";
import Volume from "../assets/phone-volume.jpg";
import Camera from "../assets/camera.jpg";
import Speaker from "../assets/phone-speaker.jpg";

const products = [
   {
      id: 1,
      name: 'LCD Screen',
      description: 'Layar LCD original & aftermarket untuk berbagai tipe HP',
      price: 'Mulai Rp 100.000',
      image: LCD,
      shopeeUrl: 'https://shopee.co.id/arf_part',
      badge: 'Populer',
      badgeColor: 'bg-orange-500',
   },
   {
      id: 2,
      name: 'Baterai HP',
      description: 'Baterai original dengan untuk semua merek',
      price: 'Mulai Rp 80.000',
      image: Battery,
      shopeeUrl: 'https://shopee.co.id/arf_part',
      badge: 'Terbaik',
      badgeColor: 'bg-green-500',
   },
   {
      id: 3,
      name: 'Konektor & Kabel Flexibel',
      description: 'Konektor charging, audio jack, dan kabel fleksibel',
      price: 'Mulai Rp 20.000',
      image: Connector,
      shopeeUrl: 'https://shopee.co.id/arf_part',
   },
   {
      id: 4,
      name: 'Tombol Volume & Power',
      description: 'Tombol power, volume, dan home button berbagai tipe',
      price: 'Mulai Rp 10.000',
      image: Volume,
      shopeeUrl: 'https://shopee.co.id/arf_part',
   },
   {
      id: 5,
      name: 'Kamera Belakang & Depan',
      description: 'Modul kamera original untuk hasil foto maksimal',
      price: 'Mulai Rp 100.000',
      image: Camera,
      shopeeUrl: 'https://shopee.co.id/arf_part',
      badge: 'Baru',
      badgeColor: 'bg-blue-500',
   },
   {
      id: 6,
      name: 'Speaker & Microphone',
      description: 'Speaker buzzer, earpiece, dan mic berkualitas tinggi',
      price: 'Mulai Rp 20.000',
      image: Speaker,
      shopeeUrl: 'https://shopee.co.id/arf_part',
   },
];

export { products };