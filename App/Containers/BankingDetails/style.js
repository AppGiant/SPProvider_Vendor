import {StyleSheet} from "react-native"
import color from "../../Constants/color";
import Colors from "../../Constants/color"
import { ApplicationStyles, Fonts } from '../../Themes';
import { H, W } from "../../utils/DimensionCalculator"
const styles=StyleSheet.create({
    container:{
        paddingHorizontal:W(10),
     
    },
    linkText:
  {
    fontSize:Fonts.size.h8,marginStart:-W(15),alignSelf:"center"
  },
  hView:{
      marginTop:-W(15)
  },
  ...ApplicationStyles.button,
  footerText:{
      paddingTop:H(20),
      textAlign:"center",
      paddingHorizontal:W(30),
      fontSize:Fonts.size.h8,
      paddingBottom:H(20)
  },
  inputContainerStyle:{
    marginTop:10,
  paddingStart:10,
  borderColor: color.BORDER,
  borderWidth: 1,
  borderRadius:4,
  height:H(55),
  width:W(150)
},
headText:
{
fontWeight:"bold",
fontSize:Fonts.size.h6,
marginBottom:H(20)
},
...ApplicationStyles.screen
 })
export default styles;