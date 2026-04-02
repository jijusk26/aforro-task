import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash-screen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Login"
        getComponent={() => require('../screens/login-screen').default}
      />
      <Stack.Screen
        name="Details"
        getComponent={() => require('../screens/products-screen').default}
      />
      <Stack.Screen
        name="Cart"
        getComponent={() => require('../screens/cart-screen').default}
      />
      <Stack.Screen
        name="AddAdress"
        getComponent={() => require('../screens/add-address').default}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
