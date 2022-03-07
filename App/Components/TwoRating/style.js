import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    // marginStart: W(10),
  },
  text: {
    alignSelf: 'flex-start',
    ...Fonts.style.description,
  },
  tagIcon: {
    alignSelf: 'center',
    color: Colors.Yellow,
  },
  rightSideSmallText: {
    ...Fonts.size.small,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
  },
  eyeIcon: {
    paddingStart: W(10),
  },
});
export default styles;
