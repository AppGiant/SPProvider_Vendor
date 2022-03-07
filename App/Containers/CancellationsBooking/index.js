import React, {useState} from 'react';
import styles from './style';
import HView from '../../Components/HView';
import InputComponent from '../../Components/InputComponent';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import color from '../../Constants/color';
import TextBetweenLine from '../../Components/TextBetweenLine';

const CancellationsBooking = () => {
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <ScrollView>
        <View style={styles.container}>
          <HView style={styles.searchContainer}>
            <View style={styles.searchInputBoxContainer}>
              <InputComponent
                value="Home Made Foods"
                style={styles.searchInputBox}
                rightIcon={() => <Icon size={20} name="magnify"></Icon>}
              />
            </View>
            <View style={styles.mapIconContainer}>
              <Icon size={30} color={color.BORDER} name="calendar"></Icon>
            </View>
          </HView>
        </View>
      </ScrollView>
      {showFilter && <SortAndFiltersPopUp handleFilter={setShowFilter} />}
    </SafeAreaView>
  );
};
export default CancellationsBooking;
