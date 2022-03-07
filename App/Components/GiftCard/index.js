import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBetweenLine from '../TextBetweenLine';
import GiftIcon from '../../Images/gift_card.svg';
import {Switch, TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../Constants/color';
import {Image} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import moment from 'moment';

const GiftCard = ({item, menuItems}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const setVisibility = (it) => {
    setIsVisible(false);
    it.onPress();
  };

  // console.log('GC => ' + JSON.stringify(item));
  return (
    <View style={styles.roundCard}>
      <HView style={styles.headContainer}>
        <HView style={styles.image}>
          <GiftIcon />
          <View style={styles.headText}>
            <Text style={styles.title}>{item?.GiftCardName}</Text>
            <Text style={styles.subTitle}>#75847</Text>
          </View>
        </HView>
        <View>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Icon name="dots-vertical" size={20}></Icon>
          </TouchableOpacity>
          <Menu
            visible={isVisible}
            // style={styles.menu}
            // anchor={<Text onPress={showMenu}>Show menu</Text>}
            onRequestClose={() => setIsVisible(false)}>
            {menuItems &&
              menuItems.length > 0 &&
              menuItems.map((it, key) => (
                <MenuItem key={key} onPress={() => setVisibility(it)}>
                  {it.title}
                </MenuItem>
              ))}
          </Menu>
        </View>
      </HView>
      <TextBetweenLine />
      {item.description && (
        <View>
          <Text style={styles.descHeadText}>Description</Text>
          <Text style={styles.descText}>
            A short Description about the gift card goes here for getting an
            initial idea.
          </Text>
          <TextBetweenLine />
        </View>
      )}
      <HView style={styles.validContainer}>
        <View style={{flex: 2}}>
          <Text style={styles.leftTextHead}>Valid for</Text>
          <Text style={styles.leftText1}>{item?.validForDays + ' days'}</Text>
          <Text style={styles.leftText2}>After Purchase</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.rightHeadText}>Dates</Text>
          <Text style={styles.rightText1}>
            {moment(item?.dateValidFrom).format('DD-MM-YYYY') + '-'}
          </Text>
          <Text style={styles.rightText2}>
            {moment(item?.dateValidTo).format('DD-MM-YYYY')}
          </Text>
        </View>
      </HView>
      <TextBetweenLine />
      <HView style={styles.validContainer}>
        <View>
          <Text style={styles.leftTextHead}>Price</Text>
          <Text style={styles.leftTextPrice}>{'$' + item?.price}</Text>
        </View>
        <View>
          <Text style={styles.leftTextHead}>Value</Text>
          <Text style={styles.leftTextPrice}>{'$' + item?.value}</Text>
        </View>
        <View>
          <Text style={styles.leftTextHead}>Quantity</Text>
          <Text style={styles.leftTextPrice}>100</Text>
        </View>
      </HView>
      <TextBetweenLine />
      {item.active ? (
        <HView style={styles.toggleView}>
          <Text style={styles.text}>Visible in Store</Text>
          <Switch
            trackColor={{
              false: Colors.SWITCH_FALSE,
              true: Colors.SWITCH_TRUE,
            }}
            thumbColor={Colors.SWITCH_THUMB}
            value={isEnabled}
            onValueChange={() => setIsEnabled(!isEnabled)}
          />
        </HView>
      ) : (
        <HView style={styles.inactive}>
          <Image source={require('../../Images/inactive.png')} />
          <Text style={styles.inactiveText}>Inactive</Text>
        </HView>
      )}
    </View>
  );
};
export default GiftCard;
