import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  card: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(0),
    // paddingVertical: H(0),
    marginTop: H(40),
  },
  headView: {
    alignItems: 'center',
    paddingBottom: H(10),
    paddingHorizontal: W(10),
  },
  text: {
    alignSelf: 'flex-start',
    marginVertical: H(10),
    marginStart: W(10),
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
  },
  avlText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingHorizontal: W(10),
    marginStart: W(10),
    color: colors.charcoal,
  },
  usdHolder: {
    justifyContent: 'space-between',
    marginHorizontal: W(20),
    paddingVertical: H(10),
  },
  usdText: {
    color: colors.PRIMARY,
  },
  containerHView: {
    backgroundColor: 'transparent',
  },
  sarHolder: {
    justifyContent: 'space-between',
    paddingVertical: H(10),
    backgroundColor: colors.LITE_GRAY,
    // marginHorizontal: W(20),
    paddingHorizontal: W(20),
  },
  dropdown: {
    marginHorizontal: W(20),
    paddingVertical: H(10),
    zIndex: 2000,
  },
  inputContainer: {
    marginHorizontal: W(20),
    paddingTop: H(10),
  },
  amtText: {
    alignSelf: 'flex-start',
    color: colors.charcoal,
    fontWeight: 'bold',
    paddingHorizontal: W(10),
  },
  btn: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    marginBottom: H(20),
    backgroundColor: colors.PRIMARY,
    marginHorizontal: W(20),
    marginTop: H(20),
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
  },
  balanceView: {
    marginHorizontal: W(10),
    paddingHorizontal: W(10),
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 10,
    alignSelf: 'center',
    paddingHorizontal: W(4),
    color: colors.lightText,
  },
  smallText1: {
    fontSize: 10,
    alignSelf: 'center',
    paddingHorizontal: W(4),
    color: colors.PRIMARY,
  },
  bottomTxt: {
    marginTop: H(10),
    marginBottom: H(20),
  },
  headText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginStart: W(20),
  },
  bankHolder: {
    justifyContent: 'space-around',
    marginTop: H(20),
  },
  bankText: {
    alignSelf: 'flex-start',
    color: colors.lightText,
    paddingVertical: H(10),
  },
  bankText1: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  cardNo: {
    alignSelf: 'flex-start',
    marginTop: H(20),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    backgroundColor: colors.WHITE,
    // marginHorizontal: W(20),
    // marginTop: H(20),
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    marginBottom: H(10),
    backgroundColor: colors.PRIMARY,
    // marginHorizontal: W(20),
    // marginTop: H(20),
  },
  btnHolder: {
    justifyContent: 'space-around',
    marginHorizontal: W(20),
    marginVertical: H(40),
  },
  buttonTitle1: {
    // fontWeight: 'bold',
    fontSize: Fonts.size.small,
    color: colors.PRIMARY,
  },
  buttonTitle2: {
    // fontWeight: 'bold',
    fontSize: Fonts.size.small,
  },
  addText: {
    alignSelf: 'flex-start',
    marginStart: W(20),
    color: colors.PRIMARY,
    borderBottomColor: colors.PRIMARY,
    borderBottomWidth: 1,
    marginTop: H(40),
    marginBottom: H(20),
    fontWeight: 'bold',
  },
});
export default styles;
