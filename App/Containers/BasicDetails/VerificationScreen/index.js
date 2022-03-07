import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import {W, H} from '../../../utils/DimensionCalculator';
import styles from './style';
import OTPInput from '../../../Components/OTPInputNew';
import {Button} from 'react-native-elements/dist/buttons/Button';
import color from '../../../Constants/color';
import {Screens} from '../../../Constants/constant';
import {
  userRegister,
  verifyPhoneOTP,
  sendPhoneOTP,
} from '../../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import {BackHandler} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
const VerificationSchema = Yup.object().shape({
  code: Yup.number()
    .typeError('Code must be a number')
    .required('Code required'),
});

const VerificationScreen = (props) => {
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
  useEffect(() => {
    timer();
  }, [props.route.params.phoneNumber]);
  const [seconds, setSeconds] = useState(30);
  const timer = () => {
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        //   doSomething();
      } else {
        setSeconds(timeLeft);
        timeLeft--;
      }
    }

    function doSomething() {
      alert('Hi');
    }
  };

  const resendOTP = () => {
    sendPhoneOTP({
      phoneNumber: props.route.params.formDetail.phoneNumber,
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(
            'OTP Sent Successfully',
            Toast.LONG,
            Toast.BOTTOM,
          );
          timer();
        } else {
          Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        Toast.showWithGravity(
          err && err.message ? err.message : 'Something wrong contact admin',
          Toast.LONG,
          Toast.BOTTOM,
        );
      });
  };
  const onVerification = (code) => {
    const user = props.route.params.formDetail;
    console.log({
      phoneNumber: user.phoneNumber,
      OTP: code,
    });
    verifyPhoneOTP({
      phoneNumber: user.phoneNumber,
      OTP: code,
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(
            'User Verified Successfully',
            Toast.LONG,
            Toast.BOTTOM,
          );
          props.navigation.navigate(Screens.LOGIN);
        } else {
          Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        Toast.showWithGravity(
          err && err.message ? err.message : 'Something wrong contact admin',
          Toast.LONG,
          Toast.BOTTOM,
        );
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: W(20), paddingTop: H(20)}}>
        <Text style={styles.headText}>Verify Your Phone</Text>
        <Text style={styles.subText}>
          A Verification code was sent to your provided mobile phone number,
          please enter the code to proceed
        </Text>
        <Formik
          validationSchema={VerificationSchema}
          initialValues={{
            code: '',
          }}
          onSubmit={(values) => {
            if (values.code.length != 4) {
              Toast.showWithGravity('Invalid Code', Toast.LONG, Toast.BOTTOM);
              return;
            }
            onVerification(values.code);
          }}
          validateOnChange>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setFieldValue,
          }) => (
            <View>
              <OTPInput
                onCodeChanged={handleChange('code')}
                code={values.code}
                pinCount={4}
              />
              <Text style={styles.error}>{errors.code}</Text>
              <Button
                onPress={handleSubmit}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                title="Verify Code"></Button>
            </View>
          )}
        </Formik>
        <TouchableOpacity
          activeOpacity={seconds > 0 ? 1 : 0.5}
          onPress={() => (seconds == 0 ? resendOTP() : {})}>
          <Text style={styles.subText}>
            {seconds > 0
              ? `Didn’t Receive One? Resend Code in ${seconds} seconds`
              : `Didn’t Receive One? Resend Code `}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(Screens.ADD_PHONE_NUMBER)}>
          <Text style={styles.subText}>Add another Phone Number</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default VerificationScreen;
