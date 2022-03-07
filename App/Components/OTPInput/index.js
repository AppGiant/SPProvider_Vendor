import React from 'react';
import HView from '../HView';
import {Input} from 'react-native-elements';
import {View} from '../StyledComponents';
import styles from './style';
const OTPInput = ({count,numbers}) => {
    var nums=numbers||[]
  return (
    <HView style={styles.otpContainer}>
      {[...Array(count)].map((it, index) => (
        <View key={index} style={styles.numberInput}>
          <Input  defaultValue={nums[index]||""} keyboardType="number-pad" maxLength={1} inputContainerStyle={{borderBottomWidth:0}} style={styles.textInput} value={1} ></Input>
        </View>
      ))}
    </HView>
  );
};
export default OTPInput;
