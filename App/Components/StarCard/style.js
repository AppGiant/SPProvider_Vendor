import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  starContainer: {
    backgroundColor: colors.liteYellow,
    borderRadius: 15,
    paddingVertical: H(2),
    paddingHorizontal: W(8),
    alignItems: 'center',
    marginEnd: W(15),
    alignSelf: 'baseline',
    borderWidth: 1,
    marginBottom: H(10)
  },
  tagIcon: {
    alignSelf: 'center',
    color: colors.Yellow,
    marginHorizontal: W(4),
  },
  starText: {
    color: colors.Yellow,
  },
});
export default styles;
