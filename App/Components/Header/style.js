import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {Colors} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  header: {
    color: Colors.darkText,
    marginStart: W(10),
    width: W(50),
  },
  bellIcon: {
    color: Colors.darkText,
    marginEnd: W(-8),
  },
  badgeCount: {
    backgroundColor: color.RED,
    width: H(30),
    height: H(30),
    borderRadius: 15,
  },
  iconContainer: {
    marginEnd: W(8),
  },
});
export default style;
