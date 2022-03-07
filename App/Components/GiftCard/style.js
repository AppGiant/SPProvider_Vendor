import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    // paddingStart: W(10),
  },
  headContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: W(10),
    alignItems: 'center',
    marginHorizontal: W(10),
    paddingVertical: H(10),
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  subTitle: {
    color: colors.BLUE_GREY,
    alignSelf: 'flex-start',
  },
  image: {
    alignItems: 'center',
  },
  headText: {
    marginStart: W(10),
  },
  descHeadText: {
    alignSelf: 'flex-start',
    paddingHorizontal: W(20),
    fontWeight: 'bold',
    paddingVertical: H(10),
  },
  descText: {
    alignSelf: 'flex-start',
    paddingHorizontal: W(20),
    paddingBottom: H(10),
  },
  leftTextHead: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingVertical: H(10),
  },
  leftText1: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
  leftText2: {
    alignSelf: 'flex-start',
    paddingBottom: H(10),
  },
  validContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: W(20),
    alignItems: 'center',
  },
  rightHeadText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingBottom: H(10),
  },
  rightText1: {
    alignSelf: 'flex-start',
  },
  rightText2: {
    alignSelf: 'flex-start',
    paddingBottom: H(10),
  },
  leftTextPrice: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: colors.PRIMARY,
    paddingBottom: H(10),
  },
  text: {
    alignSelf: 'flex-start',
    paddingVertical: H(10),
    fontSize: Fonts.size.h8,
    marginEnd: W(20),
  },
  toggleView: {
    justifyContent: 'flex-start',
    marginStart: W(20),
  },
  inactive: {
    justifyContent: 'flex-start',
    marginStart: W(20),
    alignItems: 'center',
  },
  inactiveText: {
    color: colors.error,
    alignSelf: 'flex-start',
    paddingVertical: H(10),
    fontSize: Fonts.size.h8,
    marginStart: W(8),
  },
  menu: {},
});
export default styles;
