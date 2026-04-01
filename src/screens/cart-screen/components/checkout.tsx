import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { width } from '../../../constants/appconstants';
import { Colors } from '../../../constants/colors';

const Checkout = ({ navigation }: { navigation: any }) => {
  const authenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  if (!authenticated) {
    return (
      <View
        style={{
          width: width,
          paddingHorizontal: 16,
          justifyContent: 'center',
          elevation: 5,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          paddingTop: 10,
          backgroundColor: Colors.background,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Colors.primaryText,
            fontWeight: '600',
            marginBottom: 5,
          }}
        >
          Login to proceed
        </Text>
        <Text style={{ fontSize: 13, color: Colors.border, fontWeight: '600' }}>
          Log in or sign up to proceed with your order
        </Text>
        <Button
          title={'Login'}
          onPress={() => navigation.navigate('Login')}
          style={{ height: 40, width: width - 32, marginVertical: 14 }}
        ></Button>
      </View>
    );
  }

  return (
    <View
      style={{
        height: 69,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flex: 1, gap: 3 }}>
        <Text style={{ fontSize: 12, fontWeight: '500', color: '#C0C0C0' }}>
          To Pay
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '800', color: '#1B1C1E' }}>
          ₹444
        </Text>
      </View>
      <Button title={'Proceed'} style={{ width: 140 }}></Button>
    </View>
  );
};

export default Checkout;
