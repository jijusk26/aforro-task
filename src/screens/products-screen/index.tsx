import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Colors } from '../../constants/colors';
import Header from '../../components/header';
import { width } from '../../constants/appconstants';
import ProductCard from '../../components/products-card';
import { PageProps, ProductBO } from '../../types/product';
import {
  fetchProducts,
  fetchSimilarProducts,
  fetchTopSellingProducts,
} from '../../services/products';
import { Icons } from '../../assets/svg/icons';
import Button from '../../components/button';
import useCart from '../../hooks/cart';

const ProductDetailPage: FC<PageProps> = ({ navigation }) => {
  const [product, setProduct] = useState<ProductBO>();
  const [similiarProducts, setSimilarProducts] = useState<ProductBO[]>([]);
  const [topSellingProducts, setTopSellingProducts] = useState<ProductBO[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const [currentProduct, similar, topSelling] = await Promise.all([
        getProduct(123),
        getSimilarProducts(),
        getTopSellingProducts(),
      ]);

      setProduct(currentProduct);
      setSimilarProducts(similar);
      setTopSellingProducts(topSelling);
    } catch (error) {
      console.log('Init error:', error);
    }
  };

  const getProduct = async (id: number) => {
    try {
      const response = await fetchProducts(id);
      return response;
    } catch (error) {
      return undefined;
    }
  };

  const getSimilarProducts = async () => {
    try {
      const response = await fetchSimilarProducts();
      return response;
    } catch (error) {
      return [];
    }
  };

  const getTopSellingProducts = async () => {
    try {
      const response = await fetchTopSellingProducts();
      return response;
    } catch (error) {
      return [];
    }
  };

  const renderSimilarItems = useCallback(
    ({ item }: { item: ProductBO }) => (
      <ProductCard style={{ width: 104 }} isSmall product={item} />
    ),
    [],
  );

  const keyExtractor = useCallback((item: ProductBO) => {
    return item.id.toString();
  }, []);

  const onPressBuy = async () => {
    try {
      if (product) {
        const response = await addToCart(
          { count: 1, id: product?.id, optionId: product?.options?.[0].id },
          true,
        );
        navigation.navigate('Cart');
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Header title={product?.title} secondaryIcon={Icons.share} />
      <ScrollView
        contentContainerStyle={{ gap: 16 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
          {product && <ProductCard product={product} />}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.primaryText}>Similiar products</Text>
          <FlatList
            data={similiarProducts}
            renderItem={renderSimilarItems}
            horizontal
            contentContainerStyle={{ gap: 12 }}
            keyExtractor={keyExtractor}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.primaryText}>Description</Text>
          <Text style={styles.secondaryText}>{product?.description}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.primaryText}>Customers also bought</Text>
          <FlatList
            data={topSellingProducts}
            renderItem={renderSimilarItems}
            horizontal
            contentContainerStyle={{ gap: 12 }}
            keyExtractor={keyExtractor}
          />
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: Colors.background,
        }}
      >
        <View style={{ flex: 1, gap: 3 }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: '#C0C0C0' }}>
            To Pay
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#1B1C1E' }}>
            ₹{product?.offerPrice}
          </Text>
        </View>
        <Button
          title={'Buy'}
          style={{ width: 140 }}
          onPress={onPressBuy}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    width: width,
  },
  text: {
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: '800',
  },
  descriptionContainer: {
    backgroundColor: Colors.background,
    elevation: 4,
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 12,
    gap: 8,
  },
  secondaryText: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '600',
  },
  primaryText: {
    color: Colors.primaryText,
    fontSize: 14,
    fontWeight: '600',
  },
});
export default ProductDetailPage;
