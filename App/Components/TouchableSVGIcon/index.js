import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from '../StyledComponents';

const TouchableSVGIcon = ({onPress,...props}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      {props.children}
    </TouchableOpacity>
  );
};
export default TouchableSVGIcon;
