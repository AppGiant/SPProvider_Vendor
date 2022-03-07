import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(0),
    marginBottom: H(40),
    marginTop: H(40),
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.h6,
    fontWeight: 'bold',
    marginStart: W(20),
    marginVertical: H(10),
  },
  phoneTitle: {
    ...ApplicationStyles.screen.subHeadText,
    marginStart: W(10),
  },
  container: {
    paddingHorizontal: W(16),
    marginTop: H(10),
  },
  hView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: W(16),
  },
  linkText: {
    // alignSelf: 'center',
    fontSize: Fonts.size.small,
    alignSelf: 'flex-start',
    marginEnd: W(10),
  },
  btnHolder: {
    marginTop: H(10),
    // paddingHorizontal: W(6),
    paddingVertical: H(10),
    justifyContent: 'space-between',
    marginBottom: H(40),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.WHITE,
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    marginBottom: H(10),
    backgroundColor: colors.PRIMARY,
    //marginHorizontal:W(10),
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h8,
    color: colors.PRIMARY,
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h8,
  },
});
export default styles;
