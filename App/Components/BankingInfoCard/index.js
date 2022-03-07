import React, {useMemo} from 'react';
import {SafeAreaView, View, ScrollView} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import TextBetweenLine from '../TextBetweenLine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookingInfoCard = ({values}) => {
  const getLabel = (key) => {
    return useMemo(() => {
      switch (key) {
        case 'firstName':
          return 'Beneficiary First Name';
        case 'midName':
          return 'Beneficiary Middle Name';
        case 'lastName':
          return 'Beneficiary First Name';
        case 'bussinessName':
          return 'Bussiness Name';
        case 'bankName':
          return 'Bank Name';
        case 'account':
          return 'Account Number';
        case 'iBan':
          return '#IBAN';
        case 'mobile':
          return 'Mobile Number';
      }
    }, []);
  };

  return (
    <View style={styles.roundCard}>
      <HView style={styles.header}>
        <Text style={styles.title}>Banking Info</Text>
        <Icon name="dots-vertical" size={20} />
      </HView>
      <TextBetweenLine />
      {Object.keys(values).map((element, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text1}>{getLabel(element)}</Text>
          <Text style={styles.text2}>{values[element]}</Text>
        </View>
      ))}
      <View style={styles.space}></View>
      <TextBetweenLine />
      <HView style={styles.holder}>
        <Text style={styles.billText}>New Billing Date</Text>
        <Text style={styles.dateText}>12 Nov 2021</Text>
      </HView>
    </View>
  );
};
export default BookingInfoCard;
