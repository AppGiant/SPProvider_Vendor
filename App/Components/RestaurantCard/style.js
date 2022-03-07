import React from 'react';
import {I18nManager, StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
    
  cardContainer: {
    borderRadius: 10,
   marginBottom: H(10),
    elevation:4,
   
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.22,
shadowRadius: 3.22,

elevation: 3,
  },
  imageContainer: {
    //width: W(400),
    height: H(148),
    padding: 0,
  },
  imageStyle: {
    borderTopLeftRadius: H(25),
    borderTopRightRadius: H(25),
  },
  imageTag: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: H(25),
    borderBottomRightRadius: H(25),
    backgroundColor: color.PRIMARY,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
  },
  tagText: {
    color: Colors.white,
    fontSize: Fonts.size.h4,
  },
  tagIcon:{
      alignSelf:"center",
      color:Colors.white,
      marginRight:W(5)
  },
  headText:{
      fontWeight:"bold",
      color:Colors.lightText,
      fontSize:Fonts.size.h2
  },
  detailContainer:
  {
      padding:W(10),
      paddingBottom:W(30),
      borderRadius:W(25)
  },
  priceLabel:
  {
      alignSelf:"center",
     flex:1,
     textAlign:"right",
     color:Colors.lightText
  },
  price:
  {
      alignSelf:"center",
    color:color.PRIMARY,
    fontWeight:"bold",
  },
  subtitle:{
 
     fontSize:Fonts.size.h5,
     color:Colors.lightText,
     alignSelf:"flex-start"

  }
});
export default style;
