import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../../constants/colors';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/svg/icons';
import useCart from '../../../hooks/cart';
import {
  deliveryFee,
  deliveryFreeAmount,
  platformFee,
} from '../../../constants/appconstants';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { couponData } from '../../../data/mock-data';

const PayableAmount = () => {
  const { total, payableAmount } = useCart();
  const coupon = useSelector((st: RootState) => st.user.isSelectedCoupon);

  const selectedCoupon = useMemo(() => {
    return couponData.find(d => d.id === coupon);
  }, [coupon]);

  return (
    <View style={styles.descriptionContainer}>
      <View style={{ padding: 12 }}>
        <TextWrapper
          amount={total}
          icon={Icons.money}
          title="Item Total"
          tagText="Saved ₹20"
          style={{ marginVertical: 7 }}
        />
        <View style={{ flexDirection: 'row', gap: 5, marginVertical: 7 }}>
          <View style={{ flex: 1 }}>
            <TextWrapper
              amount={deliveryFee}
              icon={Icons.delivery}
              title="Delivery fee"
              style={{ paddingVertical: 0 }}
            />
            {deliveryFreeAmount > total && (
              <Text
                style={{
                  marginLeft: 16,
                  fontSize: 12,
                  fontWeight: '500',
                  color: Colors.primary + '5a',
                }}
              >
                Add items worth ₹{deliveryFreeAmount - total} to get free
                delivery
              </Text>
            )}
          </View>
          {deliveryFreeAmount < total && (
            <Text style={{ color: Colors.primary }}>FREE</Text>
          )}
        </View>
        <TextWrapper
          amount={selectedCoupon?.amount ?? 0}
          icon={Icons.money}
          title="Discount"
          style={styles.dashedBorder}
        />
        <TextWrapper
          amount={platformFee}
          icon={Icons.tag}
          title="Platform Fee"
          style={styles.dashedBorder}
        />
        <TextWrapper
          amount={payableAmount}
          title="Total payable amount"
          textStyle={{
            fontSize: 14,
            color: Colors.primaryText,
            fontWeight: '600',
          }}
        />
      </View>
      <View style={styles.savingsWrapper}>
        <View style={styles.evenDotsWrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => {
            return <View key={item} style={styles.dots}></View>;
          })}
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text
            style={{ color: Colors.secondary, fontWeight: '600', fontSize: 12 }}
          >
            You are saving ₹
            {selectedCoupon?.amount ? selectedCoupon?.amount - platformFee : 0}{' '}
            with this order!
          </Text>
        </View>
      </View>
    </View>
  );
};

const TextWrapper = ({
  amount,
  icon,
  title,
  style,
  tagText,
  textStyle,
}: {
  icon?: string;
  title: string;
  amount: number;
  style?: ViewStyle;
  tagText?: string;
  textStyle?: TextStyle;
}) => {
  return (
    <View style={[styles.textWrapper, style]}>
      <View style={styles.iconWrapper}>
        {icon && <SvgXml xml={icon} fontSize={14} height={14} width={14} />}
        <Text style={[styles.nuetralText, textStyle]}>{title}</Text>
        {tagText && (
          <View style={styles.tag}>
            <Text style={{ fontSize: 8, color: Colors.primary }}>
              {tagText}
            </Text>
          </View>
        )}
      </View>
      <Text style={[styles.nuetralText, textStyle]}>
        {amount > 0 ? '₹' + amount : '-₹' + Math.abs(amount)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: Colors.background,
    borderRadius: 14,
    marginHorizontal: 16,
    overflow: 'hidden',
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
  nuetralText: {
    color: '#5D5D5D',
    fontSize: 12,
  },
  dashedBorder: {
    borderBottomColor: '#E7E7E7',
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },
  tag: {
    backgroundColor: Colors.primary + '1a',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 10,
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  evenDotsWrapper: {
    height: 16,
    width: '100%',
    position: 'absolute',
    top: -8,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dots: { height: 16, width: 16, borderRadius: 8, backgroundColor: '#DAF6FC' },
  savingsWrapper: {
    backgroundColor: '#DAF6FC',
    height: 42,
    position: 'relative',
    marginTop: 2,
  },
});
export default PayableAmount;
