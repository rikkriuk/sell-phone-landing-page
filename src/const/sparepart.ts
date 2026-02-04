import LCDSreenImage from '../assets/lcd.jpg';
import BateraiImage from '../assets/phone-battrey.jpg';
import CameraImage from '../assets/camera.jpg';
import SpeakerImage from '../assets/phone-speaker.jpg';
import ConnectorImage from '../assets/phone-connector.webp';
import VolumeImage from '../assets/phone-volume.jpg';

const spareParts = [
   {
      id: 1,
      name: 'LCD Screen',
      image: LCDSreenImage,
   },
   {
      id: 2,
      name: 'Baterai',
      image: BateraiImage,
   },
   {
      id: 3,
      name: 'Kamera',
      image: CameraImage,
   },
   {
      id: 4,
      name: 'Speaker',
      image: SpeakerImage,
   },
   {
      id: 5,
      name: 'Konektor',
      image: ConnectorImage,
   },
   {
      id: 6,
      name: 'Tombol',
      image: VolumeImage,
   },
];

const infoCards = [
   {
      title: 'Original & Aftermarket',
      description: 'Pilihan sparepart sesuai budget Anda',
   },
   {
      title: 'Bergaransi',
      description: 'Semua sparepart dilengkapi garansi',
   },
   {
      title: 'Stok Lengkap',
      description: 'Sparepart untuk semua merek HP',
   },
]

export { spareParts, infoCards };