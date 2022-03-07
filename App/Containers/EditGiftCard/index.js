import React, {useState, useEffect} from 'react';
import DropDownPicker from '../../Components/DropDownPicker';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditGiftCard = (props) => {
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

  const [openValid, setOpenValid] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openValue, setOpenValue] = useState(false);
  const [openQuantity, setOpenQuantity] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [valid, setValid] = useState('10');
  const [items, setItems] = useState([
    {label: '10', value: '10 days', key: 1},
    {label: '20', value: '20 days', key: 2},
  ]);

  const K_OPTIONS = [
    {
      item: '<12',
      id: '1',
    },
    {
      item: '12-17',
      id: '2',
    },
    // {
    //   item: '18-25',
    //   id: '3',
    // },
    // {
    //   item: '26-35',
    //   id: '4',
    // },
    // {
    //   item: '36-45',
    //   id: '5',
    // },
    // {
    //   item: '46-55',
    //   id: '6',
    // },
    // {
    //   item: '56-65',
    //   id: '7',
    // },
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
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedCountires, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCodes, setSelectedCodes] = useState([]);
  function onMultiChange(selected, setSelected) {
    return (item) => setSelected(xorBy(selected, [item], 'id'));
  }
  const [isCheckedM, setIsCheckedM] = useState(false);
  const [isCheckedF, setIsCheckedF] = useState(false);

  const checkedStatusMale = () => {
    setIsCheckedM(!isCheckedM);
    setIsCheckedF(false);
  };

  const checkedStatusFemale = () => {
    setIsCheckedF(!isCheckedF);
    setIsCheckedM(false);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity>
        <Text style={{padding: 10, color: colors.error}}>
          *These fields will be refield when api is integerated*
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.roundCard}>
          <Text style={styles.headText}>Create Gift Card</Text>
          <TextBetweenLine />
          <View style={styles.inputView}>
            <InputComponent
              style={styles.input}
              label="Gift Card Name"
              placeholder="list 1"
            />
          </View>
          <View style={styles.descInputView}>
            <InputComponent
              style={styles.descInput}
              label="Description"
              placeholder="A description goes here..."
            />
          </View>
          <Text style={styles.validText}>Validity for</Text>
          <Text style={styles.text1}>Valid for</Text>
          <HView style={styles.container1}>
            <View style={styles.dropdown}>
              <DropDownPicker
                placeholder="Select"
                // zIndex={2000}
                open={openValid}
                value={valid}
                items={items}
                setOpen={setOpenValid}
                setValue={setValid}
                setItems={setItems}
              />
            </View>
            <Text style={styles.dayText}>Days After Purchase</Text>
          </HView>
          <HView style={styles.container2}>
            <View style={styles.dropdownHolder}>
              <Text style={styles.dropdownHeadText}>Price</Text>
              <View style={styles.dropdown}>
                <DropDownPicker
                  placeholder="Select"
                  // zIndex={5000}
                  open={openPrice}
                  value={valid}
                  items={items}
                  setOpen={setOpenPrice}
                  setValue={setValid}
                  setItems={setItems}
                />
              </View>
            </View>
            <View>
              <Text style={styles.dropdownHeadText}>Value</Text>
              <View style={styles.dropdown}>
                <DropDownPicker
                  placeholder="Select"
                  // zIndex={5000}
                  open={openValue}
                  value={valid}
                  items={items}
                  setOpen={setOpenValue}
                  setValue={setValid}
                  setItems={setItems}
                />
              </View>
            </View>
            <View>
              <Text style={styles.dropdownHeadText}>Quantity</Text>
              <View style={styles.dropdown}>
                <DropDownPicker
                  placeholder="Select"
                  // zIndex={2000}
                  open={openQuantity}
                  value={valid}
                  items={items}
                  setOpen={setOpenQuantity}
                  setValue={setValid}
                  setItems={setItems}
                />
              </View>
            </View>
          </HView>
          <View style={styles.dateHolder}>
            <Text style={styles.text}>Dates</Text>
            <DropDownPicker
              placeholder="Nov 15, 2020 - Nov 16, 2020"
              zIndex={2000}
              open={openDate}
              value={valid}
              items={items}
              setOpen={setOpenDate}
              setValue={setValid}
              setItems={setItems}
            />
          </View>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.roundCard}>
            <Text style={styles.headText}>Target Demography</Text>
            <TextBetweenLine />
            <Text style={styles.genderText}>Gender</Text>
            <HView>
              <HView>
                <CheckBoxInput
                  color={colors.lightText}
                  checkedColor={colors.PRIMARY}
                  checked={isCheckedM}
                  onPress={() => checkedStatusMale()}
                />
                <Text style={styles.checkBoxText}>Male</Text>
              </HView>

              <HView>
                <CheckBoxInput
                  color={colors.lightText}
                  checked={isCheckedF}
                  onPress={() => checkedStatusFemale()}
                  checkedColor={colors.PRIMARY}
                />
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
                  onMultiSelect={onMultiChange(selectedTeams, setSelectedTeams)}
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
                  onTapClose={onMultiChange(selectedCities, setSelectedCities)}
                  isMulti
                  multiOptionContainerStyle={styles.selectBoxBg}
                  // style={styles.selectBox}
                />
              </View>
            </View>
            <View style={styles.selectBoxHolder}>
              <Text style={styles.text}>Postal/Zip Code</Text>
              <View style={styles.selectBox}>
                <SelectBox
                  label=""
                  options={codes}
                  selectedValues={selectedCodes}
                  onMultiSelect={onMultiChange(selectedCodes, setSelectedCodes)}
                  onTapClose={onMultiChange(selectedCodes, setSelectedCodes)}
                  isMulti
                  multiOptionContainerStyle={styles.selectBoxBg}
                  // style={styles.selectBox}
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
            onPress={() => console.log('clicked')}
          />
        </HView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EditGiftCard;
