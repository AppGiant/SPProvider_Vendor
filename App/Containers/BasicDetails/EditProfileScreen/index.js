import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../../Components/StyledComponents';
import InputComponent from '../../../Components/InputComponent';
import PhoneInput from '../../../Components/PhoneInput';
import DropDownPicker from '../../../Components/DropDownPicker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Text from '../../../Components/TextI';
import styles from './style';
import HView from '../../../Components/HView';
import {Button} from 'react-native-elements/dist/buttons/Button';
import CheckBoxInput from '../../../Components/CheckBoxInput';
import {Colors} from '../../../Themes';
import color from '../../../Constants/color';
import {ApplicationStyles} from '../../../Themes';
import UploadIcon from '../../../Images/upload_svg.svg';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {ValidationString} from '../../../Constants/constant';
import {BackHandler} from 'react-native';

const EditProfileScreen = (props) => {
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

  const [openServicesCategory, setOpenServicesCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState(false);
  const [venue, setVenue] = useState('venues');
  const [entertainment, setEntertainment] = useState('entertainment');
  const [items, setItems] = useState([
    {label: 'Debit/Credit Card', value: 'card', key: 1},
    {label: 'Bank Account', value: 'account', key: 2},
  ]);

  const EditProfileSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name Required'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name Required'),

    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username Required'),

    displayName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Display Name Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().matches(
      ValidationString.PHONE_NUMBER,
      'Invalid Phone Number',
    ),

    country: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Country Required'),

    region: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Region/State Required'),

    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('City Required'),

    postal: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Postal/Zip Code Required'),

    nationalId: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('National ID Required'),

    receiveEmail: false,
  });

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={ApplicationStyles.customCard}>
          <Formik
            validationSchema={EditProfileSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              userName: '',
              displayName: '',
              email: '',
              phoneNumber: '',
              country: '',
              region: '',
              city: '',
              postal: '',
              nationalId: '',
              receiveEmail: false,
            }}
            onSubmit={(values) => {
              console.log(values.city.toString);
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
                <InputComponent
                  onChangeText={handleChange('firstName')}
                  errorMessage={errors.firstName}
                  value={values.firstName}
                  label="First Name"
                  placeholder="eg.halais"
                />
                <InputComponent
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  errorMessage={errors.lastName}
                  label="Last Name"
                  placeholder="eg.halais 123"
                />
                <InputComponent
                  onChangeText={handleChange('userName')}
                  value={values.userName}
                  errorMessage={errors.userName}
                  label="User Name"
                  placeholder="eg.halais"
                />
                <InputComponent
                  onChangeText={handleChange('displayName')}
                  value={values.displayName}
                  errorMessage={errors.displayName}
                  label="Display Name"
                  placeholder="eg.halais123@gmail.com"
                />
                <InputComponent
                  onChangeText={handleChange('email')}
                  value={values.email}
                  errorMessage={errors.email}
                  label="Email"
                  placeholder="halais123@gmail.com"
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
                  onChangeText={handleChange('country')}
                  value={values.country}
                  errorMessage={errors.country}
                  label="Country"
                  placeholder="Saudi Arabia"
                />
                <InputComponent
                  onChangeText={handleChange('region')}
                  value={values.region}
                  errorMessage={errors.region}
                  label="Region/State"
                  placeholder="Riyadh"
                />
                <InputComponent
                  onChangeText={handleChange('city')}
                  value={values.city}
                  errorMessage={errors.city}
                  label="City"
                  placeholder="Riyadh"
                />
                <InputComponent
                  onChangeText={handleChange('postal')}
                  value={values.postal}
                  errorMessage={errors.postal}
                  label="Postal/Zip code"
                  placeholder="Riyadh"
                />
                <Text style={styles.inputHeaderTitle}>
                  Main Services Category
                </Text>
                <DropDownPicker
                  zIndex={2000}
                  open={openServicesCategory}
                  value={venue}
                  items={items}
                  setOpen={setOpenServicesCategory}
                  setValue={setVenue}
                  setItems={setItems}
                />
                <Text style={styles.inputHeaderTitle}>Sub Category</Text>
                <DropDownPicker
                  open={openSubCategory}
                  value={entertainment}
                  items={items}
                  setOpen={setOpenSubCategory}
                  setValue={setEntertainment}
                  setItems={setItems}
                />
                <Text style={styles.inputHeaderTitle}>Gender</Text>
                <HView>
                  <CheckBoxInput
                    color={Colors.lightText}
                    endTextStyle={
                      {
                        //   backgroundColor: 'red',
                        //   alignItems: 'flex-start',
                      }
                    }
                    endText="Male"
                  />
                  <CheckBoxInput
                    color={Colors.lightText}
                    endTextStyle={
                      {
                        //   backgroundColor: 'red',
                        //   alignItems: 'flex-start',
                      }
                    }
                    endText="Male"
                  />
                </HView>

                <Text style={ApplicationStyles.boldText}>
                  Commercial Registration/National ID Number/Residential Number
                </Text>

                <InputComponent
                  onChangeText={handleChange('nationalId')}
                  value={values.nationalId}
                  errorMessage={errors.nationalId}
                  label=""
                  placeholder="eg.1233"
                />
                <HView style={styles.upload}>
                  <UploadIcon />
                  <Text style={styles.uploadText}>Upload Profile Image</Text>
                </HView>
                <HView style={styles.hView}>
                  <CheckBox
                    checkedColor={color.PRIMARY}
                    checked={values.receiveEmail}
                    onPress={() => {
                      setFieldValue('receiveEmail', !values.receiveEmail);
                    }}
                  />
                  <Text style={styles.linkText}>
                    Receive Promotional Email and Updates
                  </Text>
                </HView>
                <Button
                  onPress={handleSubmit}
                  titleStyle={styles.buttonTitle}
                  title="Sign Me Up"
                  containerStyle={styles.buttonContainer}></Button>
              </View>
            )}
          </Formik>
          <Text style={styles.footerText}>
            By Signing Up you agree with the terms and conditions of Saloon Plus
            to Register with the platform
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
