import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../constants/colors';
import { width } from '../constants/appconstants';
import { SvgXml } from 'react-native-svg';
import { Icons } from '../assets/svg/icons';

interface HeaderProps {
  title?: string;
  secondaryIcon?: string;
  onPressSecondary?: () => void;
  onBackPressed?: () => void;
  navigation: any;
}

const Header = ({
  onBackPressed,
  onPressSecondary,
  secondaryIcon,
  title,
  navigation,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onBackPressed}>
        {navigation.canGoBack() && (
          <SvgXml xml={Icons.leftArrow} fontSize={20} />
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPressSecondary}
      >
        {secondaryIcon && <SvgXml xml={Icons.share} fontSize={20} />}
      </TouchableOpacity>
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
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryText,
  },
});

export default Header;
