import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../constants/colors';

const CancellationPolicy = () => {
  return (
    <View style={[styles.descriptionContainer, { marginBottom: 16 }]}>
      <Text style={styles.primaryText}>Cancellation policy</Text>
      <Text style={styles.secondaryText}>
        You can cancel your order for free within the first 90 seconds. After
        that, a cancellation fee will apply.
      </Text>
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
});

export default CancellationPolicy;
