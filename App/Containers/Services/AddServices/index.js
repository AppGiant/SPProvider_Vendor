import React, {useEffect} from 'react';
// import {View} from 'react-native';
import {BackHandler} from 'react-native';
import Text from '../../../Components/TextI';
import {View} from '../../../Components/StyledComponents';

const AddService = (props) => {
  const handler = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Working on this</Text>
    </View>
  );
};
export default AddService;
