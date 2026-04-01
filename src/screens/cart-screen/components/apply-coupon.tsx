import React, { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LocalImages } from '../../../assets/images/images';
import { Icons } from '../../../assets/svg/icons';
import CouponCard from '../../../components/coupon';
import { Colors } from '../../../constants/colors';
import { couponData } from '../../../data/mock-data';
import { CouponBO } from '../../../types/product';

const ApplyCoupon = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<number>();

  const renderCouponItem = ({ item }: { item: CouponBO }) => (
    <CouponCard
      isSelected={selectedCoupon === item.id}
      item={item}
      key={item.id}
      onPress={() => setSelectedCoupon(item.id)}
    />
  );
  
  const keyExtractor = useCallback((item: CouponBO) => {
    return item.id.toString();
  }, []);

  return (
    <View style={[styles.descriptionContainer]}>
      <View style={styles.headingWrapper}>
        <SvgXml xml={Icons.offer} fontSize={14} />
        <Text
          style={{
            fontSize: 14,
            color: Colors.secondary,
            fontWeight: '600',
          }}
        >
          Top coupons for you
        </Text>
        <SvgXml xml={Icons.offer} fontSize={14} />
      </View>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <FlatList
          data={couponData}
          renderItem={renderCouponItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{ gap: 6 }}
          horizontal
        />
      </View>
      <View style={styles.couponContainer}>
        <Image
          source={LocalImages.celebration}
          style={{
            height: 14,
            width: 14,
            transform: [{ scaleX: -1 }],
          }}
        />
        <Text
          style={{
            fontSize: 14,
            color: Colors.secondary,
            fontWeight: '400',
          }}
        >
          You are <Text style={{ fontWeight: '800' }}>saving ₹250</Text> with
          this coupon
        </Text>
        <Image
          source={LocalImages.celebration}
          style={{
            height: 14,
            width: 14,
          }}
        />
      </View>
      <View style={styles.viewMoreContainer}>
        <Text
          style={{
            fontSize: 14,
            color: '#989898',
            fontWeight: '600',
          }}
        >
          View more coupons and offers
        </Text>
        <SvgXml
          xml={Icons.leftArrow.replace('#000000', '#989898')}
          fontSize={14}
          style={{ transform: [{ rotate: '180deg' }] }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    height: 41,
    borderStyle: 'dashed',
    borderBottomColor: '#D4D4D4',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderTopWidth: 1,
    height: 41,
    borderStyle: 'dashed',
    borderTopColor: '#D4D4D4',
    paddingTop: 7,
  },
  viewMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    borderTopWidth: 1,
    height: 41,
    borderStyle: 'dashed',
    borderTopColor: '#D4D4D4',
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
});

export default ApplyCoupon;
