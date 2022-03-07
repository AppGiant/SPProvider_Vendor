import {StyleSheet,Platform} from "react-native"
import color from "../../Constants/color";
import { Fonts } from "../../Themes";
import { H,W } from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({
    phoneContainer:{
        marginTop:10,
      paddingStart:10,
      borderColor: color.BORDER,
      borderWidth: 1,
      borderRadius:4,
      //height:H(80),
     // marginHorizontal:W(10),
      marginBottom:H(30),
     
      },
      textContainerStyle:{
     //   flex:1,
     ...Platform.select({
      android: {
        paddingTop:0,
      },
      ios: {
        paddingTop:W(10),
      },
    }),
       
        marginTop:W(14),
        justifyContent:"center",  
        fontSize:Fonts.size.h7,
        //paddingBottom:10, 
      backgroundColor:color.WHITE
      },
})
export default styles;