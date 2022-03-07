import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h8,
    alignSelf: 'flex-start',
    color: colors.charcoal,
  },
  text2: {
    fontSize: Fonts.size.h8,
    alignSelf: 'flex-start',
    color: colors.charcoal,
  },
});
export default styles;
