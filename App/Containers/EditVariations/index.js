import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import InputComponent from '../../Components/InputComponent';
import HView from '../../Components/HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {W, H} from '../../utils/DimensionCalculator';
import styles from './style';
import Button from '../../Components/CustomButton';
import {editVariation, getVariation} from '../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import {Screens} from '../../Constants/constant';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';

const EditVariations = (props) => {
  // console.log('variation ID => ' + props.route.params.variationId);
  // console.log('service ID => ' + props.route.params.serviceId);
  const [variationId, setVariationId] = useState(
    props?.route.params.variationId,
  );
  const [serviceId, setServiceId] = useState(props?.route.params.serviceId);
  const [priLangVarName, setPriLangVarName] = useState('');
  const [secLangVarName, setSecLangVarName] = useState('');
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState('');
  const [price, setPrice] = useState('');
  const [it, setIt] = useState([]);
  const [value, setValue] = useState('');
  const isFocused = useIsFocused();
  const [currency, setCurrency] = useState('');
  // console.log('variationId => ' + variationId);

  useEffect(() => {
    AsyncStorage.getItem('storeData').then((res) => {
      let res1 = JSON.parse(res);
      setCurrency(res1.StoreData?.store?.StoreAddSetting?.Currency?.name);
    });
  }, []);

  useEffect(() => {
    getVariation(variationId)
      .then((res) => {
        // setServiceId(res.data.serviceId);
        // setIt(res.data);
        if (res.status) {
          setPriLangVarName(res?.data[0]?.primaryLanguageVariationName);
          setSecLangVarName(res?.data[0]?.secondaryLanguageVariationName);
          setPrice(res?.data[0]?.price);
          setIt(res?.data[0]?.VariationProperties);
        } else {
          // Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocused]);

  const onPressEditVariation = () => {
    // console.log('variation properties => ' + JSON.stringify(it));
    // console.log(serviceId);
    editVariation(variationId, {
      serviceId: serviceId,
      price: price,
      primaryLanguageVariationName: priLangVarName,
      secondaryLanguageVariationName: secLangVarName,
      variationProperties: it,
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          props.navigation.navigate(Screens.SERVICE_FORM);
        } else {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVariationProp = (value, index, key) => {
    let tempValue = it;
    let tempProperties = {key: key, value: value};
    tempValue[index] = tempProperties;
    setIt(tempValue);
    setValue(value);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <InputComponent
            label="Primary Language Variation Name"
            value={priLangVarName}
            onChangeText={(value) => setPriLangVarName(value)}
          />
          <InputComponent
            label="Secondary Language Variation Name"
            value={secLangVarName}
            onChangeText={(value) => setSecLangVarName(value)}
          />
          <HView style={{flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            {it.map((val, i) => {
              return (
                <InputComponent
                  key={i}
                  label={val.key}
                  keyboardType="numeric"
                  value={val.value}
                  onChangeText={(value) =>
                    handleVariationProp(value, i, val.key)
                  }
                  containerStyle={{
                    width: W(150),
                    marginEnd: W(30),
                  }}
                />
              );
            })}
          </HView>
          <InputComponent
            leftIcon={<Text>{currency}</Text>}
            label="Price"
            value={price.toString()}
            onChangeText={(value) => setPrice(value)}
            keyboardType="numeric"
            containerStyle={{width: W(160)}}
          />
        </View>
        <Button
          title="Save Changes"
          containerStyle={styles.btn}
          onPress={() => onPressEditVariation()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default EditVariations;
