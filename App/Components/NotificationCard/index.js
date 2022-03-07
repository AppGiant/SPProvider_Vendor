import React from 'react';
import Text from '../../Components/TextI';
import styles from './style';
import {View} from '../StyledComponents';
import {Colors} from '../../Themes';

const NotificationCard = ({it}) => {
  return (
    <View style={styles.roundCard}>
      <View
        style={[
          styles.card,
          it.NotificationType.typeName == 'Review'
            ? {backgroundColor: Colors.Yellow}
            : it.NotificationType.typeName == 'Status Update' ||
              it.NotificationType.typeName == 'Cancellation'
            ? {backgroundColor: Colors.PRIMARY}
            : it.NotificationType.typeName == 'Bookings' ||
              it.NotificationType.typeName == 'Rescheduling' ||
              it.NotificationType.typeName == 'Branch Request'
            ? {backgroundColor: Colors.fire}
            : it.NotificationType.typeName == 'Transaction-Positive'
            ? {backgroundColor: Colors.fire}
            : null,
        ]}>
        <Text
          style={[
            styles.headText,
            it.NotificationType.typeName == 'Review'
              ? {color: Colors.BLACK}
              : {color: Colors.white},
          ]}>
          {it.NotificationType.typeName}
        </Text>
      </View>
      <Text style={styles.text}>{it.notification}</Text>
      <Text style={styles.dateText}>{':' + it.createdAt}</Text>
    </View>
  );
};
export default NotificationCard;
