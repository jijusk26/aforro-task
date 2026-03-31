import React from 'react';
import { StyleSheet, Text, View, ViewStyle, Image } from 'react-native';
import { Colors } from '../constants/colors';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';
import Button from './button';
import { ProductBO } from '../types/product';

const ProductCard = ({
  style,
  isSmall = false,
  product,
}: {
  style?: ViewStyle;
  isSmall?: boolean;
  product: ProductBO;
}) => {
  return (
    <View
      style={[
        !isSmall ? styles.container : styles.smallContainer,
        style,
        { position: 'relative' },
      ]}
    >
      {!isSmall ? (
        <View style={{ height: 250 }}></View>
      ) : (
        <View style={{ height: 104, width: 104 }}>
          <Image
            source={product.thumbnail}
            style={{ height: '100%', width: '100%' }}
            resizeMode="contain"
          />
        </View>
      )}
      <View
        style={{
          width: isSmall ? 20 : 40,
          position: 'absolute',
          top: isSmall ? 5 : 12,
          left: isSmall ? 5 : 12,
        }}
      >
        <View
          style={[
            styles.badgeContainer,
            {
              width: isSmall ? 25 : 40,
              height: isSmall ? 25 : 40,
              borderTopLeftRadius: isSmall ? 10 : 12,
              gap: isSmall ? 0 : 2,
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                fontSize: isSmall ? 6 : 12,
              },
            ]}
          >
            50%
          </Text>
          <Text
            style={[
              styles.badgeText,
              {
                fontSize: isSmall ? 6 : 12,
              },
            ]}
          >
            OFF
          </Text>
        </View>
        <SvgXml
          xml={
            isSmall
              ? Icons.badge.replace('41', '25').replace('7', '4')
              : Icons.badge
          }
          fontSize={isSmall ? 24 : 40}
          style={{ width: isSmall ? 24 : 40 }}
        />
      </View>
      <View style={{ gap: 4 }}>
        <Text style={styles.secondaryText}>{product.brand}</Text>
        <Text style={styles.primaryText} numberOfLines={2} ellipsizeMode="tail">
          {product.title}
        </Text>
        <View
          style={[
            styles.priceContainer,
            { flexDirection: isSmall ? 'column' : 'row' },
            isSmall && { gap: 8 },
          ]}
        >
          <View style={[!isSmall && { flex: 1 }]}>
            <Text style={[styles.secondaryText, { fontWeight: '400' }]}>
              {product.weight} g
            </Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Text style={{ color: Colors.primaryText }}>
                ₹{product.offerPrice}
              </Text>
              <Text style={{ color: Colors.secondaryText }}>
                ₹{product.actualPrice}
              </Text>
            </View>
          </View>
          <Button
            title={'2 options'}
            style={{
              width: isSmall ? 100 : 120,
              gap: 3,
              height: isSmall ? 30 : 36,
            }}
          >
            <SvgXml
              xml={Icons.leftArrow.replace('#000000', Colors.background)}
              fontSize={7}
              style={{
                transform: [{ rotate: '270deg' }, { scale: isSmall ? 0.7 : 1 }],
              }}
            />
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: 12,
    elevation: 4,
    gap: 12,
  },
  smallContainer: {
    backgroundColor: Colors.background,
  },
  badgeContainer: {
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 9,
  },
  badgeText: {
    color: Colors.background,
    fontWeight: '600',
  },
});

export default React.memo(ProductCard);
