import React, {useState, useEffect} from 'react';
import {ScrollView, View} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import {Animated} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import TimeBox from '../TimeBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import color from '../../Constants/color';
import moment from 'moment';
import Button from '../CustomButton';
import InputComponent from '../InputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ReschedulePopup = ({handleFilter, rescheduleConfirmReq}) => {
  // console.log('reMsg in popup' + JSON.stringify(reMsg));
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [time, setTime] = useState('');
  const [isSelected, setIsSelected] = useState(true);
  const [text, setText] = useState('');
  const [state, setState] = useState({
    x: new Animated.Value(0),
    y: new Animated.Value(1),
    visible: false,
  });
  useEffect(() => {
    state.x.addListener(({value}) => {
      if (value == 1) setState({...state, ['visible']: true});
      //console.log("x ", value)
    });
    state.y.addListener(({value}) => {
      if (value == 2) {
        // console.log("UnMounted")
        handleFilter(false);
      }
      //  console.log("y ", value)
    });
    open();
    return () => {
      state.x.removeAllListeners();
      state.y.removeAllListeners();
    };
  }, []);
  const open = () => {
    Animated.timing(state.x, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const close = () => {
    Animated.timing(state.y, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // handleFilter(false)
  };
  const onDateChange = (date) => {
    setSelectedStartDate(moment(date).format('YYYY-MM-DD'));
    setIsVisible(!isVisible);
    // console.log('selected Date ' + date);
  };

  const timeList = [
    '08 AM',
    '09 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '01 PM',
    '02 PM',
    '03 PM',
    '04 PM',
    '05 PM',
    '06 PM',
    '07 PM',
    '08 PM',
    '09 PM',
    '10 PM',
    '11 PM',
    '12 AM',
  ];

  const confirmReBooking = () => {
    rescheduleConfirmReq();
  };

  const setBookingTime = (time) => {
    console.log(time);
    setTime(time);
    setIsSelected(false);
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: state.visible
                ? state.y.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 700],
                  })
                : state.x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [700, 0],
                  }),
            },
          ],
        },
      ]}>
      <KeyboardAwareScrollView>
        <View style={styles.containerHeader}>
          <HView style={styles.containerSubHeader}>
            <View style={styles.header}>
              <Text style={styles.title}>Reschedule Booking</Text>
            </View>
            <TouchableIcon onPress={() => close()} style={styles.icon}>
              <Icon name="close-circle-outline" size={24} />
            </TouchableIcon>
          </HView>
        </View>
        <View style={styles.roundCard}>
          {isSelected ? (
            <View>
              {isVisible && (
                <View>
                  <CalendarPicker onDateChange={onDateChange} />
                </View>
              )}
              {!isVisible && (
                <TouchableOpacity
                  onPress={() => setIsVisible(!isVisible)}
                  style={styles.backBtn}>
                  <Icon name="chevron-left" size={20} color={color.PRIMARY} />
                  <Text style={styles.text}>Back to Calendar</Text>
                </TouchableOpacity>
              )}
              {!isVisible && (
                <ScrollView style={styles.scroll}>
                  <HView style={styles.slotsContainer}>
                    {timeList.map((it, i) => {
                      return (
                        <TimeBox
                          key={i}
                          value={it}
                          selectedTime={time}
                          onPress={() => setBookingTime(it)}
                        />
                      );
                    })}
                  </HView>
                </ScrollView>
              )}
            </View>
          ) : (
            //ye final date and time show krega
            <View>
              <Text style={styles.dateText}>
                {'You are requesting to reschedule this booking for ' +
                  selectedStartDate +
                  ' & ' +
                  time}
              </Text>
              <InputComponent
                placeholder="Feedback"
                onChangeText={(t) => setText(t)}
                value={text}
              />
              <HView style={styles.btnHolder}>
                <Button
                  title="Confirm"
                  containerStyle={styles.btn1}
                  titleStyle={styles.buttonTitle1}
                  onPress={() => confirmReBooking()}
                />
                <Button
                  title="Discard"
                  containerStyle={styles.btn2}
                  titleStyle={styles.buttonTitle2}
                  onPress={() => close()}
                />
              </HView>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </Animated.View>
  );
};
export default ReschedulePopup;
