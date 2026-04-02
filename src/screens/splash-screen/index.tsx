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

const SplashScreen = ({ navigation }: PageProps) => {
  const firstTime = useSelector((st: RootState) => st.user.isFirstTime);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      init();
      navigation.navigate('Details', { id: 123 });
    }, 1000);
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
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
});

export default SplashScreen;
