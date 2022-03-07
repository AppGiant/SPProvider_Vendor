import {I18nManager, StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {W, H} from '../../utils/DimensionCalculator';
const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(5),
    // paddingVertical: H(10),
  },
  headText: {
    fontWeight: 'bold',
    color: Colors.lightText,
    fontSize: Fonts.size.h6,
    alignSelf: 'flex-start',
  },
  image: {
    marginEnd: W(10),
    width: W(70),
    height: W(70),
    borderRadius: W(35),
    backgroundColor: 'transparent',
  },

  container: {
    alignItems: 'center',
    // marginStart: W(20),
    flex: 1,
    paddingHorizontal: W(15),
  },
  textContainer: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  serviceContainer: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingEnd: W(10),
    flex: 1,
  },
  text1: {
    alignSelf: 'flex-start',
    flex: 1.5,
  },
  text2: {
    alignSelf: 'flex-start',
    // flex: 1.5,
  },
  emptyView: {
    flex: 1,
  },
  btnHolder: {
    marginTop: H(25),
    // paddingHorizontal: W(10),
    // paddingVertical: H(10),
    justifyContent: 'space-between',
    marginHorizontal: W(20),
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
    paddingHorizontal: W(16),
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    paddingHorizontal: W(16),
  },
});
export default styles;
