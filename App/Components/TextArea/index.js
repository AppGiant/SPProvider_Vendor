import React from 'react'
import { TextInput } from 'react-native';
import styles from "./style"
const TextArea=({style,...props})=>
{
return (
    <TextInput style={[styles.textInput,style]} multiline={true} numberOfLines={5} {...props}></TextInput>
)
}
export default TextArea;