import React, {useState, useEffect} from 'react';
import {View} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import TextBetweenLine from '../../Components/TextBetweenLine';
import DropDownPicker from '../../Components/DropDownPicker';
import {TouchableOpacity} from 'react-native';

const DatesBetween = ({showPopup}) => {
  const [openItem, setOpenItem] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState('date');
  const [items, setItems] = useState([
    {label: '12 jan, 2021', value: 'one', key: 1},
    {label: '30 mar, 2021', value: 'two', key: 2},
  ]);

  const setVisible = () => {
    showPopup();
  };

  return (
    <View style={styles.roundCard}>
      <Text style={styles.headText}>Dates</Text>
      <TextBetweenLine />
      <HView style={styles.container}>
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownView}>
            <DropDownPicker
              placeholder="01 jan, 2020"
              style={styles.dropdown}
              open={openItem}
              value={date}
              items={items}
              setOpen={setOpenItem}
              setValue={setDate}
              setItems={setItems}
            />
          </View>
          <Text style={styles.text}>to</Text>
          <View style={styles.dropdownView}>
            <DropDownPicker
              placeholder="01 jan, 2020"
              style={styles.dropdown}
              open={openDate}
              value={date}
              items={items}
              setOpen={setOpenDate}
              setValue={setDate}
              setItems={setItems}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.dotView} onPress={() => setVisible()}>
          <View>
            <Text style={styles.blueText}>Add More</Text>
          </View>
        </TouchableOpacity>
      </HView>
    </View>
  );
};
export default DatesBetween;
