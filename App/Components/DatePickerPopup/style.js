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
    paddingVertical: H(20),
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
    marginVertical: H(10),
    marginEnd: W(10),
    color: colors.white,
  },
});
export default styles;
