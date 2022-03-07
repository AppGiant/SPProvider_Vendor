import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputComponent from '../../Components/InputComponent';
import HView from '../../Components/HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {W, H} from '../../utils/DimensionCalculator';
import styles from './style';
import Button from '../../Components/CustomButton';
import {addVariation} from '../../api/ApiManager';
import {Screens} from '../../Constants/constant';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddVariations = (props) => {
  const [serviceId, setServiceId] = useState(props.route.params.serviceId);
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('storeData').then((res) => {
      let res1 = JSON.parse(res);
      setCurrency(res1.StoreData?.store?.StoreAddSetting?.Currency?.name);
    });
  }, []);

  const addVariationByServiceId = ({
    priLangVarName,
    secLangVarName,
    hours,
    minutes,
    price
  }) => {
    console.log({
      serviceId: serviceId,
      price: price,
      primaryLanguageVariationName: priLangVarName,
      secondaryLanguageVariationName: secLangVarName,
      variationProperties: [
        {
          key: 'Hours',
          value: hours,
        },
        {
          key: 'Minutes',
          value: minutes,
        },
      ],
    });
    addVariation({
      serviceId: serviceId,
      price: price,
      primaryLanguageVariationName: priLangVarName,
      secondaryLanguageVariationName: secLangVarName,
      variationProperties: [
        {
          key: 'Hours',
          value: hours,
        },
        {
          key: 'Minutes',
          value: minutes,
        },
      ],
    })
      .then((res) => {
        if (res.status) {
          props.navigation.navigate(Screens.SERVICE_FORM);
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const VariationSchema = Yup.object().shape({
    priLangVarName: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Required'),
    secLangVarName: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .required('Required'),
    hours: Yup.string()
      .min(0, 'Invalid')
      .max(59, 'Invalid')
      .required('Required'),
    minutes: Yup.string()
      .min(0, 'Invalid')
      .max(59, 'Invalid')
      .required('Required'),
    price: Yup.string()
      .min(1, 'Too Short!')
      .required('Required')
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Formik
        validationSchema={VariationSchema}
        initialValues={{
          priLangVarName: '',
          secLangVarName: '',
          hours: '',
          minutes: '',
          price: ''
        }}
        onSubmit={(values) => {
          addVariationByServiceId(values);
        }}
        validateOnChange>
        {({
          handleChange,
          handleSubmit,
          values,
          errors
        }) => (
          <ScrollView>
            <View style={styles.container}>
              <InputComponent
                label="Primary Language Variation Name"
                value={values.priLangVarName}
                onChangeText={handleChange('priLangVarName')}
                errorMessage={errors.priLangVarName}
              />
              <InputComponent
                label="Secondary Language Variation Name"
                value={values.secLangVarName}
                onChangeText={handleChange('secLangVarName')}
                errorMessage={errors.secLangVarName}
              />
              <HView style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                <InputComponent
                  label={'Hours'}
                  keyboardType="numeric"
                  value={values.hours}
                  onChangeText={handleChange('hours')}
                  errorMessage={errors.hours}
                  containerStyle={{
                    width: W(150),
                    marginEnd: W(30),
                  }}
                />
                <InputComponent
                  label={'Minutes'}
                  keyboardType="numeric"
                  value={values.minutes}
                  onChangeText={handleChange('minutes')}
                  errorMessage={errors.minutes}
                  containerStyle={{
                    width: W(150),
                    marginEnd: W(30),
                  }}
                />
              </HView>
              <InputComponent
                leftIcon={<Text>{currency}</Text>}
                label="Price"
                value={values.price}
                onChangeText={handleChange('price')}
                keyboardType="numeric"
                containerStyle={{width: W(160)}}
                errorMessage={errors.price}
              />
            </View>
            <Button
              title="Add Variation"
              containerStyle={styles.btn}
              onPress={handleSubmit}
            />
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default AddVariations;
