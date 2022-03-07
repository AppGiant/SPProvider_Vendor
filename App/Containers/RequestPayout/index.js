import React, {useState, useEffect} from 'react';
import CurrencyDropdown from '../../Components/CurrencyDropdown';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../../Components/HView';
import {Button} from 'react-native-elements/dist/buttons/Button';
import TextBetweenLine from '../../Components/TextBetweenLine';
import InputComponent from '../../Components/InputComponent';
import {BackHandler} from 'react-native';

const RequestPayout = (props) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container1}>
        <View style={styles.card}>
          <View style={styles.headView}>
            <Text style={styles.text}>Request Payout</Text>
          </View>
          <TextBetweenLine />
          <Text style={styles.avlText}>Available Payout</Text>
          <TextBetweenLine />

          <HView style={styles.usdHolder}>
            <Text>USD</Text>
            <Text style={styles.usdText}>$800.00</Text>
          </HView>
          <HView style={styles.sarHolder}>
            <Text>Saudi Riyal</Text>
            <Text style={styles.usdText}>SAR 560</Text>
          </HView>
          <HView style={styles.usdHolder}>
            <Text>GBP</Text>
            <Text style={styles.usdText}>£650.00</Text>
          </HView>
          <View style={styles.dropdown}>
            <CurrencyDropdown />
          </View>
          <View style={styles.inputContainer}>
            <InputComponent label="Amount" placeholder="$500.00" />
          </View>
          <TextBetweenLine />
          <Button
            title="Confirm Withdraw"
            containerStyle={styles.btn}
            titleStyle={styles.buttonTitle}
          />
          <HView style={styles.balanceView}>
            <HView>
              <Text style={styles.smallText}>Payout fee</Text>
              <Text style={styles.smallText1}>$72.00</Text>
            </HView>
            <HView>
              <Text style={styles.smallText}>Remaining Balance in wallet</Text>
              <Text style={styles.smallText1}>$8.00</Text>
            </HView>
          </HView>
        </View>
        <View style={styles.bottomTxt}>
          <Text style={styles.smallText}>
            Please allow 7-14 working days to recieve payout
          </Text>
        </View>
        {/* <View style={styles.card}>
          <Text style={styles.headText}>
            Select Bank Account to Recieve Payout
          </Text>
          <HView style={styles.bankHolder}>
            <View>
              <Text style={styles.bankText}>Bank Name</Text>
              <Text style={styles.bankText1}>Albilad</Text>
              <Text style={styles.cardNo}>xxxx xxxx xxxx 2021</Text>
            </View>
            <View>
              <Text style={styles.bankText}>Beneficary</Text>
              <Text style={styles.bankText1}>Halais</Text>
            </View>
          </HView>
          <Text style={styles.addText}>Add New Bank Account</Text>
        </View> */}
        {/* <HView style={styles.btnHolder}>
          <Button
            title="Cancel"
            containerStyle={styles.btn1}
            titleStyle={styles.buttonTitle1}
          />
          <Button
            title="Confirm & Request Payout $ 720.00"
            containerStyle={styles.btn2}
            titleStyle={styles.buttonTitle2}
          />
        </HView> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default RequestPayout;
