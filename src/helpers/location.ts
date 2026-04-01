import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

export const localEnabled = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  const result = await check(permission);

  return result;
};

export const requestLocationPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

  const result = await localEnabled();

  if (result === RESULTS.GRANTED) {
    return true;
  }

  if (result === RESULTS.DENIED) {
    const requestResult = await request(permission);

    if (requestResult === RESULTS.GRANTED) {
      return true;
    } else {
      Alert.alert('Location Required', 'Please enable location to continue');
      return false;
    }
  }

  return false;
};
