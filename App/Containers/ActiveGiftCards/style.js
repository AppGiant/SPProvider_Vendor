import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'flex-end',
  },
  blueText: {
    color: Colors.PRIMARY,
    paddingStart: W(10),
    fontSize: Fonts.size.h7,
  },
  createView: {
    justifyContent: 'flex-end',
    paddingVertical: H(10),
    alignItems: 'center',
    paddingEnd: W(20),
  },
  plusIcon: {
    color: Colors.PRIMARY,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  failedText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default styles;
