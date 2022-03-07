import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    // marginHorizontal: W(20),
    zIndex: 1000,
    backgroundColor: colors.PRIMARY,
    borderTopLeftRadius: W(20),
    borderTopRightRadius: W(20),
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    backgroundColor: colors.white,
    marginHorizontal: W(0),
    marginBottom: H(0),
    borderRadius: 0,
  },

  btnHolder: {
    marginTop: H(20),
    // paddingHorizontal: W(10),
    // paddingVertical: H(10),
    justifyContent: 'space-around',
    marginHorizontal: W(10),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.white,
    minWidth: W(100),
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
    paddingHorizontal: W(16),
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    paddingHorizontal: W(16),
  },
  containerHeader: {
    paddingVertical: H(10),
    // paddingHorizontal: W(10),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  containerSubHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // paddingVertical: H(10),
    // paddingHorizontal: W(10),
  },
  header: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    alignSelf: 'center',
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    marginStart: W(18),
    backgroundColor: 'transparent',
    color: colors.white,
  },
  icon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    // position: 'absolute',
    marginTop: H(10),
    marginEnd: W(10),
    color: colors.white,
  },
  sampleText: {
    fontSize: Fonts.size.h6,
    paddingVertical: H(50),
  },
});
export default styles;
