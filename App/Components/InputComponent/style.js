import React from 'react';
import {I18nManager, StyleSheet, Platform} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Colors} from '../../Themes';
import colors from '../../Themes/Colors';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  inputContainerStyle: {
    marginTop: 10,
    paddingStart: 10,
    borderColor: color.BORDER,
    borderWidth: 1,
    borderRadius: 5,
  //  height: Platform.OS == 'android' ? H(50) : H(45),
    paddingBottom: 0,
    marginHorizontal: -H(10),
  },

  labelStyle: {
    textAlign: 'left',
    color: colors.subTitleText,
    ...ApplicationStyles.screen.subHeadText,
    marginStart: 0,
  },
  errorStyle: {color: 'red',alignSelf:'auto'},
});
export default style;
