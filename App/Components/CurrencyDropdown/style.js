import {StyleSheet} from 'react-native';
import {Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: W(10),
    // paddingVertical: H(10),
  },
  view1: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  view2: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  view3: {
    flex: 3,
    justifyContent: 'flex-start',
  },
  view4: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  dropdown: {
    height: H(55),
    borderWidth: 0,
    borderEndWidth: 1,
    borderRadius: 0,
    borderColor: colors.steel,
  },
  text1: {
    alignSelf: 'flex-start',
    paddingBottom: H(10),
    fontWeight: 'bold',
    color: colors.charcoal,
  },
  text2: {
    alignSelf: 'flex-start',
    paddingStart: W(10),
    paddingBottom: H(10),
    fontWeight: 'bold',
    color: colors.charcoal,
  },
  text3: {
    alignSelf: 'flex-start',
    paddingStart: W(10),
  },
  dropdownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.steel,
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    height: H(55),
    borderWidth: 0,
    paddingStart: W(10),
  },
});

export default styles;
