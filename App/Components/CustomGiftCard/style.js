import {StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    borderWidth: 2,
    paddingVertical: H(10),
  },
  roundTextView: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: W(10),
    paddingVertical: H(5),
    marginHorizontal: W(10),
    backgroundColor: Colors.liteYellow,
    minWidth: W(100),
  },
  text1: {
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'flex-end',
    marginVertical: H(5),
  },
  icon: {
    color: color.PRIMARY,
    alignSelf: 'flex-start',
  },
  container1: {
    marginTop: H(-40),
    backgroundColor: 'transparent',
    paddingStart: W(10),
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h3,
    alignSelf: 'flex-start',
    paddingStart: W(5),
    paddingTop: H(10),
  },
  text2: {
    alignSelf: 'flex-start',
    paddingStart: W(5),
    paddingTop: H(5),
    fontSize: Fonts.size.h4,
    paddingBottom: H(15),
  },
});
export default styles;
