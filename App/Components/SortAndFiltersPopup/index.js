import React, {useState} from 'react';
import {View, TouchableOpacity} from '../StyledComponents';
import Text from '../TextI';
import HView from '../HView';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextBetweenLine from '../TextBetweenLine';
import color from '../../Constants/color';
import TouchableIcon from '../TouchableIcon';
import {Animated} from 'react-native';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import {useEffect} from 'react';
const SortAndFiltersPopUp = ({handleFilter}) => {
  const filters = [
    {name: 'Business Type', id: 1},
    {name: 'Rating', id: 2},
    {name: 'Demography', id: 3},
    {name: 'Date & Time', id: 4},
    {name: 'Price', id: 5},
    {name: 'Categories', id: 6},
  ];
  const [currentFilter, setCurrentFilter] = useState(1);
  const [state, setState] = useState({
    x: new Animated.Value(0),
    y: new Animated.Value(1),
    visible: false,
  });
  useEffect(() => {
    // console.log("OKKKK")
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
      console.log('CHALA');
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
      <HView style={styles.header}>
        <Text style={styles.headText}>Sort & Filters</Text>
        <TouchableIcon onPress={() => close()}>
          <Icon
            size={25}
            name="close-circle-outline"
            color={color.WHITE}></Icon>
        </TouchableIcon>
      </HView>
      <TextBetweenLine />
      <HView style={styles.filtersContainer}>
        <View style={styles.grayBox}>
          {filters.map((it, key) => (
            <TouchableOpacity
              onPress={() => setCurrentFilter(it.id)}
              key={key}
              style={
                currentFilter == it.id
                  ? styles.selectedFilterTextContainer
                  : styles.filterTextContainer
              }>
              <Text style={styles.lightText}>{it.name}</Text>
              {currentFilter == it.id && (
                <Icon name="chevron-right" size={25} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.whiteBox}>
          <HView>
            <CheckBox
              checkedColor={color.PRIMARY}
              // checked={values.receiveEmail}
              //  onPress={() =>
              //  setFieldValue('receiveEmail', !values.receiveEmail)
              //}
            />
            <Text style={styles.linkText}>Business</Text>
          </HView>
        </View>
      </HView>
    </Animated.View>
  );
};
export default SortAndFiltersPopUp;
