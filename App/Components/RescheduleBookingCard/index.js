import React, {useState, useMemo} from 'react';
import {View} from '../StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SpecialText from '../SpecialTextLabel';
import TextWithIcon from '../TextWithIcon';
import colors from '../../Themes/Colors';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TwoRating from '../TwoRating';
import {Screens} from '../../Constants/constant';
import moment from 'moment';

const RescheduleBookingCard = ({
  values,
  menuItems,
  showDots,
  showNotePopup,
  showLocationPopup,
  navigation,
}) => {
  const showCustNotePopup = () => {
    showNotePopup();
  };

  const showLocation = () => {
    showLocationPopup();
  };

  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = (it) => {
    setIsVisible(false);
    it.onPress(values.id, values.bookingId);
  };

  const moveToReview = () => {
    navigation.navigate(Screens.REVIEW);
    console.log('navigate');
  };

  // console.log('Reschedule Card => ' + JSON.stringify(values));

  return (
    <View style={styles.roundCard}>
      <View style={styles.dotIcon}>
        {showDots && (
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Icon
              name="dots-vertical"
              size={24}
              color="gray"
              // onPress={() => console.log('1')}
            />
          </TouchableOpacity>
        )}
        <Menu
          visible={isVisible}
          // anchor={<Text onPress={showMenu}>Show menu</Text>}
          onRequestClose={() => setIsVisible(false)}>
          {values.Booking.BookingStatus.id == 10
            ? menuItems &&
              menuItems.length > 0 &&
              menuItems.slice(0, 2).map((it, key) => (
                <MenuItem key={key} onPress={() => setVisibility(it)}>
                  {
                    <HView style={styles.itemContainer}>
                      {it.title == 'Cancel' ? (
                        <Icon name="close" color={colors.error} size={16} />
                      ) : it.title == 'Reject' ? (
                        <Icon name="close" color={colors.error} size={16} />
                      ) : it.title == 'Accept' ? (
                        <Icon
                          name="check"
                          color={colors.LIME_GREEN}
                          size={16}
                        />
                      ) : null}
                      {<Text style={styles.normalText}>{it.title}</Text>}
                    </HView>
                  }
                </MenuItem>
              ))
            : menuItems &&
              menuItems.length > 0 &&
              menuItems.slice(2, 3).map((it, key) => (
                <MenuItem key={key} onPress={() => setVisibility(it)}>
                  {
                    <HView style={styles.itemContainer}>
                      {it.title == 'Cancel' ? (
                        <Icon name="close" color={colors.error} size={16} />
                      ) : it.title == 'Reject' ? (
                        <Icon name="close" color={colors.error} size={16} />
                      ) : it.title == 'Accept' ? (
                        <Icon
                          name="check"
                          color={colors.LIME_GREEN}
                          size={16}
                        />
                      ) : null}
                      {<Text style={styles.normalText}>{it.title}</Text>}
                    </HView>
                  }
                </MenuItem>
              ))}
        </Menu>
      </View>

      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>BOOKING</Text>
        </View>
        <View style={styles.rightSideView}>
          {
            <Text
              style={[
                styles.rightSideText,
                values['bookingId']
                  ? {color: colors.PRIMARY}
                  : {color: colors.lightText},
              ]}>
              {values?.Booking?.bookingId}
            </Text>
          }
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Service Name</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {values?.Booking?.Variation?.Service?.primaryServiceName}
          </Text>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Old Time</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {moment(values?.OldTime).format(':YYYY/MM/DD, h:mm a')}
          </Text>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>New Time</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {moment(values?.newTime).format(':YYYY/MM/DD, h:mm a')}
          </Text>
        </View>
      </HView>
      {/* <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Staff</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>{''}</Text>
        </View>
      </HView> */}
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Customer</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {values?.Booking?.UserMain?.userName}
          </Text>
          <HView>
            {[1, 2, 3, 4, 5].map((it, i) => {
              return (
                <Icon
                  key={i}
                  size={14}
                  style={styles.tagIcon}
                  name="star"></Icon>
              );
            })}
            <Text style={styles.rightSideSmallText}>(5.0)</Text>
          </HView>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Email</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {values?.Booking?.UserMain?.email}
          </Text>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Phone</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText]}>
            {values?.Booking?.UserMain?.phoneNumber}
          </Text>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>SP+Fee</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText, {color: colors.error}]}>
            {'$' + values?.Booking?.storePlatformFee}
          </Text>
        </View>
      </HView>
      <HView style={styles.containerH}>
        <View style={styles.leftSideView}>
          <Text style={styles.leftSideText}>Revenue</Text>
        </View>
        <View style={styles.rightSideView}>
          <Text style={[styles.rightSideText, {color: colors.error}]}>
            {'$' + values?.Booking?.revenueEarned}
          </Text>
        </View>
      </HView>

      <View style={{paddingHorizontal: 10}}>
        <SpecialText
          value={values?.Booking?.BookingStatus?.title}
          type={values?.Booking?.status}
        />
      </View>

      {false && (
        <HView style={styles.iconsContainer}>
          <TextWithIcon
            textColor={colors.error}
            iconName="clock-time-nine-outline"
            value1="24"
            value2="No Shows"
          />
          <TextWithIcon
            textColor={colors.Yellow}
            iconName="close-circle"
            value1="30"
            value2="Late Checked In"
          />
          <TextWithIcon
            textColor={colors.PRIMARY}
            iconName="timelapse"
            value1="24"
            value2="Cancelled"
          />
        </HView>
      )}
      <View style={styles.line}></View>
      <HView style={styles.btnHolder}>
        <TouchableOpacity
          onPress={() => showCustNotePopup()}
          style={styles.iconHolder}>
          <HView style={styles.view1}>
            <Icon name="note" size={18} color="#19B5FE" />
            <Text style={styles.text1}>Customer</Text>
          </HView>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconHolder}
          onPress={() => showLocation()}>
          <HView style={styles.view2}>
            <Icon name="map-marker" size={18} color="#19B5FE" />
            <Text style={styles.text2}>Location</Text>
          </HView>
        </TouchableOpacity>
      </HView>
    </View>
  );
};

export default RescheduleBookingCard;
