import React, {useEffect} from 'react';
import RNDropDownPicker from 'react-native-dropdown-picker';
import {LogBox} from 'react-native';
import {SafeAreaView} from '../StyledComponents';
import styles from './style';
const DropDownPicker = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  });
  return (
    <RNDropDownPicker
      scrollViewProps={{keyboardShouldPersist: 'always'}}
      customItemContainerStyle={{maxHeight: 100}}
      zIndex={1000}
      style={styles.searchContainerStyle}
      listItemContainerStyle={styles.searchContainerStyle}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      {...props}
    />
  );
};
export default DropDownPicker;
