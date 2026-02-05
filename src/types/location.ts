import type { LucideProps } from "lucide-react";

export interface LocationItem {
   id: string;
   icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
   title: string;
   description: string;
   subDescription?: string;
   buttonText?: string;
   bgColor: string;
   iconColor: string;
   type: 'address' | 'whatsapp' | 'hours';
   url?: string; 
}