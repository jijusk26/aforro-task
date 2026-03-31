import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';
import { Colors } from '../constants/colors';

const Button = ({
  title,
  children,
  onPress,
  style,
}: {
  title: string;
  onPress?: () => void;
  children?: any;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={onPress ? false : true}
    >
      <Text style={styles.text}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 120,
    backgroundColor: '#55913D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Button;
