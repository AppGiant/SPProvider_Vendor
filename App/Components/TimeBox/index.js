import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../Themes';

const TimeBox = ({value, changeColor, bgColor, selectedTime, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={value == selectedTime ? styles.normalText : styles.grayText}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
export default TimeBox;
