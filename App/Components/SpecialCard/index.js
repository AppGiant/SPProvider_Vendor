import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';

const SpecialCard = ({bgColor, value, textColor, bdColor}) => {
  return (
    <View
      style={[
        styles.roundCard,
        {backgroundColor: bgColor, borderColor: bdColor},
      ]}>
      <Text style={[styles.text, {color: textColor}]}>{value}</Text>
    </View>
  );
};

export default SpecialCard;
