import React from 'react'
import OTPInputView  from '@twotalltotems/react-native-otp-input'
 import styles from "./style"
 import Toast from "react-native-simple-toast"
import { W } from '../../utils/DimensionCalculator'
const OTPInput=(props)=>
{
return ( 
<OTPInputView
    style={{flex:1,padding:10}}
    autoFocusOnLoad
    
    codeInputFieldStyle={[styles.underlineStyleBase,{width:W(300)/props.pinCount}]}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    {...props}
/>)
}
export default OTPInput;