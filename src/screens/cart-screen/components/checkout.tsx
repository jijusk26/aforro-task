import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../components/button';

const Checkout = () => {
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
