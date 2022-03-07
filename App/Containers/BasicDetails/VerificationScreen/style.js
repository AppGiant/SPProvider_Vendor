import {StyleSheet} from "react-native"
import { ApplicationStyles, Fonts } from "../../../Themes"
import { H, W } from "../../../utils/DimensionCalculator"
const styles=StyleSheet.create({
    container: {flex: 1, marginBottom: H(20)},
    headText:
{
fontWeight:"bold",
fontSize:Fonts.size.h4,
marginBottom:H(20)
},
subText:{
    marginTop:H(10),
    textAlign:"center"
},
error:{fontSize:12,color:'red',alignSelf:'flex-start',marginStart:W(15),marginTop:H(2),marginBottom:H(10)},
...ApplicationStyles.button
})
export default styles;