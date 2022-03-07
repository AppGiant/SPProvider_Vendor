import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import colors from '../../Constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomGiftCard = ({
  head1,
  head2,
  head3,
  subHead1,
  subHead2,
  subHead3,
  bdColor1,
  bdColor2,
  bgColor,
  iconName,
}) => {
  return (
    <View style={[styles.roundCard, {borderColor: bdColor1}]}>
      <View>
        <HView style={styles.container}>
          <Text>{head1}</Text>
          <View
            style={[
              styles.roundTextView,
              {borderColor: bdColor2, backgroundColor: bgColor},
            ]}>
            <Text style={styles.text1}>{subHead1}</Text>
          </View>
        </HView>
        <HView style={styles.container}>
          <Text>{head2}</Text>
          <View
            style={[
              styles.roundTextView,
              {borderColor: bdColor2, backgroundColor: bgColor},
            ]}>
            <Text style={styles.text1}>{subHead2}</Text>
          </View>
        </HView>
      </View>
      <View style={styles.container1}>
        <Icon name={iconName} size={40} style={styles.icon} />
        <Text style={styles.boldText}>{subHead3}</Text>
        <Text style={styles.text2}>{head3}</Text>
      </View>
    </View>
  );
};
export default CustomGiftCard;
