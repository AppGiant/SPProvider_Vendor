import React, {useState, useEffect} from 'react';
import StepHeader from '../../Components/StepHeader';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import InputComponent from '../../Components/InputComponent';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../../Components/HView';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Screens} from '../../Constants/constant';
import BankingIcon from '../../Images/Icons/banking.svg';
import DropDownPicker from '../../Components/DropDownPicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import PhoneInput from '../../Components/PhoneInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import color from '../../Constants/color';
import {BackHandler} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const BankingScreen = (props) => {
  // back button Handling
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

  const [show, setShow] = useState(false);
  const register = () => {
    props.navigation.navigate(Screens.ROOT1);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('account');
  const [items, setItems] = useState([
    {label: 'Debit/Credit Card', value: 'card', key: 1},
    {label: 'Bank Account', value: 'account', key: 2},
  ]);
  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 10}}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        <StepHeader
          Icon={BankingIcon}
          iconSubtitle="3 of 3"
          title="Banking Details"
        />
        <Text style={styles.inputHeaderTitle}>Choose Your Payment Method</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        {value == 'card' ? (
          <Formik
            initialValues={{
              firstName: '',
              middleName: '',
              lastName: '',
              dob: '',
              storeName: '',
              bankName: '',
              iban: '',
              number: '',
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              setFieldValue,
            }) => (
              <View>
                <Text style={styles.headText}>Banking Account Information</Text>
                <InputComponent
                  label="Card Holder Name"
                  placeholder="ex:Ehsaan H"
                />
                <InputComponent
                  label="Card Number"
                  placeholder="ex:1234-5678-9101-1213"
                />

                <HView>
                  <View style={{flex: 1, marginEnd: 20}}>
                    <InputComponent label="Expiry Date" placeholder="MM/YY" />
                  </View>
                  <View style={{flex: 1}}>
                    <InputComponent label="CVV Code" placeholder="ex:240" />
                  </View>
                </HView>
              </View>
            )}
          </Formik>
        ) : (
          <Formik>
            <View>
              <Text style={styles.headText}>Banking Account Information</Text>
              <InputComponent
                label="Beneficiary First Name"
                placeholder="ex:Ehsaan H"
              />
              <InputComponent
                label="Beneficiary Middle Name"
                placeholder="ex:halais123"
              />
              <InputComponent
                label="Beneficiary Last Name"
                placeholder="ex:halais"
              />
              <InputComponent
                label="Date Of Birth"
                placeholder="21/10/1990"
                rightIcon={() => (
                  <TouchableSVGIcon onPress={() => setShow(true)}>
                    <Icon size={30} color={color.BORDER} name="calendar"></Icon>
                  </TouchableSVGIcon>
                )}
              />
              <InputComponent
                label="Store Name (Optional)"
                placeholder="ex:Halais"
              />
              <InputComponent label="Bank Name" placeholder="Al Rajhi Bank" />
              <InputComponent
                label="IBAN #"
                placeholder="12-1234-1234-1234-1234-1234"
              />
              <Text style={styles.inputHeaderTitle}>Phone Number</Text>
              <PhoneInput />
            </View>
          </Formik>
        )}
        <Button
          onPress={register}
          titleStyle={styles.buttonTitle}
          title="Save & Authenticate"
          containerStyle={[styles.buttonContainer]}></Button>
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
export default BankingScreen;
