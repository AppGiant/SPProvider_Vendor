import React, {useState, useEffect} from 'react';
import styles from './style';
import HView from '../../Components/HView';
import InputComponent from '../../Components/InputComponent';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../Constants/color';
import AcceptPopup from '../../Components/AcceptPopup';
import RejectPopup from '../../Components/RejectPopup';
import ReschedulePopup from '../../Components/ReschedulePopup';
import CustomerNotePopup from '../../Components/CustomerNotePopup';
import LocationPopup from '../../Components/LocationPopup';
import {BackHandler} from 'react-native';
import {
  getAcceptBooking,
  getRejectBooking,
  getStoreBookings,
  getMyFilteredBookings,
} from '../../api/ApiManager';
import BookingRequestCard from '../../Components/BookingRequestCard';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../Components/Loader';
import Toast from 'react-native-simple-toast';
import CalendarPicker from 'react-native-calendar-picker';
import {Modal, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Chip} from 'react-native-elements';
import {Colors} from '../../Themes';

const screenWidth = Dimensions.get('screen').width;

const BookingRequests = (props) => {
  const handler = () => {
    props.navigation.goBack();
    return true;
  };
  useEffect(() => {
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, []);

  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [values, setValues] = useState([]);

  const [acceptPopup, setAcceptPopup] = useState(false);
  const [rejectPopup, setRejectPopup] = useState(false);
  const [reschedulePopup, setReschedulePopup] = useState(false);

  const [custNotePopup, setCustNotePopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [count, setCount] = useState(0);
  const [bookingId, setBookingId] = useState();
  const [page, setPage] = useState(1);

  const [retry, setRetry] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [showChips, setShowChips] = useState(false);
  const [filteredPage, setFilteredPage] = useState(1);
  const [showFilterStatus, setShowFilterStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const isFocussed = useIsFocused();

  useEffect(() => {
    setValues([]);
    setLoading(true);
    getBookingRequests(1);
  }, [isFocussed]);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(moment(date).format('YYYY-MM-DD'));
    } else {
      setSelectedStartDate(moment(date).format('YYYY-MM-DD'));
      setSelectedEndDate('');
    }
  };

  const onOkPressed = () => {
    if (
      selectedStartDate != 'Invalid date' &&
      selectedStartDate != '' &&
      selectedEndDate != '' &&
      selectedEndDate != 'Invalid date'
    ) {
      setValues([]);
      setModalVisible(false);
      setShowChips(true);
      setLoader(true);
      filterBookings(1);
    }
  };

  const getHistory = () => {
    setValues([]);
    setLoading(true);
    getBookingRequests(1);
  };

  const getBookingRequests = (page) => {
    getStoreBookings(1, page || 1)
      .then((res) => {
        if (res.status) {
          // setValues(res.bookings);
          setCount(1);
          setLoading(false);
          setFailed(false);
          setRetry(false);
          setShowChips(false);
          setShowFilterStatus(false);
          if (res && res.bookings && res.bookings.length > 0) {
            if (page == 1) setValues(res?.bookings);
            else setValues([...values, ...res?.bookings]);
            if (res?.bookings) setPage(res?.nextPage);
          }
          setLoader(false)
          // console.log('Booking Req ' + JSON.stringify(res));
        } else {
          setShowFilterStatus(false);
          setShowChips(false);
          setLoading(false);
          setLoader(false);
          setRetry(false);
          // setFailed(true);
          if (count > 0) {
            // Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          } else {
            setFailed(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setRetry(true);
        setLoading(false);
        setLoader(false);
      });
  };

  const filterBookings = (filteredPage) => {
    // console.log({
    //   filteredPage: filteredPage,
    //   selectedEndDate: selectedEndDate,
    //   selectedStartDate: selectedStartDate,
    //   values: values,
    // });

    getMyFilteredBookings(
      1,
      filteredPage || 1,
      selectedEndDate || null,
      selectedStartDate || null,
    )
      .then((res) => {
        if (res.status) {
          console.log('filterBookings => ' + JSON.stringify(res.status));
          setFilterCount(1);
          setLoading(false);
          setLoader(false);
          setFailed(false);
          setRetry(false);
          setShowFilterStatus(false);
          if (res && res.bookings && res.bookings.length > 0) {
            if (filteredPage == 1) setValues(res?.bookings);
            else setValues([...values, ...res?.bookings]);
            if (res?.bookings) setFilteredPage(res?.nextPage);
          }
        } else {
          if (filteredPage == 1) setShowFilterStatus(true);
          setLoading(false);
          setLoader(false);
          setRetry(false);
          // console.log('filterBookings false => ' + JSON.stringify(res));
          // setFailed(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setRetry(true);
        setLoading(false);
        setLoader(false);
      });
  };

  const acceptBooking = () => {
    getAcceptBooking(bookingId)
      .then((res) => {
        if (res.status) {
          getBookingRequests(1);
          setAcceptPopup(false);
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          // console.log('accept popup => ' + JSON.stringify(res));
        } else {
          setAcceptPopup(false);
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          console.log('accept popup => ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectBooking = () => {
    getRejectBooking(bookingId)
      .then((res) => {
        if (res.status) {
          getBookingRequests(1);
          setRejectPopup(false);
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        } else {
          setRejectPopup(false);
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showNotePopup = () => {
    setLocationPopup(false);
    setCustNotePopup(!custNotePopup);
  };

  const showLocationPopup = () => {
    setCustNotePopup(false);
    setLocationPopup(!locationPopup);
  };

  const accept = (id) => {
    console.log('accept called => ' + id);
    setBookingId(id);
    setRejectPopup(false);
    setReschedulePopup(false);
    setAcceptPopup(!acceptPopup);
  };

  const reject = (id) => {
    console.log('reject called => ' + id);
    setBookingId(id);
    setAcceptPopup(false);
    setReschedulePopup(false);
    setRejectPopup(!rejectPopup);
  };

  const reschedule = () => {
    console.log('reschedule called');
    setAcceptPopup(false);
    setRejectPopup(false);
    setReschedulePopup(!reschedulePopup);
  };

  const menuItems = [
    {title: 'Accept', onPress: accept},
    {title: 'Reject', onPress: reject},
    // {title: 'Reschedule', onPress: reschedule},
  ];

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    // console.log('layout height -> ' + contentSize.height);
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  if (loading)
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <Loader />
      </View>
    );

  if (failed)
    return (
      <View style={[styles.failedText, styles.horizontal]}>
        <Text>You Don't Have Any Bookings in this Category</Text>
      </View>
    );

    if (retry)
    return (
      <View style={[styles.failedText, styles.horizontal]}>
        <TouchableOpacity onPress={() => getBookingRequests(1)}>
          <Text>Tap to retry</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <SafeAreaView style={styles.mainConatiner}>
      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            if (loader) return;
            setLoader(true);
            // setPage(nextPage);
            if (showChips) {
              filterBookings(filteredPage);
            } else {
              getBookingRequests(page);
            }
          }
        }}
        scrollEventThrottle={400}>
        <View style={styles.container}>
          <View style={styles.transactionView}>
            {/* <Text style={styles.transactionText}>Filter</Text> */}
            {showChips ? (
              <Chip
                title={selectedStartDate + ' - ' + selectedEndDate}
                icon={{
                  name: 'close',
                  type: 'font-awesome',
                  size: 20,
                  color: 'white',
                }}
                iconRight
                onPress={() => getHistory()}
              />
            ) : (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <HView style={styles.dateView}>
                  <Text style={styles.dateText}>Date</Text>
                  <Icon
                    name="calendar-month"
                    size={20}
                    style={styles.calendarIcon}
                  />
                </HView>
              </TouchableOpacity>
            )}
          </View>
          {showFilterStatus ? (
            <Text>No Bookings Available </Text>
          ) : (
            values.map((it, index) => (
              <BookingRequestCard
                key={index}
                values={it}
                menuItems={[...menuItems]}
                showDots={true}
                showNotePopup={showNotePopup}
                showLocationPopup={showLocationPopup}
              />
            ))
          )}
          {loader && <Loader />}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name="close"
              size={20}
              onPress={() => setModalVisible(false)}
              style={styles.closeIcon}
            />
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              onDateChange={onDateChange}
              width={screenWidth * 0.85}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.white}
            />
            <TouchableOpacity
              style={[styles.okBtn]}
              onPress={() => onOkPressed()}>
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showFilter && <SortAndFiltersPopUp handleFilter={setShowFilter} />}
      {acceptPopup && (
        <AcceptPopup
          handleFilter={setAcceptPopup}
          acceptBooking={acceptBooking}
        />
      )}
      {rejectPopup && (
        <RejectPopup
          handleFilter={setRejectPopup}
          rejectBooking={rejectBooking}
        />
      )}
      {reschedulePopup && <ReschedulePopup handleFilter={setReschedulePopup} />}
      {custNotePopup && <CustomerNotePopup handleFilter={setCustNotePopup} />}
      {locationPopup && <LocationPopup handleFilter={setLocationPopup} />}
    </SafeAreaView>
  );
};
export default BookingRequests;
