import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';
import colors from '../../Constants/color';
import {W} from '../../utils/DimensionCalculator';
const styles = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: Colors.darkText,
  },

  underlineStyleBase: {
      
    borderColor: Colors.lightText,
    borderRadius: W(8),
    
    color:Colors.lightText
  },

  underlineStyleHighLighted: {
    borderColor: colors.PRIMARY,
  },
});
export default styles;
