import React, {useState, useEffect} from 'react';
import StepHeader from '../../../Components/StepHeader';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../../Components/StyledComponents';
import InputComponent from '../../../Components/InputComponent';
import Text from '../../../Components/TextI';
import styles from './style';
import HView from '../../../Components/HView';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {Screens, ValidationString} from '../../../Constants/constant';
import PhoneInput from '../../../Components/PhoneInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  addStoreUser,
  emailAvailability,
  phoneAvailability,
  sendPhoneOTP,
  userNameAvailability,
  userRegister,
} from '../../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../../../Constants/color';
import {BackHandler} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const RegistrationScreen = (props) => {
  const [showLoader, setShowLoader] = useState(false);
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
  const [code, setCode] = useState({callingCode: ['91']});
  const register = (data) => {
    if (showLoader) return;
    setShowLoader(true);
    const formDetail = {...data};
    formDetail.phoneNumber = '+' + code.callingCode[0] + formDetail.phoneNumber;
    Promise.all([
      userNameAvailability({userName: formDetail.storeName}),
      phoneAvailability({phoneNumber: formDetail.phoneNumber}),
      emailAvailability({email: formDetail.storeEmail}),
    ])
      .then((res1) => {
        if (res1[0].status && res1[1].status && res1[2].status) {
          Promise.all([
            sendPhoneOTP({
              phoneNumber: formDetail.phoneNumber,
            }),
            userRegister({
              phoneNumber: formDetail.phoneNumber,
              email: formDetail.storeEmail,
              userName: formDetail.storeName,
              password: formDetail.password,
              userType: 4,
              agreedToTermsAndCondition: formDetail.receiveEmail ? 1 : 0,
              optedForPromotion: formDetail.receiveEmail ? 1 : 0,
            }),
          ])
            .then((res) => {
              console.log('register screen -> ' + res);
              if (res[0].status && res[1].status) {
                Toast.showWithGravity(
                  'OTP Sent Successfully',
                  Toast.LONG,
                  Toast.BOTTOM,
                );
                AsyncStorage.setItem('accessToken', res[1].accessToken)
                  .then((res) => {
                    props.navigation.navigate(Screens.VERIFICATION, {
                      formDetail,
                    });
                  })
                  .catch((err) => {
                    setShowLoader(false);
                    Toast.showWithGravity(
                      'Some problem Occurred',
                      Toast.LONG,
                      Toast.BOTTOM,
                    );
                  });
              } else if (!res[0].status) {
                Toast.showWithGravity(res[0].message, Toast.LONG, Toast.BOTTOM);
              } else if (!res[1].status) {
                Toast.showWithGravity(res[1].message, Toast.LONG, Toast.BOTTOM);
              }
            })
            .catch((err) => {
              setShowLoader(false);
              Toast.showWithGravity(
                err && err.message
                  ? err.message
                  : 'Something wrong contact admin',
                Toast.LONG,
                Toast.BOTTOM,
              );
            });
        } else if (!res1[0].status) {
          Toast.showWithGravity(
            'Username not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        } else if (!res1[1].status) {
          Toast.showWithGravity(
            'Phone not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        } else if (!res1[2].status) {
          Toast.showWithGravity(
            'Email not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        }
        setShowLoader(false);
      })
      .catch((err) => {
        setShowLoader(false);
        Toast.showWithGravity(
          err && err.message ? err.message : 'Something wrong contact admin',
          Toast.LONG,
          Toast.BOTTOM,
        );
      });
  };

  const storeRegister = (data) => {
    if (showLoader) return;
    setShowLoader(true);
    const formDetail = {...data};
    formDetail.phoneNumber = '+' + code.callingCode[0] + formDetail.phoneNumber;
    Promise.all([
      userNameAvailability({userName: formDetail.storeName}),
      phoneAvailability({phoneNumber: formDetail.phoneNumber}),
      emailAvailability({email: formDetail.storeEmail}),
    ])
      .then((res1) => {
        if (res1[0].status && res1[1].status && res1[2].status) {
          Promise.all([
            sendPhoneOTP({
              phoneNumber: formDetail.phoneNumber,
            }),
            addStoreUser({
              phoneNumber: formDetail.phoneNumber,
              email: formDetail.storeEmail,
              userName: formDetail.storeName,
              password: formDetail.password,
              userType: 2,
              agreedToTermsAndCondition: formDetail.receiveEmail ? 1 : 0,
              optedForPromotion: formDetail.receiveEmail ? 1 : 0,
            }),
          ])
            .then((res) => {
              console.log('register screen -> ' + res);
              if (res[0].status && res[1].status) {
                Toast.showWithGravity(
                  'OTP Sent Successfully',
                  Toast.LONG,
                  Toast.BOTTOM,
                );
                AsyncStorage.setItem('accessToken', res[1].accessToken)
                  .then((res) => {
                    props.navigation.navigate(Screens.VERIFICATION, {
                      formDetail,
                    });
                  })
                  .catch((err) => {
                    setShowLoader(false);
                    Toast.showWithGravity(
                      'Some problem Occurred',
                      Toast.LONG,
                      Toast.BOTTOM,
                    );
                  });
              } else if (!res[0].status) {
                Toast.showWithGravity(res[0].message, Toast.LONG, Toast.BOTTOM);
              } else if (!res[1].status) {
                Toast.showWithGravity(res[1].message, Toast.LONG, Toast.BOTTOM);
              }
            })
            .catch((err) => {
              setShowLoader(false);
              Toast.showWithGravity(
                err && err.message
                  ? err.message
                  : 'Something wrong contact admin',
                Toast.LONG,
                Toast.BOTTOM,
              );
            });
        } else if (!res1[0].status) {
          Toast.showWithGravity(
            'Username not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        } else if (!res1[1].status) {
          Toast.showWithGravity(
            'Phone not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        } else if (!res1[2].status) {
          Toast.showWithGravity(
            'Email not available',
            Toast.LONG,
            Toast.BOTTOM,
          );
        }
        setShowLoader(false);
      })
      .catch((err) => {
        setShowLoader(false);
        Toast.showWithGravity(
          err && err.message ? err.message : 'Something wrong contact admin',
          Toast.LONG,
          Toast.BOTTOM,
        );
      });
  };

  const SignUpSchema = Yup.object().shape({
    storeName: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    storeEmail: Yup.string().email('Invalid email').required('Required'),
    //  phoneNumber: Yup.number().typeError("Phone number should be number").required('Required'),
    password: Yup.string()
      .matches(
        ValidationString.PASSWORD,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      )
      .required('Required'),
    confirmPassword: Yup.string()
      .matches(
        ValidationString.PASSWORD,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      )
      .required('Required'),
    receiveEmail: false,
  });

  const [radioButtonsData, setradioButtonsData] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Service Provider',
      value: 'Service',
      selected: true,
    },
    {
      id: '2',
      label: 'Freelancer',
      value: 'Customer',
      selected: false,
    },
  ]);
  // console.log(radioButtonsData[0].selected);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <StepHeader />
        <View style={styles.radioBtn}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>
        <Text style={styles.headText}>Register To Sell Via Saloon Plus</Text>
        <Formik
          validationSchema={SignUpSchema}
          initialValues={{
            storeName: '',
            storeEmail: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            receiveEmail: false,
          }}
          onSubmit={(values) => {
            if (values.password != values.confirmPassword) {
              Toast.showWithGravity(
                'Confirm Password and password should same',
                Toast.LONG,
                Toast.BOTTOM,
              );
              return;
            }

            radioButtons[0].selected ? storeRegister(values) : register(values);
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
            <View style={styles.customCard}>
              <InputComponent
                onChangeText={handleChange('storeName')}
                errorMessage={errors.storeName}
                value={values.storeName}
                label="Store Name"
                placeholder="Store Name"
              />
              <InputComponent
                onChangeText={handleChange('storeEmail')}
                value={values.storeEmail}
                errorMessage={errors.storeEmail}
                label="Store Email"
                placeholder="Store Email"
              />
              <Text style={styles.inputHeaderTitle}>Phone Number</Text>
              <PhoneInput
                onChangeText={handleChange('phoneNumber')}
                onChangeCountry={(_) => setCode(_)}
                value={values.phoneNumber}
                errorMessage={errors.phoneNumber}
              />
              <Text style={styles.error}>{errors.phoneNumber}</Text>
              <InputComponent
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                errorMessage={errors.password}
                label="Password"
                placeholder="Password"
              />

              <InputComponent
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                errorMessage={errors.confirmPassword}
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              <HView style={styles.hView}>
                <CheckBox
                  checkedColor={color.PRIMARY}
                  checked={values.receiveEmail}
                  onPress={() =>
                    setFieldValue('receiveEmail', !values.receiveEmail)
                  }
                />
                <Text style={styles.linkText}>
                  Receive Promotional Email and Updates
                </Text>
              </HView>
              <Button
                loading={showLoader}
                onPress={handleSubmit}
                titleStyle={styles.buttonTitle}
                title="Save & Continue"
                containerStyle={styles.buttonContainer}></Button>
            </View>
          )}
        </Formik>

        <Text style={styles.footerText}>
          By Signing Up you agree with the terms and conditions of Saloon Plus
          to Register with the platform
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegistrationScreen;
