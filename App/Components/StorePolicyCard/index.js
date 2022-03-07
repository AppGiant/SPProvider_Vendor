import React, {useState, useEffect} from 'react';
import {View} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBetweenLine from '../../Components/TextBetweenLine';
import DropDownPicker from '../../Components/DropDownPicker';
import Counter from '../Counter';
import {Colors} from '../../Themes';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {Switch} from 'react-native-gesture-handler';
import Button from '../CustomButton';

const StorePolicyCard = ({value}) => {
  const [openItem, setOpenItem] = useState(false);
  const [openHour, setOpenHour] = useState(false);
  const [currency, setCurrency] = useState('asset');
  const [items, setItems] = useState([
    {label: '1', value: 'one', key: 1},
    {label: '2', value: 'two', key: 2},
  ]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [freeEnabled, setFreeEnabled] = useState(false);
  const [paidEnabled, setPaidEnabled] = useState(false);

  return (
    <View style={styles.roundCard}>
      <View>
        <HView style={styles.headContainer}>
          <Text style={styles.headText}>{value}</Text>
          <Switch
            trackColor={{
              false: Colors.liteRed,
              true: Colors.PRIMARY,
            }}
            thumbColor={Colors.white}
            value={isEnabled}
            onValueChange={() => setIsEnabled(!isEnabled)}
          />
        </HView>
      </View>
      {isEnabled && (
        <View>
          <TextBetweenLine />
          <HView style={styles.headContainer}>
            <Text style={styles.subText}>{'Free Rescheduling'}</Text>
            <Switch
              trackColor={{
                false: Colors.liteRed,
                true: Colors.PRIMARY,
              }}
              thumbColor={Colors.white}
              value={freeEnabled}
              onValueChange={() => setFreeEnabled(!freeEnabled)}
            />
          </HView>
        </View>
      )}

      {freeEnabled && (
        <View>
          <TextBetweenLine />
          <View style={styles.container}>
            <Text style={styles.boldText}>Allowed to Reschedule Until</Text>
            <HView style={styles.dropdownContainer}>
              <View>
                <Counter value="01" textColor={Colors.BLACK} />
              </View>
              <View style={styles.dropdownView}>
                <DropDownPicker
                  placeholder="Hours"
                  style={styles.dropdown}
                  open={openItem}
                  value={currency}
                  items={items}
                  setOpen={setOpenItem}
                  setValue={setCurrency}
                  setItems={setItems}
                />
              </View>
            </HView>
            <Text style={styles.normalText}>Before the booked time</Text>
          </View>
        </View>
      )}

      {isEnabled && (
        <View>
          <HView style={styles.headContainer}>
            <Text style={styles.subText}>{'Paid Rescheduling'}</Text>
            <Switch
              trackColor={{
                false: Colors.liteRed,
                true: Colors.PRIMARY,
              }}
              thumbColor={Colors.white}
              value={paidEnabled}
              onValueChange={() => setPaidEnabled(!paidEnabled)}
            />
          </HView>
        </View>
      )}

      {paidEnabled && (
        <View>
          <TextBetweenLine />
          <View style={styles.container}>
            <Text style={styles.boldText}>
              Penalty if Rescheduled in less than
            </Text>
            <HView style={styles.dropdownContainer}>
              <View>
                <Counter value="01" textColor={Colors.BLACK} />
              </View>
              <View style={styles.dropdownView}>
                <DropDownPicker
                  placeholder="Hours"
                  style={styles.dropdown}
                  open={openHour}
                  value={currency}
                  items={items}
                  setOpen={setOpenHour}
                  setValue={setCurrency}
                  setItems={setItems}
                />
              </View>
            </HView>
            <Text style={styles.normalText}>Before the booked time</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.boldText}>Penalty</Text>
            <HView style={styles.dropdownContainer}>
              <View style={styles.view}>
                <Text style={styles.normalHeadText}>Fixed</Text>
                <Counter value="$10" />
              </View>
              <Text style={styles.text}>And</Text>
              <View style={styles.view}>
                <Text style={styles.normalHeadText}>Percentage</Text>
                <Counter value="$10" textColor={Colors.BLUE_GREY} />
              </View>
            </HView>
          </View>
        </View>
      )}
      {(freeEnabled || paidEnabled) && (
        <View>
          <TextBetweenLine />

          <Button title="Update" containerStyle={styles.updateBtn} />

          {/* <HView style={styles.checkBoxContainer}>
            <CheckBox
              checkedColor={Colors.PRIMARY}
              style={styles.checkBox}
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
            <Text style={styles.linkText}>Change Rescheduling Policy</Text>
          </HView> */}
        </View>
      )}
    </View>
  );
};
export default StorePolicyCard;
