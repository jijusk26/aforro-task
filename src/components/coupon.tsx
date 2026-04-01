import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';
import { CouponBO } from '../types/product';

const CouponCard = ({
  isSelected,
  item,
  enable = true,
  onPress,
}: {
  isSelected: boolean;
  item: CouponBO;
  enable?: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.offerWraper}>
        <Text style={styles.offText}>₹{item.amount}</Text>
        <Text style={styles.offText}>OFF</Text>
      </View>
      <View style={styles.innerWrapper}>
        <View style={{ flex: 1, position: 'relative' }}>
          <View
            style={[
              styles.dotContainer,
              {
                left: 0,
                transform: [{ translateX: -8 }, { rotate: '140deg' }],
              },
            ]}
          ></View>
          <View
            style={[
              styles.dotContainer,
              {
                right: -8,
                transform: [{ rotate: '325deg' }],
              },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.detailsWrapper}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Text style={styles.descriptionText} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.codeText}>{item.code}</Text>
        </View>
        <View
          style={[
            {
              height: 34,
              backgroundColor: isSelected ? Colors.primary : Colors.background,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
            },
            !isSelected && {
              borderTopColor: '#D4D4D4',
              borderTopWidth: 1,
              borderStyle: 'dashed',
            },
          ]}
        >
          {isSelected && <SvgXml xml={Icons.tick} height={11} width={11} />}
          <Text
            style={{
              color: isSelected
                ? Colors.background
                : enable
                ? Colors.primary
                : Colors.primary + '5a',
              fontSize: 11,
              fontWeight: '600',
            }}
          >
            {!isSelected ? 'APPLY' : 'APPLIED'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 100,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  offerWraper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    top: 5,
    left: 28,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offText: { color: Colors.background, fontSize: 10, fontWeight: '600' },
  innerWrapper: {
    height: 16,
    position: 'absolute',
    bottom: 28,
    zIndex: 12,
    width: '100%',
  },
  dotContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.background,
    position: 'absolute',
    borderColor: '#E7E7E7',
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  detailsWrapper: {
    height: 124,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E7E7E7',
    overflow: 'hidden',
    position: 'relative',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  descriptionText: {
    fontSize: 8,
    textAlign: 'center',
    width: '80%',
    marginTop: 10,
    color: '#989898',
    fontWeight: '600',
  },
  codeText: { fontSize: 11, fontWeight: '600', color: Colors.primaryText },
});

export default CouponCard;
