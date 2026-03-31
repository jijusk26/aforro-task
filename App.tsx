import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/splash-screen';
import { Colors } from './src/constants/colors';
import ProductDetailPage from './src/screens/products-screen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
        translucent
      />
      <ProductDetailPage />
    </SafeAreaProvider>
  );
}

export default App;
