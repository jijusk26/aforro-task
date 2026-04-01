import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { deliveryInstructions, width } from '../../../constants/appconstants';
import { Colors } from '../../../constants/colors';
import { InstructionsBO } from '../../../types/product';

const DeliveryInstructions = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.primaryText}>Delivery instructions</Text>
      <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap' }}>
        {deliveryInstructions.map((instruct: InstructionsBO) => {
          return (
            <View style={styles.chip} key={instruct.id}>
              <SvgXml xml={instruct.icon} fontSize={12} />
              <Text style={styles.chipText}>{instruct.title}</Text>
            </View>
          );
        })}
      </View>
      <TextInput
        style={{ borderBottomColor: '#E7E7E7', borderBottomWidth: 1 }}
        placeholder="Type in any other instructions..."
        placeholderTextColor={Colors.secondaryText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    backgroundColor: Colors.background,
    elevation: 4,
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 12,
    gap: 8,
  },
  secondaryText: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '600',
  },
  primaryText: {
    color: Colors.primaryText,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  chip: {
    flexDirection: 'row',
    gap: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 4,
  },
  chipText: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.primaryText,
  },
});

export default DeliveryInstructions;
