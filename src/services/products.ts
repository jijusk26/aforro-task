import {
  Products,
  SimilarProducts,
  TopSellingProducts,
} from '../data/mock-data';

export const fetchProducts = async (id: number) => {
  try {
    const p = Products.find(pd => pd.id === id);
    return p;
  } catch (error) {
    undefined;
  }
};

export const fetchSimilarProducts = async () => {
  try {
    return SimilarProducts;
  } catch (error) {
    return [];
  }
};

export const fetchTopSellingProducts = async () => {
  try {
    return TopSellingProducts;
  } catch (error) {
    return [];
  }
};
