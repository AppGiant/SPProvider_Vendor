import React from 'react';
import Text from '../TextI';
import {TouchableOpacity, View} from '../StyledComponents';
import HView from '../HView';
import {ImageBackground} from 'react-native';
import TextBetweenLine from '../TextBetweenLine';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBoxInput from '../CheckBoxInput';
import color from '../../Constants/color';
import { Colors } from '../../Themes';
const RestaurantCard = ({tag}) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.cardContainer}>
      <ImageBackground
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}
        source={require('../../Images/hotel.jpeg')}>
        <HView style={styles.imageTag}>
          <Icon size={18} style={styles.tagIcon} name="star"></Icon>
          <Text style={styles.tagText}>{tag}</Text>
        </HView>
      </ImageBackground>
      <View style={styles.detailContainer}>
        <HView>
          <Text style={styles.headText}>Hanan's</Text>
          <Text style={styles.priceLabel}>Starting From </Text>
          <Text style={styles.price}> $49</Text>
        </HView>
        <Text style={styles.subtitle}>Jeddadh Nazlah Dist</Text>
        <TextBetweenLine />
        <CheckBoxInput color={Colors.lightText} midText="Home Made" endText="From $49"  />
        <TextBetweenLine />
        <CheckBoxInput checked  color={color.PRIMARY} midText="Home Made" endText="From $49"  />
        <TextBetweenLine />
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
