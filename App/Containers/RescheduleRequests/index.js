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
import AcceptReschedulePopup from '../../Components/AcceptRescheduledPopup';
import RejectReschedulePopup from '../../Components/RejectRescheduledPopup';
import LocationPopup from '../../Components/LocationPopup';
import CustomerNotePopup from '../../Components/CustomerNotePopup';
import {
  getStoreBookings,
  rescheduleBookingAction,
  getMyFilteredBookings,
} from '../../api/ApiManager';
import RescheduleBookingCard from '../../Components/RescheduleBookingCard';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../Components/Loader';
import CancelReschedulePopup from '../../Components/CancelReschedulePopup';
import Toast from 'react-native-simple-toast';
import CalendarPicker from 'react-native-calendar-picker';
import {Modal, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Chip} from 'react-native-elements';
import {Colors} from '../../Themes';

const screenWidth = Dimensions.get('screen').width;

const RescheduleRequests = () => {
  const [values, setValues] = useState([]);

  const [acceptPopup, setAcceptPopup] = useState(false);
  const [rejectPopup, setRejectPopup] = useState(false);
  const [cancelPopup, setCancelPopup] = useState(false);

  const [custNotePopup, setCustNotePopup] = useState(false);
  const [locationPopup, setLocationPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [count, setCount] = useState(0);
  const [id, setId] = useState();
  const [bookingId, setBookingId] = useState();
  const [action, setAction] = useState();

  const [page, setPage] = useState(1);
  const [retry, setRetry] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [showChips, setShowChips] = useState(false);
  const [filteredPage, setFilteredPage] = useState(1);
  const [showFilterStatus, setShowFilterStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const [filterCount, setFilterCount] = useState(0)

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
    getStoreBookings(3, page || 1)
      .then((res) => {
        if (res.status) {
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
      3,
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

  const rescheduleBooking = () => {
    rescheduleBookingAction({
      id: id,
      bookingId: bookingId,
      action: action,
    })
      .then((res) => {
        if (res.status) {
          setRejectPopup(false);
          setAcceptPopup(false);
          setCancelPopup(false);
          getBookingRequests();
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        } else {
          setRejectPopup(false);
          setAcceptPopup(false);
          setCancelPopup(false);
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

  const accept = (id, bookingId) => {
    console.log('accept => ' + id);
    setId(id);
    setBookingId(bookingId);
    setAction(2);
    setRejectPopup(false);
    setCancelPopup(false);
    setAcceptPopup(!acceptPopup);
  };

  const reject = (id, bookingId) => {
    console.log('reject => ' + id);
    setId(id);
    setBookingId(bookingId);
    setAction(1);
    setAcceptPopup(false);
    setCancelPopup(false);
    setRejectPopup(!rejectPopup);
  };

  const cancel = (id, bookingId) => {
    console.log('cancel => ' + id);
    setId(id);
    setBookingId(bookingId);
    setAction(3);
    setAcceptPopup(false);
    setRejectPopup(false);
    setCancelPopup(!cancelPopup);
  };

  const menuItems = [
    {title: 'Accept', onPress: accept},
    {title: 'Reject', onPress: reject},
    {title: 'Cancel', onPress: cancel},
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
    <SafeAreaView style={styles.mainContainer}>
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
              <RescheduleBookingCard
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
      {acceptPopup && (
        <AcceptReschedulePopup
          handleFilter={setAcceptPopup}
          rescheduleBooking={rescheduleBooking}
        />
      )}
      {rejectPopup && (
        <RejectReschedulePopup
          handleFilter={setRejectPopup}
          rescheduleBooking={rescheduleBooking}
        />
      )}
      {cancelPopup && (
        <CancelReschedulePopup
          handleFilter={setCancelPopup}
          rescheduleBooking={rescheduleBooking}
        />
      )}
      {custNotePopup && <CustomerNotePopup handleFilter={setCustNotePopup} />}
      {locationPopup && <LocationPopup handleFilter={setLocationPopup} />}
    </SafeAreaView>
  );
};

export default RescheduleRequests;
