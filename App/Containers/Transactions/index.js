import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import HView from '../../Components/HView';
import styles from './style';
import {FlatList} from 'react-native';
import TransactionComponent from '../../Components/TransactionComponent';
import TableFormat from '../../Components/TableFormat';
import {BackHandler} from 'react-native';
import TransactionPopup from '../../Components/TransactionPopup';
import RaiseDisputePopup from '../../Components/RaiseDisputePopup';
import DisputeStatusPopup from '../../Components/DisputeStatusPopup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Transactions = (props) => {
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
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'service comission taken for booking SP748927394',
      amount: '100',
    },
    {
      id: '2',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '-100',
    },
    {
      id: '3',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
    {
      id: '4',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
    {
      id: '5',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '-100',
    },
    {
      id: '6',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
    {
      id: '7',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
    {
      id: '8',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
    {
      id: '9',
      date: '11/11/11',
      time: ':12:00 PM',
      transaction: 'payment for 748927394',
      amount: '100',
    },
  ]);

  const [columns, setColumns] = useState({
    col1: 'Date',
    col2: 'Transaction',
    col3: 'Amount',
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isRaiseDispute, setIsRaiseDispute] = useState(false);
  const [isDisputed, setIsDisputed] = useState(false);

  const viewDetail = () => {
    console.log('view detail called');
    setIsRaiseDispute(false);
    setIsDisputed(false);
    setIsVisible(!isVisible);
  };

  const raiseDispute = () => {
    console.log('raise Dispute called');
    setIsVisible(false);
    setIsDisputed(false);
    setIsRaiseDispute(!isRaiseDispute);
  };

  const disputed = () => {
    console.log('disputed');
    setIsVisible(false);
    setIsRaiseDispute(false);
    setIsDisputed(!isDisputed);
  };

  const menuItems = [
    {title: 'View Details', onPress: viewDetail},
    {title: 'Raise Dispute', onPress: raiseDispute},
    {title: 'Disputed', onPress: disputed},
  ];

  const clickHandler = (index) => {
    console.log(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HView style={styles.headerView}>
          <Text style={styles.headerText}>Transaction History</Text>
          <HView style={styles.dateView}>
            <Text style={styles.dateText}>Date</Text>
            <Icon name="calendar-month" size={20} style={styles.calendarIcon} />
          </HView>
        </HView>
        <TableFormat columns={columns} />
        <FlatList
          data={transactions}
          renderItem={({item, index}) => (
            <TransactionComponent
              index={index}
              item={item}
              clickHandler={clickHandler}
              // showPopup={showPopup}
              menuItems={menuItems}
            />
          )}
        />
      </View>
      <View style={styles.popup}>
        {isVisible && <TransactionPopup handleFilter={setIsVisible} />}
        {isRaiseDispute && (
          <RaiseDisputePopup handleFilter={setIsRaiseDispute} />
        )}
        {isDisputed && <DisputeStatusPopup handleFilter={setIsDisputed} />}
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
