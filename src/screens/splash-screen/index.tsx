import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

const SplashScreen = () => {
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
