import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';
import { PageProps } from '../../types/product';

const SplashScreen = ({ navigation }: PageProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Details', { id: 123 });
    }, 1000);
  }, []);

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
