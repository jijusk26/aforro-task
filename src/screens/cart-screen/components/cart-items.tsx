import React, { useCallback, useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/svg/icons';
import { Colors } from '../../../constants/colors';
import { fetchSimilarProducts } from '../../../services/products';
import { ProductBO } from '../../../types/product';

const CartItems = () => {
  const [similarProducts, setSimilarProducts] = useState<ProductBO[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const [products] = await Promise.all([getSimilarProducts()]);

      setSimilarProducts(products);
    } catch (error) {
      console.log('Init error:', error);
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

  const renderSimilarItems = ({ item }: { item: ProductBO }) => (
    <CartItemCard item={item} count={1} />
  );

  const keyExtractor = useCallback((item: ProductBO) => {
    return item.id.toString();
  }, []);

  return (
    <View style={styles.descriptionContainer}>
      <FlatList
        data={similarProducts}
        renderItem={renderSimilarItems}
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const CartItemCard = ({ item, count }: { item: ProductBO; count: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardIconWrapper}>
        <View style={styles.icon}>
          <Image
            source={item.thumbnail}
            resizeMode="contain"
            style={{ height: '100%', width: '100%' }}
          />
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.descriptionText} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.quantityText} numberOfLines={2}>
          {item.quantity + ' x ' + item.weight + item.sizeGuage}
        </Text>
      </View>
      <View
        style={{
          borderColor: '#E7E7E7',
          backgroundColor: Colors.background,
          height: 56,
          width: 80,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <View
          style={{
            height: 32,
            borderRadius: 8,
            borderColor: '#55913D',
            borderWidth: 1,
            width: 80,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <SvgXml xml={Icons.minues} width={12} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 12, fontWeight: '600', color: '#55913D' }}>
              {count}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <SvgXml xml={Icons.plsu} width={12} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 6 }}>
          <Text
            style={{
              fontSize: 14,
              color: Colors.primaryText,
              fontWeight: '600',
            }}
          >
            ₹{item.offerPrice}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.border,
              fontWeight: '500',
              textDecorationLine: 'line-through',
            }}
          >
            ₹{item.actualPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: Colors.background,
    elevation: 4,
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 12,
    gap: 8,
  },
  container: { height: 56, flexDirection: 'row' },
  cardIconWrapper: {
    borderColor: '#E7E7E7',
    backgroundColor: Colors.background,
    height: 56,
    width: 56,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 4,
    gap: 7,
  },
  descriptionText: {
    color: '#5D5D5D',
    width: '90%',
    fontWeight: '600',
    fontSize: 12,
  },
  quantityText: {
    color: '#C0C0C0',
    width: '90%',
    fontWeight: '400',
    fontSize: 11,
  },
});

export default CartItems;
