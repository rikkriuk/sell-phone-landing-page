export interface OurServicesProps {
  onBuySellClick: () => void;
}

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onBuySellClick: () => void;
}

export type ServiceItem = {
   id: number;
   icon: React.ComponentType<any>;
   title: string;
   description: string;
   features: string[];
   color: string;
   bgColor: string;
   iconColor: string;
   highlighted?: boolean;
   isPageServiceAvailable?: boolean;
}