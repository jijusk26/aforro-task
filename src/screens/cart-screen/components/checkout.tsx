import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../components/button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { width } from '../../../constants/appconstants';
import { Colors } from '../../../constants/colors';
import { RESULTS } from 'react-native-permissions';
import { localEnabled } from '../../../helpers/location';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../../../assets/svg/icons';
import { AddressBO } from '../../../store/reducers/user-slice';
import useCart from '../../../hooks/cart';

const getRandom = () => {
  return [1, 2][Math.floor(Math.random() * [1, 2].length)];
};

const Checkout = ({ navigation }: { navigation: any }) => {
  const [localtionEnabled, setLocationEnabled] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user);
  const [address, setAddress] = useState<AddressBO>();
  const { payableAmount } = useCart();
  const [isSlot, setIsSlot] = useState(getRandom() === 1);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (user.address.length > 0) {
      const filtered = user.address.find(ad => ad.isDefault) ?? user.address[0];

      setAddress(filtered);
    }
  }, [user.address]);

  const init = async () => {
    const result = await localEnabled();
    if (result === RESULTS.GRANTED) {
      setLocationEnabled(true);
    }
  };

  if (!user.isAuthenticated) {
    return (
      <View style={styles.container}>
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

  if (!localtionEnabled || user.address.length === 0) {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <SvgXml xml={Icons.location} height={24} width={24} />
          <Text
            style={{
              fontSize: 16,
              color: Colors.primaryText,
              fontWeight: '600',
            }}
          >
            Where would you like us to deliver?
          </Text>
        </View>
        <Button
          title={'Add address'}
          onPress={() => navigation.navigate('AddAdress')}
          style={{ height: 40, width: width - 32, marginVertical: 14 }}
        ></Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <SvgXml xml={Icons.location} height={24} width={24} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 12,
              color: Colors.primaryText,
              fontWeight: '400',
            }}
          >
            {isSlot ? 'Deliver In ' : 'Deliver To'}
            <Text
              style={{
                fontSize: 12,
                color: Colors.primaryText,
                fontWeight: '600',
              }}
            >
              {!isSlot ? address?.type : '30-60 mins⚡'}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.border,
              fontWeight: '500',
              width: '80%',
            }}
            numberOfLines={1}
          >
            {address?.address + ', ' + address?.city + ', ' + address?.pinCode}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#55913D',
            fontWeight: '700',
          }}
        >
          Change
        </Text>
      </View>
      <View style={styles.priceInfo}>
        <View style={{ flex: 1, gap: 3 }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: '#C0C0C0' }}>
            To Pay
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '800', color: '#1B1C1E' }}>
            ₹{payableAmount}
          </Text>
        </View>
        <Button title={'Proceed'} style={{ width: 140 }}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 16,
    justifyContent: 'center',
    elevation: 5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 10,
    backgroundColor: Colors.background,
  },
  priceInfo: {
    height: 69,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Checkout;
