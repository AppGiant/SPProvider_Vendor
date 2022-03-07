import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import {Animated} from 'react-native';
import SpecialText from '../SpecialTextLabel';

const TransactionPopup = ({handleFilter}) => {
  const [currentFilter, setCurrentFilter] = useState(1);
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
      <View style={styles.container1}>
        <HView style={styles.container2}>
          <View style={styles.header}>
            <Text style={styles.title}>Txn. Id</Text>
          </View>
          <TouchableIcon onPress={() => close()} style={styles.icon}>
            <Icon name="close-circle-outline" size={24} />
          </TouchableIcon>
        </HView>
      </View>
      <View>
        <HView style={styles.userHolder}>
          <View style={styles.spView}>
            <SpecialText value={':Paid to:'} type={1} />
          </View>
          <View style={styles.username}>
            <Text style={styles.user}>Manish</Text>
          </View>
        </HView>
        <View style={styles.moneyView}>
          <Text style={styles.moneyText}>$ 78</Text>
        </View>
        <View style={styles.orderView}>
          <Text>:For order: xyz</Text>
        </View>
        <HView style={styles.holder}>
          <HView style={styles.view1}>
            <Text style={styles.text1}>:Txn. status:</Text>
            <Text style={styles.text2}>xxxxx</Text>
          </HView>
          <HView style={styles.view2}>
            <Text style={styles.text1}>:Time:</Text>
            <Text style={styles.text2}>:12:00 Pm</Text>
          </HView>
        </HView>
      </View>
    </Animated.View>
  );
};
export default TransactionPopup;
