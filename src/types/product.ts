import { ImageSourcePropType } from 'react-native';

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
}
