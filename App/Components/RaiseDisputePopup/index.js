import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import {Animated} from 'react-native';
import TextBetweenLine from '../TextBetweenLine';
import SpecialText from '../SpecialTextLabel';
import InputComponent from '../InputComponent';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RaiseDisputePopup = ({handleFilter}) => {
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
      <KeyboardAwareScrollView>
        <View style={styles.container1}>
          <HView style={styles.container2}>
            <View style={styles.header}>
              <Text style={styles.title}>Dispute</Text>
              {/* <Text style={{color: 'white'}}>xxxxx</Text> */}
            </View>
            <TouchableIcon onPress={() => close()} style={styles.icon}>
              <Icon name="close-circle-outline" size={24} />
            </TouchableIcon>
          </HView>
        </View>
        <View>
          <HView style={styles.holder}>
            <View style={styles.view1}>
              <Text style={styles.text1}>Txn. Id</Text>
              <Text style={styles.text2}>xxxxxxxxxx</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text1}>Time</Text>
              <Text style={styles.text2}>:12:00 Pm</Text>
            </View>
          </HView>
          <View style={styles.moneyView}>
            <Text style={styles.moneyText}>$ 78</Text>
          </View>
          <View style={styles.orderView}>
            <Text style={styles.statusText}>Txn Status</Text>
            <SpecialText value={'Success'} type={1} />
          </View>
          <View style={styles.inputView}>
            <InputComponent label="Message" style={styles.input} />
          </View>
          <View style={styles.btnContainer}>
            <Button
              titleStyle={styles.buttonTitle1}
              title="Submit"
              containerStyle={styles.btn1}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Animated.View>
  );
};
export default RaiseDisputePopup;
