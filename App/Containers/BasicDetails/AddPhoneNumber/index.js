import React, {useState,useEffect} from 'react';
import StepHeader from '../../../Components/StepHeader';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import styles from './style';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Screens} from '../../../Constants/constant';
import PhoneInput from '../../../Components/PhoneInput';
import {Formik} from 'formik';
import { BackHandler } from 'react-native'

import {

  phoneAvailability,
  sendPhoneOTP,
 
} from '../../../api/ApiManager';

import Toast from 'react-native-simple-toast';

const AddPhoneNumber = (props) => {
  const handler=()=>
  {
    props.navigation.goBack();
    return true
  }
  useEffect(() => {
    const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", handler);
      return () => {
        
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };
    }, []);
  const [code, setCode] = useState({callingCode: ['91']});
  const register = (data) => {
    const formDetail = {...data};
    formDetail.phoneNumber = '+' + code.callingCode[0] + formDetail.phoneNumber;
    Promise.all([phoneAvailability({phoneNumber: formDetail.phoneNumber})])
      .then((res1) => {
        if (res1[0].status) {
          Promise.all([
            sendPhoneOTP({
              phoneNumber: formDetail.phoneNumber,
            }),
          ])
            .then((res) => {
              // console.log(res);
              if (res[0].status) {
                Toast.showWithGravity(
                  'OTP Sent Successfully',
                  Toast.LONG,
                  Toast.BOTTOM,
                );
                props.navigation.navigate(Screens.VERIFICATION, {formDetail});
              } else if (!res[0].status) {
                Toast.showWithGravity(res[0].message, Toast.LONG, Toast.BOTTOM);
              }
            })
            .catch((err) => {
              Toast.showWithGravity(
                err && err.message
                  ? err.message
                  : 'Something wrong contact admin',
                Toast.LONG,
                Toast.BOTTOM,
              );
            });
        } else if (!res1[0].status) {
          Toast.showWithGravity(res1[0].message, Toast.LONG, Toast.BOTTOM);
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
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <StepHeader />
        <Text style={styles.headText}>Add Phone Number</Text>
        <Formik
          initialValues={{
            phoneNumber: '',
          }}
          onSubmit={(values) => {
            register(values);
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
              <Text style={styles.inputHeaderTitle}>Phone Number</Text>
              <PhoneInput
                onChangeText={handleChange('phoneNumber')}
                onChangeCountry={(_) => setCode(_)}
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
              />
              <Text style={styles.error}>{errors.phoneNumber}</Text>

              <Button
                onPress={handleSubmit}
                titleStyle={styles.buttonTitle}
                title="Save & Continue"
                containerStyle={styles.buttonContainer}></Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddPhoneNumber;
