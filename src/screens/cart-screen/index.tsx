import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../assets/svg/icons';
import Header from '../../components/header';
import ProductCard from '../../components/products-card';
import { platformFee, width } from '../../constants/appconstants';
import { Colors } from '../../constants/colors';
import { fetchSimilarProducts } from '../../services/products';
import { PageProps, ProductBO } from '../../types/product';
import ApplyCoupon from './components/apply-coupon';
import CancellationPolicy from './components/cancellation-policy';
import CartItems from './components/cart-items';
import { Arc } from './components/coupon-image';
import DeliveryInstructions from './components/delivery-instructions';
import PayableAmount from './components/payable-amout';
import Checkout from './components/checkout';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { couponData } from '../../data/mock-data';
import { updateSelectCoupon } from '../../store/reducers/user-slice';
import FullPageLoader from '../../components/loader';

const CartScreen: FC<PageProps> = ({ navigation }) => {
  const [similarProducts, setSimilarProducts] = useState<ProductBO[]>([]);
  const coupon = useSelector((st: RootState) => st.user.isSelectedCoupon);
  const dispatch = useDispatch();
  const selectedCoupon = useMemo(() => {
    return couponData.find(d => d.id === coupon);
  }, [coupon]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    init();
    dispatch(updateSelectCoupon(undefined));
    setLoading(false);
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

  const renderSimilarItems = useCallback(
    ({ item }: { item: ProductBO }) => (
      <ProductCard style={{ width: 104 }} isSmall product={item} />
    ),
    [],
  );

  const keyExtractor = useCallback((item: ProductBO) => {
    return item.id.toString();
  }, []);

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title="Review Cart"
          navigation={navigation}
          onBackPressed={goBack}
        />
        <ScrollView
          contentContainerStyle={{ gap: 16, paddingTop: 16 }}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.descriptionContainer, styles.discountContainer]}>
            <Text style={styles.primaryText}>
              You are saving ₹
              {selectedCoupon?.amount
                ? selectedCoupon?.amount - platformFee
                : 0}{' '}
              with this order!
            </Text>
          </View>
          <View style={[styles.descriptionContainer, styles.delayContainer]}>
            <SvgXml xml={Icons.warning} fontSize={18} />
            <Text style={{ fontSize: 12, color: '#717171', flex: 1 }}>
              Your order might be delayed due to high demand Your order might be
              delayed due to high demand
            </Text>
          </View>
          <CartItems />
          <View style={styles.descriptionContainer}>
            <Text style={styles.primaryText}>Did you forget?</Text>
            <FlatList
              data={similarProducts}
              renderItem={renderSimilarItems}
              horizontal
              contentContainerStyle={{ gap: 12 }}
              keyExtractor={keyExtractor}
            />
          </View>
          <ApplyCoupon />
          <View
            style={[
              styles.descriptionContainer,
              { flexDirection: 'row', gap: 8 },
            ]}
          >
            <Arc />
            <View style={{ flex: 1, gap: 5, justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.primaryText,
                  fontWeight: '600',
                }}
              >
                Add items worth ₹45 more to get 1% cashback
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#ACACAC',
                  fontWeight: '400',
                }}
              >
                No coupon needed
              </Text>
            </View>
          </View>
          <DeliveryInstructions />
          <PayableAmount />
          <CancellationPolicy />
        </ScrollView>
        <Checkout navigation={navigation} />
      </View>
      <FullPageLoader open={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    width: width,
  },
  delayContainer: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: '#FFCD34',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  discountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAF6FC',
    borderWidth: 1,
    borderColor: Colors.background,
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
    marginBottom: 5,
  },
  discountText: {
    color: Colors.secondary,
    fontSize: 12,
    fontWeight: '600',
  },
  chip: {
    flexDirection: 'row',
    gap: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 4,
  },
  chipText: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.primaryText,
  },
});

export default CartScreen;
