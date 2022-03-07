import { StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {Colors, Fonts} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  otpContainer: {
   
   paddingStart:W(10),
   paddingVertical:H(5)
  },
  numberInput:{
      flex:1,
  
  },
  textInput:{
    marginTop:10,
    
    textAlign:"center",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
  }
});
export default style;
