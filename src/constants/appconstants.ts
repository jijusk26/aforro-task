import { Dimensions } from 'react-native';
import { Icons } from '../assets/svg/icons';
import { InstructionsBO } from '../types/product';

export const { width, height } = Dimensions.get('screen');

export const deliveryFreeAmount = 500;
export const deliveryFee = 60;
export const platformFee = 40;

export const deliveryInstructions: InstructionsBO[] = [
  {
    id: 1234,
    title: 'Don’t ring the bell',
    icon: Icons.hideNotification,
  },
  { id: 1235, title: 'Don’t Call', icon: Icons.noCalls },
  { id: 1236, title: 'Leave order with guard', icon: Icons.guard },
];
