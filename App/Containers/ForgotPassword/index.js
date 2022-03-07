import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import React, {useEffect, useState} from 'react';
import InputComponent from '../../Components/InputComponent';
import styles from './style';
import MainIcon from '../../Images/logo1.svg';
import SVGComponent from '../../Components/SVGComponent';
import {Formik} from 'formik';
import {Button} from 'react-native-elements/dist/buttons/Button';
import * as Yup from 'yup';
import {Screens, ValidationString} from '../../Constants/constant';
import {
  phoneAvailability,
  emailAvailability,
  sendEmailOTP,
  sendPhoneOTP,
} from '../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import {BackHandler} from 'react-native';
import {withTranslation} from 'react-i18next';
const ForgotPassword = ({t, ...props}) => {
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
  const ForgotPasswordSchema = Yup.object().shape({
    userIdentity: Yup.string()
      .matches(/^\S*$/, 'No Spaced allowed')
      .required('Required'),
  });
  const checkEmailCase = (value) => {
    if (showLoader) return;
    setShowLoader(true);
    emailAvailability({email: value}).then((res) => {
      if (!res.status) {
        Toast.showWithGravity(
          `Email ${value} does not registered with us.`,
          Toast.LONG,
          Toast.BOTTOM,
        );
      } else {
        sendEmailOTP({email: value})
          .then((res1) => {
            if (res1.status) {
              Toast.showWithGravity(
                `OTP Sent to ${value}.`,
                Toast.LONG,
                Toast.BOTTOM,
              );
              props.navigation.navigate(Screens.CHANGE_PASSWORD, {
                userIdentity: value,
                type: 'email',
              });
            } else {
              Toast.showWithGravity(res1.message, Toast.LONG, Toast.BOTTOM);
            }
          })
          .catch((err) => {
            setShowLoader(false);
            Toast.showWithGravity(
              `Something Wrong Contact Admin.`,
              Toast.LONG,
              Toast.BOTTOM,
            );
          });
      }
      setShowLoader(false);
    }).catch(error => {
      console.log(error);
    });
  };
  const checkPhoneCase = (value) => {
    if (showLoader) return;
    setShowLoader(true);
    phoneAvailability({phoneNumber: '+' + value}).then((res) => {
      if (!res.status) {
        Toast.showWithGravity(
          `Phone number ${'+' + value} does not registered with us.`,
          Toast.LONG,
          Toast.BOTTOM,
        );
      } else {
        sendPhoneOTP({phoneNumber: '+' + value}).then((res1) => {
          if (res1.status) {
            Toast.showWithGravity(
              `OTP Sent to ${'+' + value}.`,
              Toast.LONG,
              Toast.BOTTOM,
            );
            props.navigation.navigate(Screens.CHANGE_PASSWORD, {
              userIdentity: '+' + value,
              type: 'phone number',
            });
          } else {
            Toast.showWithGravity(res1.message, Toast.LONG, Toast.BOTTOM);
          }
        });
      }
      setShowLoader(false);
    }).catch(error => {
      console.log(error);
    });
  };
  const checkIsEmailOrPhone = (value) => {
    console.log(value);
    if (ValidationString.EMAIL.test(value)) {
      checkEmailCase(value);
    } else if (isNaN(value)) {
      Toast.showWithGravity('Invalid Email/Phone', Toast.LONG, Toast.BOTTOM);
    } else if (value.length >= 8 && value.length <= 16) {
      checkPhoneCase(value);
    } else {
      Toast.showWithGravity('Invalid Email/Phone', Toast.LONG, Toast.BOTTOM);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={[styles.container]}>
        <SVGComponent style={styles.logo}>
          <MainIcon />
        </SVGComponent>
        <Formik
          initialValues={{userIdentity: ''}}
          validationSchema={ForgotPasswordSchema}
          validateOnChange
          onSubmit={(values) => checkIsEmailOrPhone(values.userIdentity)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            setFieldValue,
          }) => {
            return (
              <View>
                <InputComponent
                  label={t('Email/Phone Number')}
                  values={values.userIdentity}
                  errorMessage={errors.userIdentity}
                  onChangeText={handleChange('userIdentity')}
                  placeholder="Email/Phone Number"
                />
                <Button
                  loading={showLoader}
                  buttonStyle={styles.buttonStyle}
                  title={t('Send OTP')}
                  onPress={handleSubmit}
                  titleStyle={styles.buttonTitle}
                  containerStyle={[styles.buttonContainer]}></Button>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default withTranslation()(ForgotPassword);
