import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: H(10),
    borderWidth: 1,
    borderColor: Colors.BLUE_GREY,
    alignSelf: 'baseline',
    // paddingHorizontal: W(16),
    // paddingVertical: H(14),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 2,
    minWidth: W(80),
    minHeight: H(55),
    // marginHorizontal: W(15),
    // marginEnd: W(15),
    marginHorizontal: W(8),
    backgroundColor: Colors.white,
  },
  grayText: {
    color: Colors.BLUE_GREY,
    backgroundColor: 'transparent',
  },
  normalText: {
    backgroundColor: 'transparent',
  },
  container: {},
});
export default styles;
