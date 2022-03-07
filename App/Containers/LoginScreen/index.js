import React, {Component, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from '../../Components/StyledComponents/index';
import Text from '../../Components/TextI/index';
import styles from './style';
import MainIcon from '../../Images/logo1.svg';
import SVGComponent from '../../Components/SVGComponent';
import {Button} from 'react-native-elements/dist/buttons/Button';
import InputComponent from '../../Components/InputComponent';
import HView from '../../Components/HView';
import Colors from '../../Constants/color';
import {Screens} from '../../Constants/constant';
import {Formik} from 'formik';
import {userLogin} from '../../api/ApiManager';
import {BackHandler} from 'react-native';
import Toast from 'react-native-simple-toast';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LanguageComponent from '../../Components/LanguageComponent';
import {withTranslation} from 'react-i18next';
import {Image} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {storeLogin} from '../../api/ApiManager';

function LoginScreen({t, ...props}) {
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
  const [showLoader, setShowLoader] = useState(false);
  const login = (formDetail) => {
    if (showLoader) return;
    setShowLoader(true);
    userLogin({
      userType: 4,
      password: formDetail.password,
      userName: formDetail.email,
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity('Login Successful', Toast.LONG, Toast.BOTTOM);
          //    console.log(res);
          AsyncStorage.setItem('accessToken', res.accessToken).then((res) => {
            props.navigation.navigate(Screens.ROOT1);
          });
        } else {
          Toast.showWithGravity(res.message, Toast.LONG, Toast.BOTTOM);
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

  const loginStore = (formDetail) => {
    storeLogin({
      userType: 2,
      password: formDetail.password,
      userName: formDetail.email,
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(
            'Login Store Successful',
            Toast.LONG,
            Toast.BOTTOM,
          );
          console.log(res);
          AsyncStorage.setItem('accessToken', res.accessToken).then((res) => {
            props.navigation.navigate(Screens.ROOT1);
          });
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

  const googleLogin = () => {
    alert('Pending');
  };
  const appleLogin = () => {
    alert('Pending');
  };
  const facebookLogin = () => {
    alert('Pending');
  };
  const signUp = () => {
    props.navigation.navigate(Screens.SING_UP);
  };
  const onChangeText = (key, value) => {
    setFormDetail({...formDetail, [key]: value});
  };
  const onChangeBoolean = (key) => {
    setFormDetail({...formDetail, [key]: !formDetail[key]});
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
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
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <LanguageComponent />
        <Text style={styles.headText}>Sign In</Text>
        {/* <SVGComponent style={styles.logo}> */}
        {/* <MainIcon /> */}
        <Image
          source={require('../../Images/login_image.png')}
          style={styles.loginImage}
        />
        {/* </SVGComponent> */}
        <Text style={styles.blueText}>No Waiting, Anymore More</Text>
        <View style={styles.radioBtn}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{email: '', password: '', isRemember: false}}
          onSubmit={(values) =>
            radioButtons[0].selected ? loginStore(values) : login(values)
          }
          validateOnChange>
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
                  label="Email/Mobile/Username"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  errorMessage={errors.email}
                  placeholder="ex:mystore@gmail.com"
                />

                <InputComponent
                  label="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorMessage={errors.password}
                  placeholder="******"
                  secureTextEntry
                />

                <HView style={styles.buttonView}>
                  {/* <CheckBox
                    checked={values.isRemember}
                    onPress={() =>
                      setFieldValue('isRemember', !values.isRemember)
                    }
                  /> */}
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(Screens.FORGOT_PASSWORD)
                    }>
                    <Text style={styles.linkText}>Forgot Password ?</Text>
                  </TouchableOpacity>
                  <View style={{flex: 0.5}}></View>
                  <Button
                    loading={showLoader}
                    onPress={handleSubmit}
                    titleStyle={styles.buttonTitle}
                    title={t('Sign In')}
                    containerStyle={styles.buttonContainer}></Button>
                </HView>
              </View>
            );
          }}
        </Formik>
        {/* <TextBetweenLine text="Or" />
        <Button
          onPress={googleLogin}
          buttonStyle={styles.buttonStyle}
          iconPosition="left"
          icon={() => (
            <SVGComponent style={styles.buttonIconContainer}>
              <GoogleIcon />
            </SVGComponent>
          )}
          title="Sign In With Google"
          containerStyle={[
            styles.buttonContainerFullWidth,
            {
              backgroundColor: Colors.GOOGLE_BACKGROUND,
            },
          ]}></Button>
        <Button
          onPress={appleLogin}
          buttonStyle={styles.buttonStyle}
          icon={() => (
            <SVGComponent style={styles.buttonIconContainer}>
              <AppleIcon />
            </SVGComponent>
          )}
          title="Sign In With Apple"
          containerStyle={[
            styles.buttonContainerFullWidth,
            {backgroundColor: Colors.APPLE_BACKGROUND},
          ]}></Button>
        <Button
          onPress={facebookLogin}
          buttonStyle={styles.buttonStyle}
          icon={() => (
            <SVGComponent style={styles.buttonIconContainer}>
              <FacebookIcon />
            </SVGComponent>
          )}
          title="Sign In With Facebook"
          containerStyle={[
            styles.buttonContainerFullWidth,
            {backgroundColor: Colors.FACEBOOK_BACKGROUND},
          ]}></Button> */}

        <HView style={{justifyContent: 'center', paddingBottom: 40}}>
          <Text>or</Text>
          <TouchableOpacity onPress={signUp}>
            <Text style={{color: Colors.PRIMARY, paddingStart: 8}}>
              Register Now
            </Text>
          </TouchableOpacity>
        </HView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default withTranslation()(LoginScreen);
