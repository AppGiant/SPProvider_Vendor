import React, {useState, useEffect} from 'react';
import HView from '../../Components/HView';
import InputComponent from '../../Components/InputComponent';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import TextBetweenLine from '../../Components/TextBetweenLine';
import Text from '../../Components/TextI';
import styles from './style';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import colors from '../../Themes/Colors';
import CheckBoxInput from '../../Components/CheckBoxInput';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import Button from '../../Components/CustomButton';
import {BackHandler} from 'react-native';
import {addGiftcard} from '../../api/ApiManager';
import Toast from 'react-native-simple-toast';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CalendarPicker from 'react-native-calendar-picker';
import {Modal, Dimensions, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Colors} from '../../Themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Chip} from 'react-native-elements';
import ReactChipsInput from 'react-native-chips';

const screenWidth = Dimensions.get('screen').width;

const AddGiftCard = (props) => {
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

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [showChip, setShowChip] = useState(false);

  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedCountires, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [zipcodes, setZipcodes] = useState([]);

  function onMultiChange(selected, setSelected) {
    return (item) => setSelected(xorBy(selected, [item], 'id'));
  }

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(moment(date).format('YYYY-MM-DD'));
    } else {
      setSelectedStartDate(moment(date).format('YYYY-MM-DD'));
      setSelectedEndDate('');
    }
  };

  const onOkPressed = () => {
    if (
      selectedStartDate != 'Invalid date' &&
      selectedStartDate != '' &&
      selectedEndDate != '' &&
      selectedEndDate != 'Invalid date'
    ) {
      setModalVisible(false);
      setShowChip(true);
    }
  };

  const K_OPTIONS = [
    {
      item: '<12',
      id: '1',
    },
    {
      item: '12-17',
      id: '2',
    },
    {
      item: '18-25',
      id: '3',
    },
    {
      item: '26-35',
      id: '4',
    },
    {
      item: '36-45',
      id: '5',
    },
    {
      item: '46-55',
      id: '6',
    },
    {
      item: '56-65',
      id: '7',
    },
  ];
  const countries = [
    {
      item: 'India',
      id: '1',
    },
    {
      item: 'USA',
      id: '2',
    },
  ];
  const cities = [
    {
      item: 'Riyadh',
      id: '1',
    },
    {
      item: 'Jidah',
      id: '2',
    },
  ];
  const codes = [
    {
      item: '3021',
      id: '1',
    },
    {
      item: '3645',
      id: '2',
    },
  ];

  const AddGC = (value) => {
    addGiftcard({
      storeId: props.route.params.storeId,
      categoryId: 1,
      subcategoryId: 1,
      giftCardName: value.giftCardName,
      validForDays: value.validFor,
      price: value.price,
      value: value.value,
      quantity: value.quantity,
      description: value.description,
      currencyId: 1,
      dateValidFrom: selectedStartDate,
      dateValidTo: selectedEndDate,
      country: 'India',
      city: 'Lucknow',
      agegroup: [1, 2, 3],
      zipcodes: zipcodes,
      demorgraphic: [1, 2],
    })
      .then((res) => {
        if (res.status) {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        } else {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GiftCardSchema = Yup.object().shape({
    giftCardName: Yup.string()
      .trim('The contact name cannot include leading and trailing spaces')
      .min(3, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .trim(
        'The contact description cannot include leading and trailing spaces',
      )
      .min(5, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
    validFor: Yup.number()
      .min(1, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    price: Yup.number()
      .min(1, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
    value: Yup.number()
      .min(1, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
    quantity: Yup.number()
      .min(1, 'Too Short!')
      .max(500, 'Too Long!')
      .required('Required'),
  });

  console.log(zipcodes);

  return (
    <SafeAreaView>
      <Formik
        validationSchema={GiftCardSchema}
        initialValues={{
          giftCardName: '',
          description: '',
          validFor: '',
          price: '',
          value: '',
          quantity: '',
        }}
        onSubmit={(values) => {
          AddGC(values);
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
          <ScrollView>
            <View style={styles.roundCard}>
              <Text style={styles.headText}>Create Gift Card</Text>
              <TextBetweenLine />

              <View style={styles.inputView}>
                <InputComponent
                  style={styles.input}
                  onChangeText={handleChange('giftCardName')}
                  value={values.giftCardName}
                  errorMessage={errors.giftCardName}
                  label="Gift Card Name"
                  placeholder="Gift Card Name"
                />
              </View>
              <View style={styles.descInputView}>
                <InputComponent
                  style={styles.descInput}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  errorMessage={errors.description}
                  label="Description"
                  placeholder="Tell us something about it"
                />
              </View>
              <Text style={styles.validText}>Validity for</Text>
              <HView style={styles.container1}>
                <View style={styles.dropdown}>
                  <InputComponent
                    label="Valid for"
                    keyboardType="numeric"
                    onChangeText={handleChange('validFor')}
                    value={values.validFor}
                    errorMessage={errors.validFor}
                    placeholder="10"
                  />
                </View>
                <Text style={styles.dayText}>Days After Purchase</Text>
              </HView>
              <HView style={styles.container2}>
                <View style={styles.dropdownHolder}>
                  <View style={styles.dropdown}>
                    <InputComponent
                      label="Price"
                      keyboardType="numeric"
                      onChangeText={handleChange('price')}
                      value={values.price}
                      errorMessage={errors.price}
                      placeholder="$10"
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.dropdown}>
                    <InputComponent
                      label="Value"
                      keyboardType="numeric"
                      onChangeText={handleChange('value')}
                      value={values.value}
                      errorMessage={errors.value}
                      placeholder="10"
                    />
                  </View>
                </View>
                <View>
                  <View style={styles.dropdown}>
                    <InputComponent
                      label="Quantity"
                      keyboardType="numeric"
                      onChangeText={handleChange('quantity')}
                      value={values.quantity}
                      errorMessage={errors.quantity}
                      placeholder="10"
                    />
                  </View>
                </View>
              </HView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onDismiss={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Icon
                      name="close"
                      size={20}
                      onPress={() => setModalVisible(false)}
                      style={styles.closeIcon}
                    />
                    <CalendarPicker
                      startFromMonday={true}
                      allowRangeSelection={true}
                      onDateChange={onDateChange}
                      width={screenWidth * 0.85}
                      selectedDayColor={Colors.PRIMARY}
                      selectedDayTextColor={Colors.white}
                    />
                    <TouchableOpacity
                      style={[styles.okBtn]}
                      onPress={() => onOkPressed()}>
                      <Text style={styles.okText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <View style={styles.dateHolder}>
                <Text style={styles.text}>Dates</Text>
                {showChip && (
                  <Chip
                    title={selectedStartDate + ' - ' + selectedEndDate}
                    icon={{
                      name: 'close',
                      type: 'font-awesome',
                      size: 20,
                      color: 'white',
                    }}
                    iconRight
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                )}
                <TouchableOpacity
                  style={styles.dateBtn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Choose Date</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.roundCard}>
              <Text style={styles.headText}>Target Demography</Text>
              <TextBetweenLine />
              <Text style={styles.genderText}>Gender</Text>
              <HView>
                <HView>
                  <CheckBoxInput color={colors.lightText} endText="Male" />
                  <Text style={styles.checkBoxText}>Male</Text>
                </HView>

                <HView>
                  <CheckBoxInput color={colors.lightText} endText="Male" />
                  <Text style={styles.checkBoxText}>Female</Text>
                </HView>
              </HView>
              <View style={styles.selectBoxHolder}>
                <Text style={styles.text}>Age Group</Text>
                <View style={styles.selectBox}>
                  <SelectBox
                    label=""
                    options={K_OPTIONS}
                    selectedValues={selectedTeams}
                    onMultiSelect={onMultiChange(
                      selectedTeams,
                      setSelectedTeams,
                    )}
                    onTapClose={onMultiChange(selectedTeams, setSelectedTeams)}
                    isMulti
                    multiOptionContainerStyle={styles.selectBoxBg}
                  />
                </View>
              </View>
              <View style={styles.selectBoxHolder}>
                <Text style={styles.text}>Country</Text>
                <View style={styles.selectBox}>
                  <SelectBox
                    label=""
                    options={countries}
                    selectedValues={selectedCountires}
                    onMultiSelect={onMultiChange(
                      selectedCountires,
                      setSelectedCountries,
                    )}
                    onTapClose={onMultiChange(
                      selectedCountires,
                      setSelectedCountries,
                    )}
                    isMulti
                    multiOptionContainerStyle={styles.selectBoxBg}
                    // style={styles.selectBox}
                  />
                </View>
              </View>
              <View style={styles.selectBoxHolder}>
                <Text style={styles.text}>Cities</Text>
                <View style={styles.selectBox}>
                  <SelectBox
                    label=""
                    options={cities}
                    selectedValues={selectedCities}
                    onMultiSelect={onMultiChange(
                      selectedCities,
                      setSelectedCities,
                    )}
                    onTapClose={onMultiChange(
                      selectedCities,
                      setSelectedCities,
                    )}
                    isMulti
                    multiOptionContainerStyle={styles.selectBoxBg}
                    // style={styles.selectBox}
                  />
                </View>
              </View>
              <View style={styles.selectBoxHolder}>
                <Text style={styles.text}>Postal/Zip Code</Text>
                <View style={styles.selectBox}>
                  <ReactChipsInput
                    label=""
                    initialChips={zipcodes}
                    onChangeChips={(chips) => setZipcodes(chips)}
                    alertRequired={false}
                    chipStyle={{
                      borderColor: colors.lightText,
                      backgroundColor: colors.white,
                    }}
                    inputStyle={{fontSize: 12}}
                    // labelStyle={{color: 'blue'}}
                    labelOnBlur={{color: '#666'}}
                  />
                </View>
              </View>
            </View>

            <HView style={styles.btnHolder}>
              <Button
                title="Cancel"
                containerStyle={styles.btn1}
                titleStyle={styles.buttonTitle1}
                onPress={() => console.log('clicked')}
              />
              <Button
                title="Create Gift Card"
                containerStyle={styles.btn2}
                titleStyle={styles.buttonTitle2}
                onPress={handleSubmit}
              />
            </HView>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default AddGiftCard;
