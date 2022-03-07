import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../../Themes';
import {H, W} from '../../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    marginVertical: H(20),
    marginHorizontal: W(10),
    paddingBottom: H(20),
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(15),
  },
  input: {
    height: H(150),
  },
  btn1: {
    backgroundColor: Colors.PRIMARY,
    marginVertical: H(20),
    maxWidth: W(150),
    alignSelf: 'flex-end',
    marginHorizontal: W(10),
  },
  buttonTitle1: {
    textAlign: 'center',
  },
  headText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingStart: W(10),
    marginVertical: H(10),
    fontSize: Fonts.size.h6,
  },
});
export default styles;
