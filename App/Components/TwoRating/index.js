import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TwoRating = ({moveToReview}) => {
  const toReviewScreen = () => {
    moveToReview();
  };

  return (
    <View style={styles.container}>
      <HView style={styles.iconContainer}>
        <Text style={styles.text}>Ehsaan</Text>
        <TouchableOpacity onPress={() => toReviewScreen()}>
          <Icon name="eye" style={styles.eyeIcon} size={16} />
        </TouchableOpacity>
      </HView>
      <HView>
        {[1, 2, 3, 4, 5].map((it, i) => {
          return (
            <Icon key={i} size={14} style={styles.tagIcon} name="star"></Icon>
          );
        })}
        <Text style={styles.rightSideSmallText}>(5.0)</Text>
      </HView>
      <HView style={styles.iconContainer}>
        <Text style={styles.text}>Yours</Text>
        <TouchableOpacity onPress={() => toReviewScreen()}>
          <Icon name="eye" style={styles.eyeIcon} size={16} />
        </TouchableOpacity>
      </HView>

      <HView>
        {[1, 2, 3, 4, 5].map((it, i) => {
          return (
            <Icon key={i} size={14} style={styles.tagIcon} name="star"></Icon>
          );
        })}
        <Text style={styles.rightSideSmallText}>(5.0)</Text>
      </HView>
    </View>
  );
};
export default TwoRating;
