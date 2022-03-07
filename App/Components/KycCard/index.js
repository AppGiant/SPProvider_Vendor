import React from 'react';
import {View, TouchableOpacity} from '../StyledComponents';
import styles from './style';
import KycIcon from '../../Images/kyc.svg';
import HView from '../HView';
import Text from '../TextI';
import color from '../../Constants/color';
const KycCard = ({title, head, description, link, type, onPress}) => {
  return (
    <HView
      style={[
        styles.container,
        {
          borderColor:
            type == 'high'
              ? color.GREEN
              : type == 'moderate'
              ? color.YELLOW
              : color.RED,
        },
      ]}>
      <KycIcon />
      <View style={styles.textContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {head && <Text style={styles.head}>{head}</Text>}
        {description && <Text style={styles.description}>{description}</Text>}
        {link && (
          <TouchableOpacity style={styles.linkContainer} onPress={onPress}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        )}
      </View>
    </HView>
  );
};
export default KycCard;
