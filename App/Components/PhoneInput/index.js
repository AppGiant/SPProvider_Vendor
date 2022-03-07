import React from 'react'
import RNPhoneInput from 'react-native-phone-number-input'
import { W } from '../../utils/DimensionCalculator'
import { View } from '../StyledComponents'
import styles from "./style"

const PhoneInput=(props)=>
{
return(  <View style={styles.phoneContainer}>
    <RNPhoneInput codeTextStyle={{marginTop:W(0)}} textInputStyle={{marginTop:W(0),flex:1}}   textContainerStyle={styles.textContainerStyle} {...props} />
    </View>)
}
export default PhoneInput;