import React from 'react';
import styles from './style'
import {View} from '../StyledComponents';
import TextBetweenLine from '../TextBetweenLine';
import Text from "../TextI"
import HView from '../HView';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { W } from '../../utils/DimensionCalculator';

const SubscriptionCard = ({items, title, subtitle, planName, planSubtitle,style}) => {
  
  return <View style={[styles.cardContainer,style]}>
  <Text style={styles.headText}>{title?title:""}</Text>
  <Text style={styles.subText}>{subtitle?subtitle:""}</Text>
<TextBetweenLine/>
<Text style={styles.headText}>{planName?planName:""}</Text>
<Text style={styles.headLightText}>{planSubtitle?planSubtitle:""}</Text>
 {
     items.map((it,i)=>{
         return(
         <HView key={i} style={{flexWrap: "wrap",height:it.value.length>10?W(100):W(40)}} >
             <Text style={styles.lightText}>{it.title}</Text>
             <Icon size={20} style={styles.icon} name={it.check?"check":"close"}></Icon>
             <View style={styles.leftTextContainer}>
             <Text  style={styles.leftText}>{it.value}</Text>
             </View>
         </HView>)
     })
 }
  </View>;
};
export default SubscriptionCard;
