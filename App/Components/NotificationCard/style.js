import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BLUE_GREY,
    paddingVertical: H(10),
    paddingHorizontal: W(10),
    marginVertical: H(10),
  },
  card: {
    borderRadius: 6,
    backgroundColor: Colors.BLUE_GREY,
    alignSelf: 'baseline',
    paddingHorizontal: W(10),
    paddingVertical: H(8),
  },
  headText: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
  },
  dateText: {
    alignSelf: 'flex-start',
    color: Colors.BLUE_GREY,
    fontSize: Fonts.size.small,
  },
  text: {
    paddingVertical: H(6),
    alignSelf: 'flex-start',
  },
});
export default styles;
