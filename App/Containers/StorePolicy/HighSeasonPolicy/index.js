import React, {useState} from 'react';
import StorePolicyCard from '../../../Components/StorePolicyCard';
import {
  View,
  ScrollView,
  SafeAreaView,
} from '../../../Components/StyledComponents';
import InputComponent from '../../../Components/InputComponent';
import Button from '../../../Components/CustomButton';
import styles from './styles';
import Text from '../../../Components/TextI';
import DatesBetween from '../../../Components/DatesBetween';
import DatePickerPopup from '../../../Components/DatePickerPopup';
import {Chip} from 'react-native-elements';
import HView from '../../../Components/HView';

const HighSeasonPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showPopup = () => {
    setIsVisible(!isVisible);
  };
  const chips = [1, 2];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headText}>High Season Policy</Text>
          <View style={styles.card}>
            {/* <DatesBetween showPopup={showPopup} /> */}
            <HView style={styles.chipContainer}>
              {chips.map((it, i) => {
                return (
                  <View key={i} style={{marginTop: 10}}>
                    <Chip title="20 jan 2020 to 22 jan 2020" />
                  </View>
                );
              })}
            </HView>
            <Button
              title="Add More"
              containerStyle={styles.btn}
              onPress={() => showPopup()}
            />
          </View>
          <StorePolicyCard value="Rescheduling" />
          <StorePolicyCard value="Cancellations" />
          <View style={styles.roundCard}>
            <InputComponent
              placeholder="Describe your policies here"
              style={styles.input}
            />
          </View>
          <Button
            title="Update Policy"
            containerStyle={styles.btn1}
            style={styles.buttonTitle1}
          />
        </View>
      </ScrollView>
      {isVisible && <DatePickerPopup handleFilter={setIsVisible} />}
    </SafeAreaView>
  );
};
export default HighSeasonPolicy;
