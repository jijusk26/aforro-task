import React, { useCallback } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';
import { Colors } from '../constants/colors';
import { OptionsBO, ProductBO } from '../types/product';

const OptionsList = ({ product }: { product: ProductBO }) => {
  const renderSimilarItems = ({ item }: { item: OptionsBO }) => (
    <CartItemCard item={item} count={1} thumbImage={product.thumbnail} />
  );

  const keyExtractor = useCallback((item: OptionsBO, index: number) => {
    return item.price.toString() + index;
  }, []);

  return (
    <FlatList
      data={product.options}
      renderItem={renderSimilarItems}
      contentContainerStyle={{ gap: 12 }}
      keyExtractor={keyExtractor}
    />
  );
};
const CartItemCard = ({
  item,
  count,
  thumbImage,
}: {
  item: OptionsBO;
  count: number;
  thumbImage: any;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardIconWrapper}>
        <View style={styles.icon}>
          <Image
            source={thumbImage}
            resizeMode="contain"
            style={{ height: '100%', width: '100%' }}
          />
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.quantityText} numberOfLines={2}>
          {1 + ' x ' + item.quantity + ' ' + item.sizeGuage}
        </Text>
      </View>
      <View style={styles.additionWraper}>
        <View style={styles.actionInnerWrapper}>
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
  additionWraper: {
    borderColor: '#E7E7E7',
    backgroundColor: Colors.background,
    height: 56,
    width: 80,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  actionInnerWrapper: {
    height: 32,
    borderRadius: 8,
    borderColor: '#55913D',
    borderWidth: 1,
    width: 80,
    flexDirection: 'row',
  },
});

export default OptionsList;
