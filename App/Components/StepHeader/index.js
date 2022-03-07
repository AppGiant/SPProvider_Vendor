import React from 'react';
import HView from '../HView';
import User from '../../Images/Icons/user.svg';
import {View} from '../StyledComponents';
import Text from '../TextI';
import styles from './style';
import SVGComponent from '../SVGComponent';
const StepHeader = ({Icon, title, iconTitle, iconSubtitle}) => {
  return (
    <HView style={styles.container}>
      <SVGComponent style={styles.icon}>
        {Icon ? <Icon /> : <User />}
      </SVGComponent>
      <View style={styles.iconTitleContainer}>
        <Text style={styles.iconTitleText}>
          {iconTitle ? iconTitle : 'STEP'}
        </Text>
        <Text style={styles.iconSubtitleText}>
          {iconSubtitle ? iconSubtitle : '1 of 3'}
        </Text>
      </View>
      <Text style={styles.title}>{title ? title : 'Basic Details'}</Text>
    </HView>
  );
};
export default StepHeader;
