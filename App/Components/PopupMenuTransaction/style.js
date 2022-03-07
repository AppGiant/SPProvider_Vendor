import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginHorizontal: W(10),
    paddingVertical: H(8),
    paddingHorizontal: W(8),
    borderWidth: 1,
  },
  textBg: {
    backgroundColor: 'transparent',
    paddingHorizontal: W(10),
  },
});
export default styles;
