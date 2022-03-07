import React from 'react';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import HView from '../HView';
import Text from '../TextI';
import styles from './style';
const CheckBoxInput = ({
  startText,
  midText,
  endText,
  startTextStyle,
  midTextStyle,
  endTextStyle,
  style,
  color,
  ...props
}) => {

  return (
    <HView style={[styles.checkBoxContainer, style]}>
      {startText && (
        <Text style={[styles.startText, startTextStyle, {color: color}]}>
          {startText}
        </Text>
      )}
      <CheckBox checkedColor={color} {...props} />
      {midText && (
        <Text style={[styles.midText, midTextStyle, {color: color}]}>
          {midText}
        </Text>
      )}
      {endText && (
        <Text style={[styles.endText, endTextStyle, {color: color}]}>
          {endText}
        </Text>
      )}
    </HView>
  );
};
export default CheckBoxInput;
