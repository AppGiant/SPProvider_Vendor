import React from 'react';
import {View} from '../StyledComponents';
import styles from "./style"
const SVGComponent = (props) => {
  return <View style={[props.style,styles.iconView]}>{props.children}</View>;
};
export default SVGComponent;
