import {StyleSheet} from "react-native"
import Colors from "../../../Constants/color"
import { ApplicationStyles, Fonts } from "../../../Themes";
import { H, W } from "../../../utils/DimensionCalculator"
const styles=StyleSheet.create({
    container:{
        paddingHorizontal:W(10),
        
    },
    linkText:
  {
    fontSize:Fonts.size.h8,marginStart:-W(15),alignSelf:"center"
  },
  hView:{
     
  },
  ...ApplicationStyles.button,
  footerText:{
      paddingTop:H(20),
      textAlign:"center",
      paddingHorizontal:W(30),
      fontSize:Fonts.size.h8,
      paddingBottom:H(20)
  }, headText:
  {
  fontWeight:"bold",
  fontSize:Fonts.size.h4,
  marginBottom:H(20)
  },
  error:{fontSize:12,color:'red',alignSelf:'flex-start',marginStart:W(15),marginTop:H(-20),marginBottom:H(10)},
  inputHeaderTitle:{...ApplicationStyles.screen.inputHeaderTitle}
})
export default styles;