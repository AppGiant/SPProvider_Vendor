import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import HView from '../HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../Themes';

const StarCard = ({value, bdColor, bgColor, starCount, textColor}) => {
  let myloop = [];

  for (let i = 0; i < starCount; i++) {
    myloop.push(
      <Icon key={i} size={24} style={styles.tagIcon} name="star"></Icon>,
    );
  }

  return (
    <TouchableOpacity>
      <HView
        style={[
          styles.starContainer,
          {
            borderColor: bdColor == null ? Colors.Yellow : bdColor,
            backgroundColor: bgColor == null ? Colors.white : bgColor,
          },
        ]}>
        {myloop}
        {
          <Text
            style={[
              styles.starText,
              {color: textColor == null ? Colors.Yellow : textColor},
            ]}>
            {value}
          </Text>
        }
      </HView>
    </TouchableOpacity>
  );
};
export default StarCard;
