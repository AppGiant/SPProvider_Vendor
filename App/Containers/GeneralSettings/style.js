import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: W(12),
    paddingVertical: H(10),
    zIndex: 1000,
  },
  text: {
    alignSelf: 'flex-start',
    paddingTop: H(10),
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
    color: Colors.lightText,
    paddingStart: W(8),
  },
  dropdown: {
    zIndex: 1000,
    borderColor: Colors.BLUE_GREY,
  },
  dropdown1: {
    zIndex: 0,
    borderColor: Colors.BLUE_GREY,
  },
  hView: {
    justifyContent: 'flex-start',
    marginTop: H(10),
    // marginStart: W(-15),
    alignItems: 'center',
  },
  checkBox: {
    alignSelf: 'center',
  },
  container2: {
    justifyContent: 'space-between',
    paddingHorizontal: W(8),
    marginTop: H(40),
    marginBottom: W(20),
  },
  btn: {
    paddingVertical: H(2),
    borderRadius: 5,
    backgroundColor: Colors.PRIMARY,
    // paddingHorizontal: W(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    flex: 1,
    marginStart: W(20),
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: Fonts.size.normal,
    color: Colors.white,
    paddingHorizontal: W(8),
  },
  btn1: {
    paddingVertical: H(2),
    borderRadius: 5,
    backgroundColor: Colors.white,
    // paddingHorizontal: W(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    flex: 1,
    marginEnd: W(20),
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.normal,
    color: Colors.PRIMARY,
    paddingHorizontal: W(8),
  },
});
export default styles;
