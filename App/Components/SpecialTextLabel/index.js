import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../Themes';

const SpecialText = ({value, type}) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View
        style={[
          styles.btnContainer,
          type == 1 || type == 7 || type == 11 || type == 5
            ? {backgroundColor: Colors.liteRed}
            : type == 8 || type == 12 || type == 6
            ? {backgroundColor: Colors.liteGreen}
            : type == 2 || type == 3 || type == 4 || type == 10 || type == 9
            ? {backgroundColor: Colors.liteYellow}
            : {backgroundColor: Colors.liteGray},
        ]}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SpecialText;
