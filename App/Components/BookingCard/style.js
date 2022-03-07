import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
  },
  dotIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginVertical: W(10),
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
  },
  rightSideText: {
    ...Fonts.style.normal,
    alignSelf: 'flex-start',
  },
  containerH: {
    // alignItems: 'center',
    // paddingHorizontal: W(10),
    paddingVertical: H(10),
  },
  addressText: {
    ...Fonts.style.normal,
    width: W(100),
    alignSelf: 'flex-start',
  },
  rightSideSmallText: {
    ...Fonts.style.description,
    alignSelf: 'flex-start',
  },
});
export default styles;
