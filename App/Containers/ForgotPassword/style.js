import {StyleSheet} from "react-native"
import { ApplicationStyles } from "../../Themes";
import { W,H } from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({
    container:{
    paddingTop:W(10),
   
    marginHorizontal:W(10) 
},
buttonContainerFullWidth:{
    paddingVertical: H(4),
    borderRadius: 5,
    marginBottom: H(10),
    marginHorizontal:W(10)
  },
  
  ...ApplicationStyles.button,
  customCard:{
    ...ApplicationStyles.customCard
  }
})
export default styles;