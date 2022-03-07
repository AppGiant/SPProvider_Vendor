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

const DepositeMoney = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container1}>
        <View style={styles.card}>
          <View style={styles.headView}>
            <Text style={styles.text}>Deposite Money</Text>
          </View>
          <TextBetweenLine />
          <View style={styles.dropdownContainer}>
            <CurrencyDropdown />
          </View>
          <TextBetweenLine />
          <HView style={styles.totalView}>
            <Text style={styles.text1}>Total</Text>
            <Text style={styles.text2}>$500.00</Text>
          </HView>
          <Button
            title="Confirm $ Deposite $ 500.00"
            containerStyle={styles.btn2}
            titleStyle={styles.buttonTitle2}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Payment Method</Text>
          <View style={styles.card}>
            <Text style={styles.name}>Halais</Text>
            <HView style={styles.cardContainer}>
              <Text style={styles.cardNo}>xxxx xxxx xxxx 2021</Text>
              <Text style={styles.cardName}>VISA</Text>
            </HView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DepositeMoney;
