import { ImageSourcePropType } from 'react-native';

export interface PageProps {
  navigation: any;
  route: any;
}

export interface OptionsBO {
  id: number;
  quantity: number;
  sizeGuage: 'gm' | 'kg' | 'lr';
  price: number;
  actualPrice: number;
  discount: number;
}

export interface ProductBO {
  id: number;
  brand: string;
  title: string;
  description: string;
  weight: number;
  offerPrice: number;
  actualPrice: number;
  thumbnail?: ImageSourcePropType;
  images: ImageSourcePropType[];
  quantity: number;
  sizeGuage: 'gm' | 'kg' | 'lr';
  options: OptionsBO[];
}

export interface InstructionsBO {
  id: number;
  title: string;
  icon: string;
}

export interface CouponBO {
  id: number;
  amount: number;
  description: string;
  code: string;
  minAmount: number;
}
