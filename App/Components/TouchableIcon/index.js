import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from '../StyledComponents';

const TouchableIcon = ({onPress,...props}) => {
  return (
    <TouchableOpacity style={{backgroundColor:"transparent"}} onPress={onPress} >
      <Icon {...props}   ></Icon>
    </TouchableOpacity>
  );
};
export default TouchableIcon;
