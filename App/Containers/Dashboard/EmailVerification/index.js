import React, {useEffect} from 'react';
import {View} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import {BackHandler} from 'react-native';
const EmailVerification = (props) => {
  const handler = () => {
    props.navigation.goBack();
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
    <View>
      <Text>Email Verification</Text>
    </View>
  );
};
export default EmailVerification;
