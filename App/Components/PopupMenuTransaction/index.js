import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import HView from '../HView';
import styles from './style';

const PopupMenu = ({onPress}) => {
  return (
    <HView style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textBg}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textBg} >Decline</Text>
      </TouchableOpacity>
    </HView>
  );
};

export default PopupMenu;
