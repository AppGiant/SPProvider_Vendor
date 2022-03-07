import React, {useState, useEffect} from 'react';
import HView from '../../Components/HView';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBetweenLine from '../../Components/TextBetweenLine';
import NotificationCard from '../../Components/NotificationCard';
import {
  getUserNotifications,
  setUserNotificationRead,
} from '../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import Loader from '../../Components/Loader';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserNotifications(count)
      .then((res) => {
        if (res.notifications != undefined && res.status) {
          // console.log('notifications Screen -> ' + JSON.stringify(res.status));
          setLoading(false);
          setData(res);
        } else {
          setLoading(false);
          Toast.showWithGravity(
            'No new Notifications',
            Toast.SHORT,
            Toast.BOTTOM,
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const setData = (res) => {
    try {
      setNotifications(res.notifications);
      setUpRead(res.status);
    } catch (err) {
      console.log('notifications -> ' + err);
    }
  };

  const setUpRead = (status) => {
    if (status) {
      setUserNotificationRead()
        .then((res) => {
          console.log('notifications updated');
        })
        .catch((err) => {
          console.log('error in updating notifications -> ' + err);
        });
    } else {
      console.log('failed');
    }
  };

  if (loading)
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <Loader />
      </View>
    );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.headText}>Notifications</Text>
            <Icon name="pencil" size={20} />
          </HView>
          <TextBetweenLine />
          {notifications.map((it, i) => (
            <NotificationCard key={i} it={it} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Notifications;
