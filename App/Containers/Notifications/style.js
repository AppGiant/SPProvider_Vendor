import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingBottom: H(20),
  },
  headContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: W(10),
    alignItems: 'center',
  },
  headText: {
    fontSize: Fonts.size.h6,
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default styles;
