import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingTop: H(40),
  },
  checkBoxView: {
    position: 'absolute',
    top: H(20),
  },
  container: {
    justifyContent: 'space-between',
    marginStart: W(55),
    marginBottom: H(18),
  },
  rightText: {
    flex: 2,
    alignSelf: 'flex-start',
  },
  leftText: {
    flex: 2,
    alignSelf: 'flex-start',
  },
  checkBox: {},
});
export default styles;
