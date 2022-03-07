import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    marginVertical: H(40),
    alignSelf: 'flex-start',
    marginStart: W(20),
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    marginTop: H(0),
    paddingTop: H(0),
    paddingHorizontal: W(10),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    color: colors.PRIMARY,
    fontSize: Fonts.size.h6,
    marginHorizontal: W(10),
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: H(10),
  },
  btn: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.PRIMARY,
    borderColor: colors.PRIMARY,
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    color: colors.white,
  },
  input: {
    marginHorizontal: W(10),
  },
  greenCard: {
    ...ApplicationStyles.customCard,
    backgroundColor: colors.LITE_GREEN,
    marginVertical: H(40),
    borderColor: colors.LIME_GREEN,
    borderWidth: 1,
    marginHorizontal: W(20),
  },
  greenText: {
    color: colors.LIME_GREEN,
  },
  text: {
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
  },
  container2: {
    paddingHorizontal: W(20),
    marginTop: H(30),
  },
  simpleText: {
    fontSize: Fonts.size.h7,
    marginStart: W(10),
  },
  bigGreenText: {
    color: colors.LIME_GREEN,
    fontWeight: 'bold',
    fontSize: Fonts.size.h4,
    alignSelf: 'flex-start',
  },
  container3: {
    paddingHorizontal: W(20),
    marginTop: H(10),
  },
  smallGreenText: {
    color: colors.LIME_GREEN,
    fontSize: Fonts.size.h8,
    alignSelf: 'flex-start',
    marginTop: H(5),
  },
  smallText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: H(30),
  },
  normalText: {
    alignSelf: 'flex-start',
    marginTop: H(10),
  },
  input2: {
    marginHorizontal: W(1),
  },
  inputView: {
    marginTop: H(20),
    marginHorizontal: W(10),
  },
  btnHolder: {
    // marginVertical: H(10),
    paddingHorizontal: W(10),
    // paddingVertical: H(10),
    justifyContent: 'space-around',
    marginBottom: H(50),
    // marginTop: H(20),
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
    fontSize: Fonts.size.h7,
    color: colors.PRIMARY,
    paddingHorizontal: W(10),
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    paddingHorizontal: W(10),
  },
  cardsContainer: {
    marginBottom: H(40),
  },
  roundCard2: {
    ...ApplicationStyles.customCard,
    marginTop: H(10),
    paddingTop: H(0),
    paddingHorizontal: W(10),
  },
});
export default styles;
