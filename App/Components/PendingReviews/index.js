import React from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import {Image} from 'react-native';
import styles from './style';
import HView from '../HView';
import Button from '../../Components/CustomButton';
import moment from 'moment';
const PendingReviews = ({showReviewPopup, showDiscardPopup, data}) => {
  // console.log('pendingReviews ' + JSON.stringify(data));

  const setVisibility = () => {
    showReviewPopup(
      data?.orderId,
      data?.Store?.storeId,
      data?.Store?.storeName,
      data?.orderTime,
      data?.Bookings[0]?.Service?.primaryServiceName,
      data?.UserMain?.userId
    );
  };
  const setVisibility1 = () => {
    showDiscardPopup(
      data?.orderId,
      data?.Store?.storeId,
      data?.Store?.storeName,
      data?.orderTime,
      data?.Bookings[0]?.Service?.primaryServiceName,
      data?.UserMain?.userId
    );
  };
  return (
    <View style={styles.roundCard}>
      <HView style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../Images/hotel.jpeg')}></Image>
        <View style={{flex: 1}}>
          <HView>
            <Text style={styles.headText}>{data?.Store?.storeName || ''}</Text>
            <View style={styles.emptyView}></View>
            <Text style={styles.text2}>
              {moment(data?.orderTime).format('MM/DD/YYYY')}
            </Text>
          </HView>
          <HView style={styles.serviceContainer}>
            <HView style={{flexWrap: 'wrap'}}>
              {data?.Bookings?.map((it, index) => (
                <Text>{`${it?.Service.primaryServiceName} ${
                  data?.Bookings.length - 1 != index ? ',' : ''
                }`}</Text>
              ))}
            </HView>
          </HView>
        </View>
      </HView>
      <HView style={styles.btnHolder}>
        <Button
          title="Review"
          containerStyle={styles.btn1}
          titleStyle={styles.buttonTitle1}
          onPress={() => setVisibility()}
        />
        <Button
          title="Discard"
          containerStyle={styles.btn2}
          titleStyle={styles.buttonTitle2}
          onPress={() => setVisibility1()}
        />
      </HView>
    </View>
  );
};
export default PendingReviews;
