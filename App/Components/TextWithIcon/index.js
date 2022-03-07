import React from 'react';
import Text from '../../Components/TextI';
import {View} from '../StyledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HView from '../HView';
import styles from './style';

const TextWithIcon = ({iconName, value1, value2, textColor}) => {
  return (
    <View>
      <HView style={styles.container}>
        <Icon name={iconName} size={20} color={textColor} />
        <View>
          <Text style={[styles.text1, {color: textColor}]}>{value1}</Text>
          <Text style={[styles.text2, {color: textColor}]}>{value2}</Text>
        </View>
      </HView>
    </View>
  );
};
export default TextWithIcon;
