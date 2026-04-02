import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { Colors } from '../constants/colors';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';
import Button from './button';
import { OptionsBO, ProductBO } from '../types/product';
import { width } from '../constants/appconstants';
import OptionsList from './options-list';
import useCart from '../hooks/cart';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const ProductCard = ({
  style,
  isSmall = false,
  product,
}: {
  style?: ViewStyle;
  isSmall?: boolean;
  product: ProductBO;
}) => {
  const [viewOptions, setViewOptions] = useState<boolean>(false);
  const [option, setOption] = useState<OptionsBO>(product.options?.[0]);
  const { addToCart } = useCart();
  const progress = useSharedValue(0);

  useEffect(() => {
    setOption(product.options?.[0]);
  }, [product]);

  return (
    <>
      <View
        style={[
          !isSmall ? styles.container : styles.smallContainer,
          style,
          { position: 'relative' },
        ]}
      >
        {!isSmall ? (
          <View
            style={{
              height: 250,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Carousel
              loop
              width={width - 100}
              height={200}
              data={product.images}
              pagingEnabled
              autoPlay={false}
              scrollAnimationDuration={800}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image
                    source={item}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
              )}
              onProgressChange={(_, absoluteProgress) => {
                progress.value = absoluteProgress;
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 8,
              }}
            >
              {product.images.map((_, index) => (
                <Dot key={index} index={index} progress={progress} />
              ))}
            </View>
          </View>
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
              {option.discount}%
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
          <Text
            style={styles.primaryText}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
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
                {option.quantity + ' ' + option.sizeGuage}
              </Text>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ color: Colors.primaryText }}>
                  ₹{option.price}
                </Text>
                <Text style={{ color: Colors.secondaryText }}>
                  ₹{option.actualPrice}
                </Text>
              </View>
            </View>
            <Button
              title={
                product.options.length > 1
                  ? product.options.length + ' options'
                  : 'Add'
              }
              style={{
                width: isSmall ? 100 : 120,
                gap: 3,
                height: isSmall ? 30 : 36,
              }}
              onPress={() => {
                if (product.options.length > 1) {
                  setViewOptions(true);
                } else {
                  addToCart(
                    { count: 1, id: product.id, optionId: option.id },
                    true,
                  );
                }
              }}
            >
              {product.options.length > 1 && (
                <SvgXml
                  xml={Icons.leftArrow.replace('#000000', Colors.background)}
                  fontSize={7}
                  style={{
                    transform: [
                      { rotate: '270deg' },
                      { scale: isSmall ? 0.7 : 1 },
                    ],
                  }}
                />
              )}
            </Button>
          </View>
        </View>
      </View>
      <Modal statusBarTranslucent transparent visible={viewOptions}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: '#0000005a',
            justifyContent: 'flex-end',
          }}
        >
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setViewOptions(false)}
          />
          <View
            style={{
              backgroundColor: Colors.background,
              padding: 16,
              borderRadius: 16,
              gap: 12,
            }}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: 14,
                color: Colors.primaryText,
                fontWeight: '600',
                width: '70%',
              }}
            >
              {product.title}
            </Text>
            <OptionsList product={product} />
            <Button title="Confirm" style={{ width: width - 32, height: 40 }} />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const Dot = ({
  index,
  progress,
}: {
  index: number;
  progress: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.8, 1.4, 0.8],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      progress.value,
      [index - 1, index, index + 1],
      [0.4, 1, 0.4],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: Colors.primary,
          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
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
  card: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default React.memo(ProductCard);
