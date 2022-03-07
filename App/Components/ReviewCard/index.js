import React from 'react';
import {View} from '../StyledComponents';
import {Image} from 'react-native';
import styles from './style';
import HView from '../HView';
import Text from '../TextI';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextArea from '../TextArea';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ReviewCard = ({data, ownReview}) => {
  // console.log(data);
  let myloop = [];

  for (let i = 0; i < data?.ratings; i++) {
    myloop.push(
      <Icon key={i} size={24} style={styles.tagIcon} name="star"></Icon>,
    );
  }

  return (
    <View style={styles.cardContainer}>
      <HView>
        <Image
          style={styles.image}
          source={require('../../Images/hotel.jpeg')}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>{data?.Order?.UserMain?.userName}</Text>
          <HView style={{flexWrap: 'wrap'}}>
            {data?.Order?.Bookings?.map((it, index) => (
              <Text>{`${it?.Service.primaryServiceName} ${
                data?.Order?.Bookings.length - 1 != index ? ',' : ''
              }`}</Text>
            ))}
          </HView>
          <HView>
            {myloop}
            <Text style={styles.headText}>{'(' + data?.ratings + ')'}</Text>
          </HView>
        </View>
      </HView>

      <KeyboardAwareScrollView
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
          padding: 5,
          paddingTop: -5,
        }}>
        <Text style={styles.reviewText}>{data?.reviews}</Text>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default ReviewCard;
