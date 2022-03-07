import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import InputComponent from '../../Components/InputComponent';
import Text from '../../Components/TextI';
import styles from './style';
import Button from '../../Components/CustomButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {putEditAddressById} from '../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Screens} from '../../Constants/constant';

const ConfirmLocation = (props) => {
  const [code, setCode] = useState({callingCode: ['91']});
  const [userId, setUserId] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const [showText, setShowText] = useState(false);
  const [storeId, setStoreId] = useState();
  const [addressId, setAddressId] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    getStoredData();
  }, [isFocused]);

  const getStoredData = () => {
    AsyncStorage.getItem('storeData')
      .then((res) => {
        // console.log(res);
        if (res != null) {
          let res1 = JSON.parse(res);
          // console.log('address => ' + JSON.stringify(res1));
          setStoreId(res1?.StoreData?.store?.id);
          setAddressId(res1?.StoreData?.store?.Addresses[0]?.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let hasAdd1 = false;
  let hasAdd2 = false;
  let houseNo = '';
  let add1 = '';
  let add2 = '';
  let city = '';
  let pincode = '';
  let country = '';
  let response = {};
  let latitude = '';
  let longitude = '';

  try {
    response = JSON.parse(props?.route.params.response);
    latitude = props?.route.params.latitude;
    longitude = props?.route.params.longitude;
    // console.log('Confirm Location Screen ' + JSON.stringify(response));
    // console.log('Confirm Location Screen ' + latitude);
    pincode = response.postal_code;
    country = response.country;

    const getHouseNo = (response) => {
      if (response.street_number) {
        houseNo = response.street_number;
      } else {
        houseNo = response.premise;
      }
    };

    const getAddLine1 = (response) => {
      if (response.neighborhood) {
        // console.log('Yes has Add1 -> ' + response.neighborhood);
        add1 = response.neighborhood + ' ';
        hasAdd1 = true;
      }
      if (response.route) {
        // console.log('Yes has Add12 -> ' + response.route);
        if (response.route != 'Unnamed Road') {
          add1 += response.route + ' ';
          hasAdd1 = true;
        }
      }
      // if (response.sublocality_level_1) {
      //   console.log('Yes has Add13 -> ' + response.sublocality_level_1);
      //   add1 += response.sublocality_level_1 + ', ';
      //   hasAdd1 = true;
      // }
      if (response.sublocality_level_2) {
        // console.log('Yes has Add14 -> ' + response.sublocality_level_2);
        add1 += response.sublocality_level_2 + ' ';
        hasAdd1 = true;
      }
      if (response.sublocality_level_3) {
        // console.log('Yes has Add15 -> ' + response.sublocality_level_3);
        add1 += response.sublocality_level_3;
        hasAdd1 = true;
      }
      if (!hasAdd1) {
        add1 = response.administrative_area_level_2;
        // console.log('No Add1');
      }
    };

    const getAddLine2 = (response) => {
      // if (response.administrative_area_level_2) {
      //   add2 = response.administrative_area_level_2 + ', ';
      //   hasAdd2 = true;
      // }
      // if (response.administrative_area_level_1) {
      //   add2 += response.administrative_area_level_1;
      //   hasAdd2 = true;
      // }
      // if (!hasAdd2) {
      //   add2 = response.locality;
      //   console.log('No Add2 -> ' + response.locality);
      // }
      if (response.sublocality_level_1) {
        // console.log('Yes has Add13 -> ' + response.sublocality_level_1);
        add2 = response.sublocality_level_1;
        hasAdd1 = true;
      }
    };

    const getCity = (response) => {
      if (response.locality) {
        city = response.locality;
      } else {
        city = response.administrative_area_level_1;
      }
    };

    getHouseNo(response);
    getAddLine1(response);
    getAddLine2(response);
    getCity(response);
  } catch (err) {
    console.log(err);
  }

  const AddSchema = Yup.object().shape({
    addNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .notRequired('Required'),
    addLine1: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    addLine2: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    pincode: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    country: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const register = (data) => {
    console.log('address Id => ' + addressId);
    console.log('store Id => ' + storeId);

    console.log({
      latitude: latitude,
      longitude: longitude,
      storeId: storeId,
      streetAddress: houseNo,
      add1: add1,
      add2: add2,
      city: city,
      state: '',
      country: country,
      zipCode: pincode,
      googleAddress: '',
    });

    putEditAddressById(addressId, {
      latitude: latitude,
      longitude: longitude,
      storeId: storeId,
      streetAddress: houseNo,
      add1: add1,
      add2: add2,
      city: city,
      state: '',
      country: country,
      zipCode: pincode,
      googleAddress: '',
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          props.navigation.navigate(Screens.ACCOUNT_SETTINGS);
          setIsDisable(false);
        } else {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          setIsDisable(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Formik
          validationSchema={AddSchema}
          initialValues={{
            addLine1: add1,
            addLine2: add2,
            city: city,
            addNumber: '',
            pincode: pincode,
            country: country,
          }}
          onSubmit={(values) => {
            // if (true) {
            //   Toast.showWithGravity('Location Saved', Toast.LONG, Toast.BOTTOM);
            //   return;
            // }
            // console.log(`confirm location -> ${JSON.stringify(values)}`);
            setIsDisable(true);
            register(values);
          }}
          validate={(val) => {
            console.log(val.addLine1);
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
                label="Building No. (House/Apt/Unit)"
                defaultValue={houseNo}
              />
              <InputComponent
                label="Address Line 1 (Street Name)*"
                // defaultValue={add1}
                style={styles.input}
                onChangeText={handleChange('addLine1')}
                value={values.addLine1}
                errorMessage={errors.addLine1}
              />
              <InputComponent
                label="Address Line 2 (District/Square)*"
                // defaultValue={add2}
                style={styles.input}
                onChangeText={handleChange('addLine2')}
                value={values.addLine2}
                errorMessage={errors.addLine2}
              />
              <InputComponent
                label="City*"
                // defaultValue={city}
                onChangeText={handleChange('city')}
                value={values.city}
                errorMessage={errors.city}
              />
              <InputComponent
                label="Zipcode*"
                // defaultValue={pincode}
                keyboardType="numeric"
                onChangeText={handleChange('pincode')}
                value={values.pincode}
                errorMessage={errors.pincode}
              />
              <InputComponent
                label="Additional No."
                // defaultValue={pincode}
                keyboardType="numeric"
                onChangeText={handleChange('addNumber')}
                value={values.addNumber}
                errorMessage={errors.addNumber}
              />

              <InputComponent
                label="Country*"
                // defaultValue={country}
                onChangeText={handleChange('country')}
                value={values.country}
                errorMessage={errors.country}
              />
              <Button
                disabled={isDisable}
                title="Confirm Location"
                containerStyle={isDisable ? styles.btn1 : styles.btn}
                onPress={handleSubmit}
              />
              {showText && (
                <Text style={[styles.error, {alignSelf: 'center'}]}>
                  *Please fill all required feilds*
                </Text>
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ConfirmLocation;
