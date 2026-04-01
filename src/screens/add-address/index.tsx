import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import Header from '../../components/header';
import { Colors } from '../../constants/colors';
import Button from '../../components/button';
import { PageProps } from '../../types/product';
import { useDispatch } from 'react-redux';
import { addAddress, AddressBO } from '../../store/reducers/user-slice';

const AddAddressScreen: FC<PageProps> = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState<string>('');
  const [isDefault, setIsDefault] = useState(false);
  const [type, setType] = useState<'Home' | 'Office' | 'Other'>('Home');
  const dispatch = useDispatch();

  const addressTypes = ['Home', 'Office', 'Other'];

  const handleSave = () => {
    if (address === '' && landmark === '' && city === '' && pin === '') {
      return;
    }

    const data: AddressBO = {
      address,
      landmark,
      city,
      type,
      isDefault,
      pinCode: pin,
    };

    dispatch(addAddress(data));

    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Details');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Add New Address" />
      <View style={{ flex: 1, padding: 16 }}>
        <TextInput
          placeholder="Full Address *"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
          placeholderTextColor={Colors.border}
        />
        <TextInput
          placeholder="Landmark *"
          value={landmark}
          onChangeText={setLandmark}
          style={styles.input}
          placeholderTextColor={Colors.border}
        />
        <TextInput
          placeholder="City *"
          value={city}
          onChangeText={setCity}
          style={styles.input}
          placeholderTextColor={Colors.border}
        />
        <TextInput
          placeholder="Pin Code *"
          value={pin}
          onChangeText={setPin}
          style={styles.input}
          placeholderTextColor={Colors.border}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Address Type</Text>
        <View style={styles.typeContainer}>
          {addressTypes.map(item => (
            <TouchableOpacity
              key={item}
              style={[styles.typeButton, type === item && styles.selectedType]}
              onPress={() => setType(item as 'Home' | 'Office' | 'Other')}
            >
              <Text
                style={[styles.typeText, type === item && styles.selectedText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Set as Default</Text>
          <Switch value={isDefault} onValueChange={setIsDefault} />
        </View>
        <Button
          title="Save Address"
          style={{ width: '100%' }}
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  typeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
  },
  selectedType: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  typeText: {
    color: '#000',
  },
  selectedText: {
    color: Colors.background,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default AddAddressScreen;
