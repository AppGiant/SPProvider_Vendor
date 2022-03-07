import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    marginHorizontal: W(20),
    borderWidth: 1,
  },
  text: {
    alignSelf: 'center',
  },
});
export default styles;
