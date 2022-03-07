import React, {useState, useEffect} from 'react';
import Button from '../../../Components/CustomButton';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import HView from '../../../Components/HView';
import {
  SafeAreaView,
  View,
  ScrollView,
} from '../../../Components/StyledComponents';
import TableFormat from '../../../Components/TableFormat';
import Text from '../../../Components/TextI';
import TransactionComponent from '../../../Components/TransactionComponent';
import StockIcon from '../../../Images/stock_svg.svg';
import styles from './style';
import TextBetweenLine from '../../../Components/TextBetweenLine';
import {BackHandler} from 'react-native';
import TransactionPopup from '../../../Components/TransactionPopup';
import RaiseDisputePopup from '../../../Components/RaiseDisputePopup';
import DisputeStatusPopup from '../../../Components/DisputeStatusPopup';
import {Screens} from '../../../Constants/constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Wallet = (props) => {
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
      amount: '100',
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
      amount: '100',
    },
  ]);

  const [columns, setColumns] = useState({
    col1: 'Date',
    col2: 'Transaction',
    col3: 'Amount',
  });

  const clickHandler = (index) => {
    console.log(index);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isRaiseDispute, setIsRaiseDispute] = useState(false);
  const [isDisputed, setIsDisputed] = useState(false);

  const viewDetail = () => {
    console.log('view detail called');
    // if (!isRaiseDispute && !isDisputed) {
    //   setIsVisible(!isVisible);
    // }
    setIsRaiseDispute(false);
    setIsDisputed(false);
    setIsVisible(!isVisible);
  };

  const raiseDispute = () => {
    console.log('raise Dispute called');
    // if (!isVisible && !isDisputed) {
    //   setIsRaiseDispute(!isRaiseDispute);
    // }
    setIsVisible(false);
    setIsDisputed(false);
    setIsRaiseDispute(!isRaiseDispute);
  };

  const disputed = () => {
    console.log('disputed');
    // if (!isVisible && !isRaiseDispute) {
    //   setIsDisputed(!isDisputed);
    // }
    setIsVisible(false);
    setIsRaiseDispute(false);
    setIsDisputed(!isDisputed);
  };

  const menuItems = [
    {title: 'View Details', onPress: viewDetail},
    {title: 'Raise Dispute', onPress: raiseDispute},
    {title: 'Disputed', onPress: disputed},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.roundCard}>
          <HView style={styles.walletView}>
            <Text style={styles.walletText}>Wallet Balance</Text>
            <StockIcon />
          </HView>
          <TextBetweenLine />
          <HView style={styles.balanceView}>
            <Text style={styles.balanceText1}>USD</Text>
            <Text style={styles.balanceText2}>$ 850.20</Text>
          </HView>
        </View>
        <HView style={styles.btnHolder}>
          <Button
            title="Add Money"
            containerStyle={styles.btn1}
            titleStyle={styles.buttonTitle1}
            onPress={() => props.navigation.navigate(Screens.DEPOSITE_MONEY)}
          />
          <Button
            title="Request Payout"
            containerStyle={styles.btn2}
            titleStyle={styles.buttonTitle2}
            onPress={() => props.navigation.navigate(Screens.REQUEST_PAYOUT)}
          />
        </HView>
        <View style={styles.tableContainer}>
          <HView style={styles.transactionView}>
            <Text style={styles.transactionText}>Transaction History</Text>
            <HView style={styles.dateView}>
              <Text style={styles.dateText}>Date</Text>
              <Icon
                name="calendar-month"
                size={20}
                style={styles.calendarIcon}
              />
            </HView>
          </HView>
          <TableFormat columns={columns} />
          <FlatList
            data={transactions}
            renderItem={({item, index}) => (
              <TransactionComponent
                item={item}
                index={index}
                clickHandler={clickHandler}
                // showPopup={showPopup}
                menuItems={menuItems}
              />
            )}
            ListFooterComponent={() => (
              <TouchableOpacity>
                <Text style={styles.footerText}>Show more</Text>
              </TouchableOpacity>
            )}
          />
        </View>
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

export default Wallet;
