import { props } from 'ramda';
import React from 'react';
import { View } from '../StyledComponents';
import styles from "./style"
const HView=(props)=>
{
return <View style={[styles.hView,props.style]}>{props.children}</View>
}
export default HView;