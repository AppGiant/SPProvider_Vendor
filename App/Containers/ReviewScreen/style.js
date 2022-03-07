import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    backgroundColor: colors.PRIMARY,
    paddingVertical: H(40),
  },
  container1: {
    flex: 1,
  },
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  circle: {
    width: W(80),
    height: W(80),
    borderRadius: W(80) / 2,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // marginStart: W(20),
  },
  circleView: {
    width: W(80),
    height: W(80),
    borderRadius: W(80) / 2,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: W(20),
    backgroundColor: 'transparent',
  },
  textHolder: {
    backgroundColor: 'transparent',
    marginStart: W(20),
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text1: {
    fontSize: Fonts.size.h4,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  text2: {
    fontSize: Fonts.size.h4,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  tagIcon: {
    alignSelf: 'center',
    color: colors.Yellow
 
  },
  starsHolder: {
    backgroundColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  rightSideSmallText: {
    color: colors.white,
    paddingHorizontal: W(10),
    fontWeight: 'bold',
  },
  text2: {
    color: colors.white,
    alignSelf: 'flex-start',
  },
  filtersContainer: {
    alignItems: 'center',
    marginBottom: H(10),
    marginHorizontal: W(10),
  },
  filterExtra: {
    color: colors.PRIMARY,
    marginEnd: W(7),
  },
  filterIconContainer: {
    
    borderRadius: 5,
  },
  filtersItemContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  scroll: {
    marginHorizontal: W(10),
    marginVertical: H(10),
  },
  btnHolder: {
    marginVertical: H(8),
    paddingHorizontal: W(8),
    paddingVertical: H(8),
    justifyContent: 'space-around',
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    borderBottomWidth: 3,
    borderBottomColor: colors.PRIMARY,
    // marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.white,
  },
  buttonTitle1: {
    // fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    color: colors.PRIMARY,
  },
  buttonTitleLite: {
    // fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    color: colors.BLUE_GREY,
  },
  btnLite: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    borderBottomWidth: 3,
    borderBottomColor: colors.BLUE_GREY,
    // marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  failedText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default styles;
