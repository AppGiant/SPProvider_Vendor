import {StyleSheet} from 'react-native';
import Colors from '../../Constants/color';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';
import {Metrics} from '../../Themes';
import color from '../../Constants/color';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    paddingVertical: H(18),
    paddingHorizontal: W(18),
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: colors.PRIMARY,
    height: H(60),
    alignItems: 'center',
    paddingVertical: H(8),
  },
  columnDate: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  columnTransaction: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  columnAmount: {
    flex: 2.5,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  dateText: {
    ...ApplicationStyles.screen.subHeadText,
    color: color.WHITE,
    alignSelf: 'flex-start',
    marginStart: W(12),
    letterSpacing: 1,
  },
  transactionText: {
    ...ApplicationStyles.screen.subHeadText,
    color: color.WHITE,
    alignSelf: 'flex-start',
    marginStart: W(10),
    letterSpacing: 1,
  },
  amountText: {
    ...ApplicationStyles.screen.subHeadText,
    color: color.WHITE,
    alignSelf: 'flex-start',
    letterSpacing: 1,
  },
  container: {
    // paddingBottom: H(10),
    // marginBottom: H(10),
    flex: 1,
  },
});

export default styles;
