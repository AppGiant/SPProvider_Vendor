import React from 'react';
import HView from '../HView';
import InputComponent from '../InputComponent';
import {View} from '../StyledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../Constants/color';
import styles from './style';
const SearchHeader = (props) => {
  return (
    <View style={styles.container}>
      <HView style={styles.searchContainer}>
        <View style={styles.searchInputBoxContainer}>
          <InputComponent
            // value=""
            placeholder="Search"
            style={styles.searchInputBox}
            rightIcon={() => <Icon size={20} name="magnify"></Icon>}
            onChangeText={props.onChangeText}
          />
        </View>
        <View style={styles.mapIconContainer}>
          <Icon size={30} color={color.BORDER} name="calendar"></Icon>
        </View>
      </HView>
    </View>
  );
};
export default SearchHeader;
