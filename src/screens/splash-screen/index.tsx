import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Colors } from '../../constants/colors';
import { PageProps } from '../../types/product';
import {
  localEnabled,
  requestLocationPermission,
} from '../../helpers/location';
import { RESULTS } from 'react-native-permissions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateUserVisitApp } from '../../store/reducers/user-slice';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SplashScreen = ({ navigation }: PageProps) => {
  const firstTime = useSelector((st: RootState) => st.user.isFirstTime);
  const dispatch = useDispatch();
  const scale = useSharedValue(1);

  useEffect(() => {
    setTimeout(() => {
      init();
      navigation.replace('Details', { id: 123 });
    }, 1000);
  }, []);

  useEffect(() => {
    scale.value = withSpring(1.5, {
      damping: 10,
      stiffness: 100,
    });
  }, []);

  const init = async () => {
    const result = await localEnabled();
    if (result !== RESULTS.GRANTED && firstTime) {
      Alert.alert(
        'Enable Location',
        'We use your location to show nearby results',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Allow', onPress: requestLocationPermission },
        ],
      );
    }
    dispatch(updateUserVisitApp(false));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Text style={styles.logoText}>Af</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: '800',
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default SplashScreen;
