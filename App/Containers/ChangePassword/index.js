import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from '../../Components/StyledComponents';
import React, {useEffect,useState} from 'react';
import InputComponent from '../../Components/InputComponent';
import styles from './style';
import {Formik} from 'formik';
import Text from '../../Components/TextI';
import {Button} from 'react-native-elements/dist/buttons/Button';
import OTPInput from '../../Components/OTPInputNew';
import * as Yup from 'yup';
import Toast from 'react-native-simple-toast';
import {Screens, ValidationString} from '../../Constants/constant';
import {BackHandler} from 'react-native';
import {
  changePasswordUsingOTP,
  sendEmailOTP,
  sendPhoneOTP,
} from '../../api/ApiManager';
import {withTranslation} from 'react-i18next';
const ChangePassword = ({t, ...props}) => {
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
  const ChangePasswordSchema = Yup.object().shape({
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
    code: Yup.number().typeError('Code must be a number').required('Required'),
  });
  const resendOTP = () => {
    if (props.route.params.type == 'email') {
      sendEmailOTP({email: props.route.params.userIdentity}).then((res) => {
        if (res.status) {
          Toast.showWithGravity(
            'OTP Sent Successfully',
            Toast.LONG,
            Toast.BOTTOM,
          );
        } else {
          Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
        }
      });
    } else {
      sendPhoneOTP({phoneNumber: props.route.params.userIdentity}).then(
        (res) => {
          if (res.status) {
            Toast.showWithGravity(
              'OTP Sent Successfully',
              Toast.LONG,
              Toast.BOTTOM,
            );
          } else {
            Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
          }
        },
      );
    }
  };
  const changePasswordWithOTP = (values) => {
    if (showLoader) return;
    setShowLoader(true);
    changePasswordUsingOTP({
      emailOrPhone: props.route.params.userIdentity,
      OTP: values.code,
      password: values.password,
    })
      .then((res) => {
        Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
        if (res.status) {
          props.navigation.navigate(Screens.LOGIN);
        }
        setShowLoader(false);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.headText}>{`Recover Password`}</Text>
        <Text style={styles.subText}>
          {"If we found an account associated with that username, we've sent password reset OTP to the Email/Phone Number provided"}
        </Text>
        <Text style={styles.subText}>
          {`A Verification code was sent to your provided ${props.route.params.type}, please enter the code to proceed.`}
        </Text>
        <Formik
          validationSchema={ChangePasswordSchema}
          validateOnChange
          initialValues={{password: '', code: '', confirmPassword: ''}}
          onSubmit={(values) => {
            if (values.code.length != 4) {
            } else if (values.password != values.confirmPassword) {
              Toast.showWithGravity(
                `Password and Confirm Password should be same`,
                Toast.LONG,
                Toast.BOTTOM,
              );
            } else {
              changePasswordWithOTP(values);
            }
          }}>
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
                <OTPInput
                  pinCount={4}
                  onCodeChanged={handleChange('code')}
                  value={values.code}
                />
                <Text style={styles.error}>{errors.code}</Text>
                <TouchableOpacity onPress={resendOTP} style={styles.rightAlign}>
                  <Text style={styles.linkText}>Resend OTP</Text>
                </TouchableOpacity>
                <InputComponent
                  secureTextEntry
                  errorMessage={errors.password}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  label="Password"
                />
                <InputComponent
                  secureTextEntry
                  errorMessage={errors.confirmPassword}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  label="Confirm Password"
                />
                <Button
                  loading={showLoader}
                  buttonStyle={styles.buttonStyle}
                  title={t('Change Password')}
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
export default withTranslation()(ChangePassword);
