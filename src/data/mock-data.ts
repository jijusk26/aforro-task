import { LocalImages } from '../assets/images/images';
import { CouponBO, ProductBO } from '../types/product';

export const SimilarProducts: ProductBO[] = [
  {
    id: 123,
    brand: 'Cadbury',
    actualPrice: 444,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offerPrice: 222,
    title: 'Dairy milk Silk Chocolate Bar Dairy milk Silk Chocolate BarText',
    weight: 64,
    quantity: 3,
    sizeGuage: 'gm',
    thumbnail: LocalImages.chocolate,
    images: [
      LocalImages.chocolate,
      LocalImages.chocolate,
      LocalImages.chocolate,
      LocalImages.tataTea,
      LocalImages.tataTea,
    ],
    options: [
      {
        id: 123,
        price: 200,
        quantity: 250,
        sizeGuage: 'gm',
        actualPrice: 500,
        discount: 50,
      },
    ],
  },
  {
    id: 128,
    brand: 'Cadbury',
    actualPrice: 444,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offerPrice: 222,
    title: 'Dairy milk Silk Chocolate Bar Dairy milk Silk Chocolate BarText',
    weight: 64,
    quantity: 3,
    sizeGuage: 'gm',
    thumbnail: LocalImages.tataTea,
    images: [
      LocalImages.tataTea,
      LocalImages.tataTea,
      LocalImages.chocolate,
      LocalImages.tataTea,
      LocalImages.tataTea,
    ],
    options: [
      {
        id: 123,
        price: 200,
        quantity: 250,
        sizeGuage: 'gm',
        actualPrice: 500,
        discount: 50,
      },
    ],
  },
  {
    id: 124,
    brand: 'Cadbury',
    actualPrice: 444,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offerPrice: 222,
    title: 'Dairy milk Silk Chocolate Bar Dairy milk Silk Chocolate BarText',
    weight: 64,
    quantity: 3,
    sizeGuage: 'gm',
    thumbnail: LocalImages.tataTea,
    images: [
      LocalImages.tataTea,
      LocalImages.tataTea,
      LocalImages.tataTea,
      LocalImages.tataTea,
      LocalImages.tataTea,
    ],
    options: [
      {
        id: 123,
        price: 200,
        quantity: 250,
        sizeGuage: 'gm',
        actualPrice: 500,
        discount: 50,
      },
      {
        id: 125,
        price: 134,
        quantity: 150,
        sizeGuage: 'gm',
        actualPrice: 300,
        discount: 50,
      },
    ],
  },
  {
    id: 125,
    brand: 'Cadbury',
    actualPrice: 444,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offerPrice: 222,
    title: 'Dairy milk Silk Chocolate Bar Dairy milk Silk Chocolate BarText',
    weight: 64,
    quantity: 3,
    sizeGuage: 'gm',
    thumbnail: LocalImages.organicApple,
    images: [
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
    ],
    options: [
      {
        id: 123,
        price: 200,
        quantity: 250,
        sizeGuage: 'gm',
        actualPrice: 500,
        discount: 50,
      },
    ],
  },
  {
    id: 126,
    brand: 'Cadbury',
    actualPrice: 444,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    offerPrice: 222,
    title: 'Dairy milk Silk Chocolate Bar Dairy milk Silk Chocolate BarText',
    weight: 64,
    quantity: 3,
    sizeGuage: 'gm',
    thumbnail: LocalImages.organicApple,
    images: [
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
      LocalImages.organicApple,
    ],
    options: [
      {
        id: 123,
        price: 200,
        quantity: 250,
        sizeGuage: 'gm',
        actualPrice: 500,
        discount: 50,
      },
      {
        id: 125,
        price: 134,
        quantity: 150,
        sizeGuage: 'gm',
        actualPrice: 300,
        discount: 50,
      },
    ],
  },
];

export const Products: ProductBO[] = SimilarProducts;

export const TopSellingProducts: ProductBO[] = SimilarProducts;

export const couponData: CouponBO[] = [
  {
    id: 345,
    amount: 80,
    code: 'ASDFGH',
    description: 'Add items worth ₹20 to avail this offer',
    minAmount: 500,
  },
  {
    id: 355,
    amount: 240,
    code: 'ASDDFH',
    description: 'Upto ₹240 on orders above ₹1200',
    minAmount: 1200,
  },
  {
    id: 349,
    amount: 500,
    code: 'ASDJIH',
    description: 'Upto ₹500 on orders above ₹2500',
    minAmount: 2500,
  },
];
