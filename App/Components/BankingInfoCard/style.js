import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    // marginStart: W(10),
  },
  header: {
    paddingHorizontal: W(20),
    paddingVertical: H(10),
    justifyContent: 'space-between',
  },
  container: {
    paddingVertical: H(10),
    alignItems: 'flex-start',
    paddingHorizontal: W(10),
  },
  text1: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginStart: W(10),
  },
  text2: {
    alignSelf: 'flex-start',
    marginStart: W(10),
    fontSize: Fonts.size.small,
    paddingTop: H(6),
  },
  space: {
    marginTop: H(30),
  },
  holder: {
    paddingHorizontal: W(10),
    paddingVertical: H(10),
  },
  billText: {
    marginStart: W(10),
    color: colors.PRIMARY,
    fontSize: Fonts.size.small,
  },
  dateText: {
    marginStart: W(6),
    color: colors.LIME_GREEN,
    fontSize: Fonts.size.small,
  },
});
export default styles;
