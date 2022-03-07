import React from 'react';
import HView from '../HView';
import Text from '../TextI';
import styles from "./style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import TouchableIcon from '../TouchableIcon';
const FilterCard = ({label}) => {
  return (
    <HView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableIcon>
      <Icon size={15} name="close-circle-outline"></Icon></TouchableIcon>
    </HView>
  );
};
export default FilterCard;
