import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Colors } from '../constants/colors';
import { width } from '../constants/appconstants';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <SvgXml xml={Icons.leftArrow} fontSize={20} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          Dairy milk silk chocolate
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SvgXml xml={Icons.share} fontSize={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    width: width,
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    width: 50,
    padding: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryText,
  },
});

export default Header;
