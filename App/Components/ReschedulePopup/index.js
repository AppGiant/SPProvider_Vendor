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

const ReschedulePopup = ({handleFilter}) => {
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

  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
    setIsVisible(!isVisible);
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

  const changeColor = () => {};

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
      <View style={styles.containerHeader}>
        <HView style={styles.containerSubHeader}>
          <View style={styles.header}>
            <Text style={styles.title}>Reschedule</Text>
          </View>
          <TouchableIcon onPress={() => close()} style={styles.icon}>
            <Icon name="close-circle-outline" size={24} />
          </TouchableIcon>
        </HView>
      </View>
      <View style={styles.roundCard}>
        {isVisible && (
          <CalendarPicker
            // startFromMonday={true}
            // allowRangeSelection={true}
            // minDate={minDate}
            // maxDate={maxDate}
            // todayBackgroundColor={Colors.Yellow}
            // selectedDayColor={Colors.PRIMARY}
            // selectedDayTextColor={Colors.DARK_CHARCOAL}
            onDateChange={onDateChange}
          />
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
                return <TimeBox key={i} value={it} changeColor={changeColor} />;
              })}
            </HView>
          </ScrollView>
        )}
      </View>
    </Animated.View>
  );
};
export default ReschedulePopup;
