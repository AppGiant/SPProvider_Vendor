import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/DimensionCalculator';
import color from '../../Constants/color';
import { Platform } from 'react-native';
const styles = StyleSheet.create({
  searchContainerStyle: {
    borderColor: color.BORDER,
    alignSelf: 'center',
    height:Platform.OS=='android'?H(50):H(45),
  },
  containerStyle: {marginVertical: H(15), alignSelf: 'center'},
});
export default styles;
