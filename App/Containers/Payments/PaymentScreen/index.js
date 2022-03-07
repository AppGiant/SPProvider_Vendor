import React from 'react';
import {SafeAreaView, View} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import Swiper from '../../../Components/Swiper';
import PaymentMethods from '../PaymentMethods';
import Wallet from '../Wallet';

const PaymentScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Payment Screen</Text>
      </View>
      <Swiper>
        <View>
          <Wallet />
        </View>
        <View>
          <PaymentMethods />
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default PaymentScreen;
