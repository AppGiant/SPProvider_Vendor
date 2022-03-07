import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import color from '../../Constants/color';

const Counter = ({value, textColor, containerStyle, titleStyle}) => {
  return (
    <HView style={[styles.round, containerStyle]}>
      <Text
        style={[
          styles.text,
          {color: textColor == null ? color.BLACK : textColor},
          titleStyle,
        ]}>
        {value}
      </Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log('up')}>
          <Icon name="menu-up" size={24} style={styles.iconUp} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('down')}>
          <Icon name="menu-down" size={24} style={styles.iconDown} />
        </TouchableOpacity>
      </View>
    </HView>
  );
};
export default Counter;
