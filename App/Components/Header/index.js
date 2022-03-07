import React, {useState, useEffect} from 'react';
import {Screens} from '../../Constants/constant';
import styles from './style';
import HView from '../HView';
import {View} from '../StyledComponents';
import Text from '../TextI';
import {Avatar, Badge, withBadge} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from '../TouchableIcon/index';
import style from './style';
import {getUserNotifications} from '../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';

const Header = ({props}) => {
  const [newNotif, setNewNotif] = useState(0);
  const isFocussed = useIsFocused();

  useEffect(() => {
    getNotifications();
  }, [isFocussed]);

  const getNotifications = () => {
    getUserNotifications(1)
      .then((res) => {
        // console.log('Notifications screen -> ' + JSON.stringify(res.status));
        if (res.status) {
          setNewNotif(res.newNotifications);
        } else {
          setNewNotif(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <HView>
      <HView style={styles.iconContainer}>
        <Icon
          style={style.bellIcon}
          size={28}
          name="bell"
          onPress={() =>
            props.navigation.navigate(Screens.NOTIFICATIONS)
          }></Icon>
        {newNotif != 0 ? <Badge value={`${newNotif}`} status="error" /> : null}
      </HView>
      <Icon
        style={style.header}
        size={30}
        name="menu"
        onPress={() => props.navigation.openDrawer()}></Icon>
    </HView>
  );
};
export default Header;
