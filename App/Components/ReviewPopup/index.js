import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableIcon from '../TouchableIcon';
import { Animated } from 'react-native';
import SpecialText from '../SpecialTextLabel';
import { Image } from 'react-native';
import Button from '../../Components/CustomButton';
import InputComponent from '../InputComponent';
import { Colors } from '../../Themes';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Toast from 'react-native-simple-toast';

const ReviewPopup = ({
  handleFilter,
  postReview,
  storeName,
  orderTime,
  serviceName,
}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  const onSubmitReview = () => {
    console.log('rating => ' + rating);
    if (text.length >= 3) {
      postReview(rating, text);
    } else {
      Toast.showWithGravity(
        'Please add atleast 3 characters in review',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    }
  };

  const [state, setState] = useState({
    x: new Animated.Value(0),
    y: new Animated.Value(1),
    visible: false,
  });
  useEffect(() => {
    state.x.addListener(({ value }) => {
      if (value == 1) setState({ ...state, ['visible']: true });
      //console.log("x ", value)
    });
    state.y.addListener(({ value }) => {
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
              <Text style={styles.title}>Review</Text>
            </View>
            <TouchableIcon onPress={() => close()} style={styles.icon}>
              <Icon name="close-circle-outline" size={24} />
            </TouchableIcon>
          </HView>
        </View>
        <ScrollView>
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
          <View>
            <Text style={styles.headText}>Rating</Text>
            <Rating
              // showRating
              ratingCount={5}
              onFinishRating={(r) => setRating(r)}
              style={{ paddingVertical: 10 }}
            />
          </View>
          <InputComponent
            style={styles.input}
            label="Review*"
            value={text}
            onChangeText={(val) => setText(val)}
          />

          <HView style={styles.btnHolder}>
            <Button
              title="Submit"
              containerStyle={styles.btn1}
              titleStyle={styles.buttonTitle1}
              onPress={() => onSubmitReview()}
            />
            <Button
              title="Cancel"
              containerStyle={styles.btn2}
              titleStyle={styles.buttonTitle2}
              onPress={() => close()}
            />
          </HView>
        </View>
      </ScrollView>
    </Animated.View>
  );
};
export default ReviewPopup;
