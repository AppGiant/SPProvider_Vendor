import React, {useState, useMemo} from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingCard = ({values}) => {
  const getLabel = (key) => {
    return useMemo(() => {
      switch (key) {
        case 'bookingId':
          return 'Booking Id';
        case 'spName':
          return 'SP Name';
        case 'address':
          return 'Address';
        case 'date':
          return 'Time';
        case 'service':
          return 'Service';
        case 'serviceType':
          return 'Service Type';
        case 'spFee':
          return 'SP + FEE';
        case 'price':
          return 'Price';
      }
    }, []);
  };
  return (
    <View style={styles.roundCard}>
      <View style={styles.dotIcon}>
        <Icon
          name="dots-vertical"
          size={20}
          onPress={() => console.log('clicked')}
        />
      </View>
      {Object.keys(values).map((element, index) => (
        <HView key={index} style={styles.containerH}>
          <View style={styles.leftSideView}>
            <Text style={styles.leftSideText}>{getLabel(element)}</Text>
          </View>
          <View style={styles.rightSideView}>
            <Text
              style={
                element == 'address' ? styles.addressText : styles.rightSideText
              }>
              {element == 'price' || element == 'spFee'
                ? `$ ${values[element]}`
                : values[element]}
            </Text>
          </View>
        </HView>
      ))}
    </View>
  );
};
export default BookingCard;
