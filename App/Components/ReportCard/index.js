import React, {useMemo} from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import HView from '../HView';
import {Colors} from '../../Themes';

const ReportCard = ({it}) => {
  const getLabel = (key) => {
    return useMemo(() => {
      switch (key) {
        case 'date':
          return 'DATE';
        case 'totalBookings':
          return 'TOTAL BOOKINGS';
        case 'accepted':
          return 'ACCEPTED';
        case 'completed':
          return 'COMPLETED';
        case 'rejected':
          return 'REJECTED';
        case 'noShow':
          return 'NO SHOW';
        case 'cancelled':
          return 'CANCELLED';
        case 'spFee':
          return 'SP+ FEE';
        case 'revenue':
          return 'REVENUE';
      }
    });
  };

  return (
    <View style={styles.roundCard}>
      <View style={styles.checkBoxView}>
        <CheckBox style={styles.checkBox} />
      </View>
      {Object.keys(it).map((element, i) => (
        <HView style={styles.container} key={i}>
          <Text style={styles.leftText}>{getLabel(element)}</Text>
          <Text
            style={[
              styles.rightText,
              element == 'rejected' ? {color: Colors.fire} : null,
            ]}>
            {it[element]}
          </Text>
        </HView>
      ))}
    </View>
  );
};
export default ReportCard;
