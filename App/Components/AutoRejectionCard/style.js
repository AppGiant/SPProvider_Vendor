import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingTop: H(25),
    paddingHorizontal: W(0),
    paddingStart: W(5),
  },
  dotIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingEnd: W(6),
    paddingTop: H(10),
  },
  leftSideView: {
    flex: 2,
    backgroundColor: 'transparent',
  },
  rightSideView: {
    flex: 4,
    backgroundColor: 'transparent',
    marginStart: W(10),
  },
  leftSideText: {
    ...Fonts.style.description,
    alignSelf: 'flex-start',
    paddingStart: W(5),
    fontWeight: 'bold',
  },
  rightSideText: {
    ...Fonts.style.description,
    alignSelf: 'flex-start',
  },
  containerH: {
    // alignItems: 'center',
    paddingHorizontal: W(10),
    paddingBottom: H(20),
    backgroundColor: 'transparent',
  },
  addressText: {
    ...Fonts.style.normal,
    width: W(100),
    alignSelf: 'flex-start',
  },
  rightSideSmallText: {
    // ...Fonts.size.small,
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  line: {
    width: '100%',
    backgroundColor: colors.steel,
    height: H(1),
    marginVertical: H(10),
  },
  btnHolder: {
    paddingHorizontal: W(20),
    paddingVertical: H(10),
    justifyContent: 'space-around',
  },
  view1: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  view2: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text1: {
    paddingStart: W(10),
  },
  text2: {
    paddingStart: W(10),
  },
  skyblueText: {
    color: colors.PRIMARY,
    ...Fonts.style.description,
    alignSelf: 'flex-start',
  },
  tagIcon: {
    alignSelf: 'center',
    color: colors.Yellow,
  },
  iconsContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: W(10),
    backgroundColor: 'transparent',
  },
  redText: {
    color: colors.error,
    paddingStart: W(10),
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  normalText: {
    paddingStart: W(10),
    // marginStart: W(10),
  },
  iconHolder: {
    marginEnd: W(30),
    flex: 1,
  },
  tagIcon: {
    alignSelf: 'center',
    color: colors.Yellow,
  },
});

export default styles;
