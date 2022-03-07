import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import {Animated} from 'react-native';
import SpecialText from '../SpecialTextLabel';
import {Image} from 'react-native';
import Button from '../../Components/CustomButton';
import InputComponent from '../InputComponent';

const RejectReschedulePopup = ({handleFilter, rescheduleBooking}) => {
  const [state, setState] = useState({
    x: new Animated.Value(0),
    y: new Animated.Value(1),
    visible: false,
  });
  useEffect(() => {
    state.x.addListener(({value}) => {
      if (value == 1) setState({...state, ['visible']: true});
      //console.log("x ", value)
    });
    state.y.addListener(({value}) => {
      if (value == 2) {
        // console.log("UnMounted")
        handleFilter(false);
      }
      //  console.log("y ", value)
    });
    open();
    return () => {
      state.x.removeAllListeners();
      state.y.removeAllListeners();
    };
  }, []);
  const open = () => {
    Animated.timing(state.x, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const close = () => {
    Animated.timing(state.y, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    // handleFilter(false)
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: state.visible
                ? state.y.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 700],
                  })
                : state.x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [700, 0],
                  }),
            },
          ],
        },
      ]}>
      <View style={styles.containerHeader}>
        <HView style={styles.containerSubHeader}>
          <View style={styles.header}>
            <Text style={styles.title}>Reject</Text>
          </View>
          <TouchableIcon onPress={() => close()} style={styles.icon}>
            <Icon name="close-circle-outline" size={24} />
          </TouchableIcon>
        </HView>
      </View>
      <View style={styles.roundCard}>
        <Text style={styles.sampleText}>Are you sure you want to Reject?</Text>
        <HView style={styles.btnHolder}>
          <Button
            title="Reject"
            containerStyle={styles.btn1}
            titleStyle={styles.buttonTitle1}
            onPress={() => rescheduleBooking()}
          />
          <Button
            title="Cancel"
            containerStyle={styles.btn2}
            titleStyle={styles.buttonTitle2}
            onPress={() => close()}
          />
        </HView>
      </View>
    </Animated.View>
  );
};
export default RejectReschedulePopup;
