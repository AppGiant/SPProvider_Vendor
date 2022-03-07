import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './style';
import TextBetweenLine from '../../Components/TextBetweenLine';
import InputComponent from '../../Components/InputComponent';
import HView from '../../Components/HView';
import PhoneInput from '../../Components/PhoneInput';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import colors from '../../Themes/Colors';
import {Button} from 'react-native-elements/dist/buttons/Button';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../Constants/color';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddPayoutAccount = () => {
  const [show, setShow] = useState(false);
  const AddPayoutSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name Required'),

    middleName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Middle Name Required'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Required'),

    dateOfBirth: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Date of Birth Required'),

    storeName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Store Name Required'),

    bankName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Bank Name Required'),

    iBan: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('IBAN Required'),

    receiveEmail: false,
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.roundCard}>
          <Text style={styles.title}>Add New Payout Account</Text>
          <TextBetweenLine />
          <Formik
            validationSchema={AddPayoutSchema}
            initialValues={{
              firstName: '',
              middleName: '',
              lastName: '',
              dateOfBirth: '',
              storeName: '',
              bankName: '',
              iBan: '',
              phoneNumber: '',
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
              <View style={styles.container}>
                <InputComponent
                  onChangeText={handleChange('firstName')}
                  errorMessage={errors.firstName}
                  value={values.firstName}
                  label="Beneficiary First Name"
                  placeholder="eg.Hameed"
                />
                <InputComponent
                  onChangeText={handleChange('middleName')}
                  value={values.middleName}
                  errorMessage={errors.middleName}
                  label="Beneficiary Mid Name"
                  placeholder="eg.H"
                />
                <InputComponent
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  errorMessage={errors.lastName}
                  label="Beneficiary Last Name"
                  placeholder="eg.halais"
                />
                <InputComponent
                  onChangeText={handleChange('dateOfBirth')}
                  value={values.dateOfBirth}
                  errorMessage={errors.dateOfBirth}
                  label="Date Of Birth"
                  placeholder="eg.12/21/2021"
                  rightIcon={() => (
                    <TouchableSVGIcon onPress={() => setShow(true)}>
                      <Icon
                        size={30}
                        color={color.BORDER}
                        name="calendar"></Icon>
                    </TouchableSVGIcon>
                  )}
                />
                <InputComponent
                  onChangeText={handleChange('storeName')}
                  value={values.storeName}
                  errorMessage={errors.storeName}
                  label="Store Name (Optional)"
                  placeholder="eg.Store Name"
                />
                <InputComponent
                  onChangeText={handleChange('bankName')}
                  value={values.bankName}
                  errorMessage={errors.bankName}
                  label="Bank name"
                  placeholder="eg.Bank Name"
                />
                <InputComponent
                  onChangeText={handleChange('iBan')}
                  value={values.iBan}
                  errorMessage={errors.iBan}
                  label="IBAN #"
                  placeholder="SA-3121-23423-12"
                />
                <Text style={styles.phoneTitle}>Phone Number</Text>
                <PhoneInput
                  onChangeText={handleChange('phoneNumber')}
                  onChangeCountry={(_) => setCode(_)}
                  value={values.phoneNumber}
                  errorMessage={errors.phoneNumber}
                />
                <Text style={styles.error}>{errors.phoneNumber}</Text>
                <HView style={styles.hView}>
                  <CheckBox
                    checkedColor={colors.PRIMARY}
                    checked={values.receiveEmail}
                    onPress={() => {
                      setFieldValue('receiveEmail', !values.receiveEmail);
                    }}
                  />
                  <Text style={styles.linkText}>
                    I confirm the correctness of the entered data and take full
                    responsibility before the official authorities without any
                    responsibility on the platform.
                  </Text>
                </HView>
                <HView style={styles.btnHolder}>
                  <Button
                    title="Cancel"
                    containerStyle={styles.btn1}
                    titleStyle={styles.buttonTitle1}
                  />
                  <Button
                    title="Add New Payout Account"
                    containerStyle={styles.btn2}
                    titleStyle={styles.buttonTitle2}
                  />
                </HView>
              </View>
            )}
          </Formik>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={() => setShow(false)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPayoutAccount;
