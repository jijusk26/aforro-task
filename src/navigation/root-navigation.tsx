import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash-screen';
import ProductDetailPage from '../screens/products-screen';
import CartScreen from '../screens/cart-screen';
import LoginScreen from '../screens/login-screen';
import AddAddressScreen from '../screens/add-address';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Details" component={ProductDetailPage} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="AddAdress" component={AddAddressScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
