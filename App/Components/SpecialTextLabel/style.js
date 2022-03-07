import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  liteRedBg: {
    backgroundColor: colors.liteRed,
    borderRadius: 8,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    alignItems: 'center',
  },
  btnContainer: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    alignItems: 'center',
    marginBottom: H(10),
  },
  liteYellowBg: {
    backgroundColor: colors.liteYellow,
    borderRadius: 8,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBg: {
    backgroundColor: '#90ee90',
    borderRadius: 8,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    // fontSize: Fonts.size.h6,
    color: colors.lightText,
  },
});
export default styles;
