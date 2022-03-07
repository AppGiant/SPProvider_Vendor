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
import DropDownPicker from '../../Components/DropDownPicker';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../Constants/color';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddPayoutFullScreen = () => {
  const [show, setShow] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [city, setCity] = useState('NY');
  const [items, setItems] = useState([
    {label: 'NY', value: 'new york', key: 1},
    {label: 'USA', value: 'america', key: 2},
  ]);

  const AddPayoutFullSchema = {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.roundCard}>
          <Text style={styles.title}>Add New Payout Account</Text>
          <TextBetweenLine />
          <Formik
            validationSchema={AddPayoutFullSchema}
            initialValues={{
              bankName: '',
              swiftCode: '',
              accountNumber: '',
              iBan: '',
              bankAdd1: '',
              bankAdd2: '',
              bankAdd3: '',
              country: '',
              firstName: '',
              middleName: '',
              lastName: '',
              dateOfBirth: '',
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
                <Text style={styles.header1}>Beneficiary Bank Details</Text>
                <InputComponent
                  onChangeText={handleChange('Bank Name')}
                  errorMessage={errors.bankName}
                  value={values.bankName}
                  label="Bank Name"
                  placeholder="eg.Bank Name"
                />
                <InputComponent
                  onChangeText={handleChange('swiftCode')}
                  errorMessage={errors.swiftCode}
                  value={values.swiftCode}
                  label="SWIFT/BCI CODE"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('accountNumber')}
                  errorMessage={errors.accountNumber}
                  value={values.accountNumber}
                  label="Account Number"
                  placeholder="eg.9859834859834058"
                />
                <InputComponent
                  onChangeText={handleChange('iBan')}
                  errorMessage={errors.iBan}
                  value={values.iBan}
                  label="IBAN # (Optional)"
                  placeholder="SA 12-323-34232-21"
                />
                <InputComponent
                  onChangeText={handleChange('bankAdd1')}
                  errorMessage={errors.bankAdd1}
                  value={values.bankAdd1}
                  label="Beneficiary Bank Address Line 1"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('bankAdd2')}
                  errorMessage={errors.bankAdd2}
                  value={values.bankAdd2}
                  label="Beneficiary Bank Address Line 2"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('bankAdd3')}
                  errorMessage={errors.bankAdd3}
                  value={values.bankAdd3}
                  label="Beneficiary Bank Address Line 3"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('country')}
                  errorMessage={errors.country}
                  value={values.country}
                  label="Country"
                  placeholder="eg.United States"
                />
                <DropDownPicker
                  placeholder="USA"
                  zIndex={2000}
                  open={openCity}
                  value={city}
                  items={items}
                  setOpen={setOpenCity}
                  setValue={setCity}
                  setItems={setItems}
                />
                <Text style={styles.header2}>Beneficiary Details</Text>
                <InputComponent
                  onChangeText={handleChange('firstName')}
                  errorMessage={errors.firstName}
                  value={values.firstName}
                  label="Beneficary First Name"
                  placeholder="eg.United States"
                />
                <InputComponent
                  onChangeText={handleChange('middleName')}
                  errorMessage={errors.middleName}
                  value={values.middleName}
                  label="Beneficary Middle Name"
                  placeholder="eg.United States"
                />
                <InputComponent
                  onChangeText={handleChange('lastName')}
                  errorMessage={errors.lastName}
                  value={values.lastName}
                  label="Beneficary Last Name"
                  placeholder="eg.United States"
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
                  onChangeText={handleChange('bankAdd1')}
                  errorMessage={errors.bankAdd1}
                  value={values.bankAdd1}
                  label="Beneficiary Bank Address Line 1"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('bankAdd2')}
                  errorMessage={errors.bankAdd2}
                  value={values.bankAdd2}
                  label="Beneficiary Bank Address Line 2"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('bandAdd3')}
                  errorMessage={errors.bankAdd3}
                  value={values.bankAdd3}
                  label="Beneficiary Bank Address Line 3"
                  placeholder="eg.BDHJSHD"
                />
                <InputComponent
                  onChangeText={handleChange('country')}
                  errorMessage={errors.country}
                  value={values.country}
                  label="Country"
                  placeholder="eg.United States"
                />
                <DropDownPicker
                  placeholder="USA"
                  zIndex={2000}
                  open={openCity}
                  value={city}
                  items={items}
                  setOpen={setOpenCity}
                  setValue={setCity}
                  setItems={setItems}
                />
                <Text style={styles.phoneTitle}>Phone Number</Text>
                <PhoneInput
                  onChangeText={handleChange('phoneNumber')}
                  onChangeCountry={(_) => setCode(_)}
                  value={values.phoneNumber}
                  errorMessage={errors.phoneNumber}
                />
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
export default AddPayoutFullScreen;
