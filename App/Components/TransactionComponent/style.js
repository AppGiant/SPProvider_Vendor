import {StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';
const styles = StyleSheet.create({
  view1: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  view2: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginStart: W(10),
  },
  view3: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  view4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  transaction: {
    ...Fonts.style.description,
    alignSelf: 'flex-start',
    marginStart: W(8),
  },

  popup1: {
    backgroundColor: color.LITE_GRAY,
    position: 'absolute',
    marginTop: H(10),
    zIndex: 100,
    right: W(10),
  },
  popup: {
    backgroundColor: color.WHITE,
    position: 'absolute',
    marginTop: H(10),
    right: W(10),
  },
  ...ApplicationStyles.screen,
  container: {
    alignItems: 'center',
    paddingVertical: H(8),
  },
  container1: {
    alignItems: 'center',
    paddingVertical: H(8),
    backgroundColor: color.LITE_GRAY,
  },
  lightText: {
    ...Fonts.style.description,
    marginStart: W(4),
  },
});

export default styles;
