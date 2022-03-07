import React, {useState, useEffect} from 'react';
import HView from '../../Components/HView';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBetweenLine from '../../Components/TextBetweenLine';
import {Colors} from '../../Themes';
import {getMyStoreDetails, getUserAddSettings} from '../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';
import {Screens} from '../../Constants/constant';
import {BackHandler} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountSettings = (props) => {
  const [addSettings, setAddSettings] = useState({});
  const [storeAdd, setStoreAdd] = useState([]);
  const [addressId, setAddressId] = useState();
  const isFocussed = useIsFocused();

  const handler = () => {
    props.navigation.goBack();
    return true;
  };
  
  useEffect(() => {
    getGeneralSettings();
    getStoreDetails();
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [isFocussed]);

  const getGeneralSettings = async () => {
    getUserAddSettings()
      .then((res) => {
        if (res && res.status && res.addSettings)
          setAddSettings(res.addSettings);
        // console.log('add setting -> ' + addSettings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStoreDetails = () => {
    getMyStoreDetails()
      .then((res) => {
        if (res.status) {
          // console.log('getMyStoreDetails => ' + JSON.stringify(res));
          setStoreAdd(res?.StoreData?.store?.Addresses);
        } else {
          console.log('getMyStoreDetails => ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let mode = '';
  const checkNotificationMode = () => {
    if (addSettings.EmailNotify == '1') {
      mode = 'E-Mail';
    }
    if (addSettings.smsNotify == '1') {
      mode = 'SMS';
    }
    if (addSettings.EmailNotify == '1' && addSettings.smsNotify == '1') {
      mode = 'E-Mail, SMS ';
    }

    return mode;
  };

  let lastActive = addSettings.updatedAt;
  try {
    if (lastActive) {
      lastActive = lastActive.slice(0, 10);
    }
    console.log('last active -> ' + lastActive);
  } catch (err) {
    console.log(err);
  }

  // console.log(storeAdd);
  let address = storeAdd[0]?.city ? storeAdd[0]?.city + ' ' : '';
  address += storeAdd[0]?.country ? storeAdd[0]?.country + ' ' : '';
  address += storeAdd[0]?.zipCode ? storeAdd[0]?.zipCode : '';

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.headText}>Account Settings</Text>
        {/* <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>General Settings</Text>
            <Icon name="dots-vertical" size={20}></Icon>
          </HView>
          <TextBetweenLine />
          <HView style={styles.itemContainer}>
            <View style={styles.view1}>
              <Text style={styles.boldText}>Time Zone</Text>
              <Text style={styles.normalText}>Arabian Standard Time</Text>
              <Text style={styles.normalText}>(GMT+3)</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.boldText}>Tax Rate</Text>
              <Text style={styles.normalText}>10%</Text>
            </View>
          </HView>
          <View style={styles.view3}>
            <Text style={styles.boldText}>Date Format</Text>
            <Text style={styles.normalText}>16 Nov, 2020</Text>
          </View>
        </View> */}
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>General Settings</Text>
            <Icon
              name="square-edit-outline"
              size={20}
              color={Colors.PRIMARY}
              onPress={() =>
                props.navigation.navigate(Screens.GENERAL_SETTINGS, {addSettings})
              }
            />
          </HView>
          <TextBetweenLine />
          <HView style={styles.itemContainer}>
            <View style={styles.view1}>
              <Text style={styles.boldText1}>Last Active</Text>
              <Text style={styles.normalText}>{lastActive}</Text>
              <Text style={styles.boldText1}>Date Format</Text>
              <Text style={styles.normalText}>
                {addSettings.timeZone ? addSettings.timeZone : ''}
              </Text>
            </View>
            <View style={styles.view1}>
              <Text style={styles.boldText1}>Date Format</Text>
              <Text style={styles.normalText}>
                {addSettings.dateFormat ? addSettings.dateFormat : ''}
              </Text>
              <Text style={styles.boldText1}>Notification</Text>
              <Text style={styles.normalText}>{checkNotificationMode()}</Text>
            </View>
          </HView>
        </View>
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>Notification & Security</Text>
            <Icon
              name="square-edit-outline"
              size={20}
              color={Colors.PRIMARY}></Icon>
          </HView>
          <TextBetweenLine />
          <HView style={styles.itemContainer}>
            <View style={styles.view1}>
              <Text style={styles.boldText}>Notification Methods</Text>
              <Text style={styles.normalText}>SMS, E-Mail</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.boldText}>Password</Text>
              <Text style={styles.normalText}>**********</Text>
            </View>
          </HView>
          <View style={styles.view3}>
            <Text style={styles.boldText}>Date Format</Text>
            <Text style={styles.normalText}>18 Dec, 2020</Text>
          </View>
        </View>
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>Booking & Payments</Text>
            <Icon
              name="square-edit-outline"
              size={20}
              color={Colors.PRIMARY}></Icon>
          </HView>
          <TextBetweenLine />
          <HView style={styles.itemContainer}>
            <View style={styles.view1}>
              <Text style={styles.boldText}>Payout Frequency</Text>
              <Text style={styles.normalText}>Daily</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.boldText}>Pay at Venue</Text>
              <Text style={styles.normalText}>Yes</Text>
            </View>
          </HView>
          <View style={styles.view3}>
            <Text style={styles.boldText}>Allowed to book time</Text>
            <Text style={styles.normalText}>30 Minutes</Text>
          </View>
        </View>
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>Addresses</Text>
            <Icon
              name="square-edit-outline"
              size={20}
              color={Colors.PRIMARY}
              onPress={() =>
                props.navigation.navigate(Screens.MAP_VIEW)
              }></Icon>
          </HView>
          <TextBetweenLine />
          <Text style={[styles.normalText, {paddingBottom: 1}]}>
            {storeAdd[0] && storeAdd[0]?.add1}
          </Text>
          <Text style={[styles.normalText, {paddingBottom: 10}]}>
            {address}
          </Text>
        </View>
        <View style={styles.roundCard}>
          <HView style={styles.headContainer}>
            <Text style={styles.title}>Subscription Tires</Text>
            <Icon
              name="square-edit-outline"
              size={20}
              color={Colors.PRIMARY}></Icon>
          </HView>
          <TextBetweenLine />
          <HView style={styles.itemContainer1}>
            <View style={styles.view4}>
              <Text style={styles.boldText}>Current Plan</Text>
              <Text style={styles.normalText}>Professional</Text>
            </View>
            <Text style={styles.smallText}>next billing date 15 Nov, 2020</Text>
          </HView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AccountSettings;
