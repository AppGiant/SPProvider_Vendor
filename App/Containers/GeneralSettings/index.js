import React, {useState} from 'react';
import HView from '../../Components/HView';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import DropDownPicker from '../../Components/DropDownPicker';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {Colors} from '../../Themes';
import Button from '../../Components/CustomButton';
import {editUserAddSettings} from '../../api/ApiManager';
import {StackActions} from '@react-navigation/native';
import {Screens} from '../../Constants/constant';

const GeneralSettings = (props) => {
  const addSettings = props.route.params?.addSettings || {};
  const popAction = StackActions.pop(1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(addSettings.timeZone);
  const [items, setItems] = useState([
    {label: 'DD-MM-YYYY', value: 'DD-MM-YYYY', key: 1},
    {label: 'MM-DD-YYYY', value: 'MM-DD-YYYY', key: 2},
  ]);

  const [openTimeZone, setOpenTimeZone] = useState(false);
  const [valueTimeZone, setValueTimeZone] = useState(addSettings.dateFormat);
  const [itemsTimeZone, setItemsTimeZone] = useState([
    {label: 'CEST', value: 'CEST', key: 1},
    {label: 'EST', value: 'EST', key: 2},
  ]);

  const [isPhoneChecked, setIsPhoneChecked] = useState(!!addSettings.smsNotify);
  const [isEmailChecked, setIsEmailChecked] = useState(!!addSettings.EmailNotify);

  const setStatusEmail = () => {
    setIsEmailChecked(!isEmailChecked);
  };
  const setStatusPhone = () => {
    setIsPhoneChecked(!isPhoneChecked);
  };

  const register = () => {
    console.log(`register called -> ${valueTimeZone} ${value}`);
    Promise.all([
      editUserAddSettings({
        dateFormat: valueTimeZone,
        timeZone: value,
        EmailNotify: isEmailChecked ? '1' : '0',
        smsNotify: isPhoneChecked ? '1' : '0',
      }),
    ])
      .then((res) => {
        if (res[0].status) {
          console.log('success -> ' + JSON.stringify(res));
          props.navigation.navigate(Screens.ACCOUNT_SETTINGS);
        } else {
          console.log('failed -> ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Date Format</Text>
        <DropDownPicker
          style={styles.dropdown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Text style={styles.text}>Time zone</Text>
        <DropDownPicker
          style={styles.dropdown1}
          open={openTimeZone}
          value={valueTimeZone}
          items={itemsTimeZone}
          setOpen={setOpenTimeZone}
          setValue={setValueTimeZone}
          setItems={setItemsTimeZone}
        />
        <Text style={styles.text}>Get Notifications</Text>
        <HView style={styles.hView}>
          <CheckBox
            checkedColor={Colors.PRIMARY}
            style={styles.checkBox}
            checked={isEmailChecked}
            title="Email"
            onPress={() => setStatusEmail()}
          />
          <CheckBox
            checkedColor={Colors.PRIMARY}
            style={styles.checkBox}
            checked={isPhoneChecked}
            title="Phone"
            onPress={() => setStatusPhone()}
          />
        </HView>
        <HView style={styles.container2}>
          <Button
            title="Cancel"
            containerStyle={styles.btn1}
            titleStyle={styles.buttonTitle1}
            onPress={() => props.navigation.dispatch(popAction)}
          />
          <Button
            title="Submit"
            containerStyle={styles.btn}
            titleStyle={styles.buttonTitle}
            onPress={() => register()}
          />
        </HView>
      </View>
    </SafeAreaView>
  );
};
export default GeneralSettings;
