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

const DisputeStatusPopup = ({handleFilter}) => {
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
        styles.container,
      ]}>
      <View style={styles.container1}>
        <HView style={styles.container2}>
          <View style={styles.header}>
            <Text style={styles.title}>Dispute</Text>
          </View>
          <TouchableIcon onPress={() => close()} style={styles.icon}>
            <Icon name="close-circle-outline" size={24} />
          </TouchableIcon>
        </HView>
      </View>
      <View>
        <HView style={styles.holder}>
          <View style={styles.view1}>
            <Text style={styles.text1}>Dispute Id</Text>
            <Text style={styles.text2}>xxxxxxxxxx</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>Dispute Time</Text>
            <Text style={styles.text2}>:12:00 Pm</Text>
          </View>
        </HView>
        <HView style={styles.holder}>
          <View style={styles.view1}>
            <Text style={styles.text1}>Txn. Id</Text>
            <Text style={styles.text2}>xxxxxxxxxx</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>Txn. Time</Text>
            <Text style={styles.text2}>:12:00 Pm</Text>
          </View>
        </HView>
        <HView style={styles.holder}>
          <View style={styles.view1}>
            <Text style={styles.text1}>Txn. Value</Text>
            <Text style={styles.text2}>$ 78</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>Txn. Status</Text>
            <Text style={styles.text2}>Success</Text>
          </View>
        </HView>
        <View style={styles.orderView}>
          <Text style={styles.statusText}>Dispute Status</Text>
          <SpecialText value={'Success'} type={2} />
        </View>
        <View style={styles.inputView}>
          {/* <InputComponent label="Your Message" style={styles.input} /> */}
          <Text style={styles.msgText}>Your Message</Text>
          <Text style={styles.msg}>
            Amount was deducted on my card but was not credited to wallet
          </Text>
        </View>
        <View style={styles.inputView}>
          {/* <InputComponent label="Your Message" style={styles.input} /> */}
          <Text style={styles.msgText}>Support Team Response</Text>
          <Text style={styles.msg}>
            We have credited $ 78 to your wallet. Please check your trasaction
            history for the same.
          </Text>
        </View>
        <View style={styles.sptView}>
          <Text style={styles.sptText}>
            For further assistance feel free to write to us on
            support@saloonplus.com
          </Text>
        </View>
        <View style={styles.line}>
          <TextBetweenLine />
        </View>
      </View>
    </Animated.View>
  );
};
export default DisputeStatusPopup;
