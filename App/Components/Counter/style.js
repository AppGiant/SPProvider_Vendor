import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  round: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.BLUE_GREY,
    paddingHorizontal: W(10),
    paddingVertical: H(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: H(55),
  },
  iconUp: {
    marginBottom: H(-15),
    color: colors.BLUE_GREY,
  },
  iconDown: {
    color: colors.BLUE_GREY,
  },
  iconsContainer: {
    paddingStart: W(10),
  },
  text: {
    paddingStart: W(10),
    paddingEnd: W(18),
    fontSize: Fonts.size.normal,
    color: colors.black,
  },
});
export default styles;
