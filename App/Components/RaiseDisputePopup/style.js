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
  container1: {
    paddingVertical: H(10),
    // paddingHorizontal: W(10),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  userHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: H(10),
    backgroundColor: 'transparent',
  },
  spView: {
    paddingHorizontal: W(10),
    backgroundColor: 'transparent',
  },
  username: {
    paddingHorizontal: W(10),
    backgroundColor: 'transparent',
  },
  icon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    // position: 'absolute',
    marginTop: H(10),
    marginEnd: W(10),
    color: colors.white,
  },
  moneyText: {
    fontSize: Fonts.size.h1,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  moneyView: {
    paddingTop: H(10),
    backgroundColor: 'transparent',
  },
  holder: {
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    paddingTop: H(10),
  },
  view1: {
    // backgroundColor: 'red',
    paddingHorizontal: W(10),
    backgroundColor: 'transparent',
  },
  view2: {
    // backgroundColor: 'yellow',
    paddingHorizontal: W(10),
    backgroundColor: 'transparent',
  },
  text1: {
    alignSelf: 'center',
    // fontSize: Fonts.size.medium,
    // color: colors.lightText,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  text2: {
    alignSelf: 'center',
    fontSize: Fonts.size.small,
    // color: colors.lightText,
    backgroundColor: 'transparent',
  },
  user: {
    fontSize: Fonts.size.h6,
    backgroundColor: 'transparent',
    // fontWeight: 'bold',
  },
  user1: {
    fontSize: Fonts.size.h6,
    backgroundColor: 'transparent',
    // fontWeight: 'bold',
  },
  orderView: {
    marginBottom: H(10),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
  container2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    paddingBottom: H(10),
  },
  statusText: {
    // fontSize: Fonts.size.h6,
    marginTop: H(10),
    fontWeight: 'bold',
  },
  inputView: {
    marginHorizontal: W(10),
  },
  input: {
    height: H(100),
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: H(20),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(16),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.PRIMARY,
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    color: colors.white,
  },
});

export default styles;
