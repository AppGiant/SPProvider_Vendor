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

const DiscardPopup = ({handleFilter, storeName, orderTime, serviceName, discardReview}) => {

  const onDisCardReview = () => {
    discardReview(close);
  }

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
            <Text style={styles.title}>Discard Review</Text>
          </View>
          <TouchableIcon onPress={() => close()} style={styles.icon}>
            <Icon name="close-circle-outline" size={24} />
          </TouchableIcon>
        </HView>
      </View>
      <View style={styles.roundCard}>
        <HView style={styles.container1}>
          <Image
            style={styles.circleImage}
            source={require('../../Images/hotel.jpeg')}
          />
          <View style={styles.textholder}>
            <Text style={styles.headText}>{storeName}</Text>
            <Text style={styles.subText}>{serviceName}</Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>{orderTime}</Text>
          </View>
        </HView>
        {/* <InputComponent style={styles.input} label="Discard Review" /> */}
        <Text style={styles.discardText}>
          In case you discard and don't provide review for this service, your
          review from this service won't be displayed on your profile
        </Text>
        <HView style={styles.btnHolder}>
          {/* <Button
            title="Review"
            containerStyle={styles.btn1}
            titleStyle={styles.buttonTitle1}
            onPress={() => console.log('click')}
            disabled
          /> */}
          <Button
            title="Discard"
            containerStyle={styles.btn2}
            titleStyle={styles.buttonTitle2}
            onPress={() => onDisCardReview()}
          />
        </HView>
      </View>
    </Animated.View>
  );
};
export default DiscardPopup;
