import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import { H ,W} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  textInput: {
    color: Colors.lightText,
    borderColor: Colors.text,
    borderWidth: 1,
    marginVertical:H(10),
    borderRadius:W(15),
    height:H(100),
    padding:H(10),
    justifyContent:"flex-start"
  },
});
export default style;
