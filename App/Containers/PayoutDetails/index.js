import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import BankImage from '../../Images/bank_svg.svg';
import BookingInfoCard from '../../Components/BankingInfoCard';
import Button from '../../Components/CustomButton';
import {Screens} from '../../Constants/constant';

const PayoutDetails = (props) => {
  const [values, setValues] = useState([
    {
      firstName: 'Hameed',
      midName: 'H',
      lastName: 'Nooh',
      bussinessName: 'Hameed',
      bankName: 'Hameed',
      account: '01273827383847',
      iBan: 'SA 12-21-3232-43434-454',
      mobile: '+917878787878',
    },
  ]);
  return (
    <SafeAreaView>
      <ScrollView>
        {values.map((it, index) => (
          <BookingInfoCard key={index} values={it} />
        ))}
        <View style={styles.roundCard}>
          <View style={styles.image}>
            <BankImage />
            <Text style={styles.text}>
              You can add multiple banking acounts to withdraw your payouts.
            </Text>
            <Button
              titleStyle={styles.buttonTitle1}
              title="Add New Payment Method"
              containerStyle={styles.btn1}
              onPress={() => props.navigation.navigate(Screens.ADD_PAYOUT)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PayoutDetails;
