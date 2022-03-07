import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ScrollViewComponent} from 'react-native';
import {BackHandler} from 'react-native';
import KycCard from '../../Components/KycCard';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import Chart from '../../Components/Chart';
import {W} from '../../utils/DimensionCalculator';
import Header from '../../Components/Header';
import {Screens} from '../../Constants/constant';
import {getMyStoreDetails} from '../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';

const Dashboard = (props) => {
  const handler = () => {
    BackHandler.exitApp();
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
  const isFocused = useIsFocused();

  useEffect(() => {
    getAccessToken();
    getStoreDetails();
  }, [isFocused]);

  const getAccessToken = () => {
    console.log(props.navigation);
    AsyncStorage.getItem('accessToken')
      .then((res) => {
        console.log('accessToken => ' + res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStoreDetails = () => {
    getMyStoreDetails()
      .then((res) => {
        // console.log('StoreDetails => ' + JSON.stringify(res));
        if (res.status) {
          AsyncStorage.setItem('storeData', JSON.stringify(res)).then((res) => {
            // console.log('StoreData => ' + res);
          });
        } else {
          console.log(JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: W(10)}}>
          <KycCard
            title="Get complete control of your account"
            head="Verify your email"
            description="Please verify your email to keep your account 100% protected."
            link="Resend Verification Link"
            onPress={() =>
              props.navigation.navigate(Screens.EMAIL_VERIFICATION)
            }
          />
          <KycCard
            head="KYC document verification"
            description="Please verify your KYC to keep your account complete and authentic."
            link="Upload The Documents"
            type="high"
            onPress={() => props.navigation.navigate(Screens.KYC_VERIFICATION)}
          />
          <KycCard
            title="Profile Completion 70%"
            head="Complete profile sections"
            description="Please input  your profile information to    complete your profile."
            link="Complete Profile Sections"
            type="moderate"
            onPress={() => props.navigation.navigate(Screens.PROFILE_SECTION)}
          />
          <Chart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Dashboard;
