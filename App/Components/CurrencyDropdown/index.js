import React, {useState} from 'react';
import {View} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style';
import InputComponent from '../InputComponent';
import {TextInput} from 'react-native-gesture-handler';

const CurrencyDropdown = () => {
  const [openItem, setOpenItem] = useState(false);
  const [currency, setCurrency] = useState('asset');
  const [items, setItems] = useState([
    {label: 'USD ($)', value: 'dollar', key: 1},
    {label: 'INR', value: 'rupee', key: 2},
  ]);
  return (
    <View style={styles.container}>
      <HView>
        <View style={styles.view1}>
          <Text style={styles.text1}>Currency</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text2}>Amount</Text>
        </View>
      </HView>
      <HView style={styles.dropdownContainer}>
        <View style={styles.view3}>
          <DropDownPicker
            style={styles.dropdown}
            placeholder="USD ($)"
            open={openItem}
            value={currency}
            items={items}
            setOpen={setOpenItem}
            setValue={setCurrency}
            setItems={setItems}
          />
        </View>
        <View style={styles.view4}>
          {/* <Text style={styles.text3}>Select</Text> */}
          <TextInput style={styles.input} placeholder="$500.00" />
        </View>
      </HView>
    </View>
  );
};
export default CurrencyDropdown;
