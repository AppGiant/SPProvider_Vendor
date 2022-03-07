import React from 'react';
import {I18nManager, StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  cardContainer: {
    margin: H(20),
  },
  headText:{
      fontWeight:"bold",
      color:Colors.lightText,
      fontSize:Fonts.size.h4,
      alignSelf:"flex-start",
      alignItems:"center",
      justifyContent:"center"
  },
  image:{
      alignSelf:"center",
      marginEnd:W(10),
      width:W(70),
      height:W(70),
     
  },
  tagIcon:{
    alignSelf:"center",
    color:Colors.Yellow,
    marginRight:W(5)
},
});
export default style;
