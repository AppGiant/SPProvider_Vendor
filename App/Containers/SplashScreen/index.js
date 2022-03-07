import React, {useEffect} from 'react';
import {View, SafeAreaView} from '../../Components/StyledComponents';
import {Screens} from '../../Constants/constant';
import {Image} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackHandler} from 'react-native';
const SplashScreen = (props) => {
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
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((res) => {
      console.log(res);
      if (res != null) {
        setTimeout(() => props.navigation.navigate(Screens.ROOT1), 1000);
      } else {
        setTimeout(() => props.navigation.navigate(Screens.LOGIN), 1000);
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={require('../../Images/512.png')}></Image>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
