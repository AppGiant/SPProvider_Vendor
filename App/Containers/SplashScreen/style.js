import {StyleSheet} from "react-native"
import color from "../../Constants/color";
import { W,H } from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:color.WHITE,
    justifyContent:"center"
},
image:{
  alignSelf:"center",
  width:W(300),
 height:H(300),
 // flex:1
}
})
export default styles;