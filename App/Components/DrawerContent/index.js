import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from '../StyledComponents';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Text from '../TextI/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconn from 'react-native-vector-icons/Entypo';
import {Image, I18nManager} from 'react-native';
import Sample from '../../Images/ignite_logo.png';
import styles from './style';
import Colors from '../../Constants/color';
import {Switch} from 'react-native';
import {useTheme, useThemeToggler} from '../../Context/theme';
import {App, Screens} from '../../Constants/constant';
import i18next from 'i18next';
import RNRestart from 'react-native-restart';
import colors from '../../Themes/Colors';
import {W} from '../../utils/DimensionCalculator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {prop} from 'ramda';
//import SafeAreaView from '../SafeAreaView';

export default (props) => {
  const [lang, setLang] = useState(i18next.language);
  const toggleLanguage = () => {
    let l = i18next.language == 'en' ? 'fr' : 'en';
    i18next.changeLanguage(l, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      setLang(l);
    });
  };
  const RTL = () => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    } else if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  };
  const logout = () => {
    console.log('LOGOUT');
    AsyncStorage.removeItem('accessToken').then((res) => {
      props.navigation.navigate(Screens.LOGIN);
    });
  };
  const toggleTheme = useThemeToggler();
  return (
    <SafeAreaView style={{flex: 1, marginTop: -10}}>
      <DrawerContentScrollView>
        <View style={styles.profileWrapper}>
          <Image source={Sample} style={styles.profile} />
        </View>

        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.HOME)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>{Screens.HOME}</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.BOOKING_NAVIGATOR)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.SERVICES)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Services</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.ROOT1)}>
          <Iconn style={styles.icon} name="users" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Staff</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.GIFTS)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Gift Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.REVIEW)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Reviews</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.ROOT1)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Branches</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.REPORTS)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.PAYMENTS)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.STORE_POLICY)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Store Policies</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.ROOT1)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Sponsored/Promotion</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.ACCOUNT_SETTINGS)}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.NOTIFICATIONS)}>
          <Icon style={styles.icon} name="bell" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Notifications</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.VIEW)}>
          <Icon style={styles.icon} name="menu" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Components</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.TRANSACTIONS)}>
          <Icon style={styles.icon} name="menu" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Transaction</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.row}
          onPress={() => props.navigation.navigate(Screens.WALLET)}>
          <Icon style={styles.icon} name="menu" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Wallet</Text>
        </TouchableOpacity> */}

        {/* <View style={styles.separatorLine} />
                <View style={styles.row}>
                    <Text style={styles.boldLabel}>{useTheme()?App.THEME_DARK:App.THEME_LIGHT}</Text>
                    <Switch
                        trackColor={{ false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE }}
                        thumbColor={Colors.SWITCH_THUMB}
                        onValueChange={() => toggleTheme()}
                        value={useTheme()}
                    />
                    
                </View> */}
        <View style={styles.row}>
          <Switch
            trackColor={{false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE}}
            thumbColor={Colors.SWITCH_THUMB}
            onValueChange={() => {
              lang == 'en' ? toggleLanguage('fr') : toggleLanguage('en');
            }}
            value={i18next.language == 'en' ? true : false}
          />
          <Text style={styles.boldLabel}>
            {i18next.language == 'en' ? App.ENGLISH : App.FRENCH}
          </Text>
        </View>
        <View style={styles.row}>
          <Switch
            trackColor={{false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE}}
            thumbColor={Colors.SWITCH_THUMB}
            onValueChange={() => RTL()}
            value={I18nManager.isRTL}
          />
          <Text style={styles.boldLabel}>
            {I18nManager.isRTL ? App.RTL : App.LTR}
          </Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={() => logout()}>
          <Icon style={styles.icon} name="home" color={'#828282'} size={30} />
          <Text style={styles.boldLabel}>Logout</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
