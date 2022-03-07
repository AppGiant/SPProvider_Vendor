import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../../Themes';
import {H, W} from '../../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginVertical: H(20),
    marginHorizontal: W(10),
    paddingBottom: H(20),
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(15),
    // paddingTop: H(0),
  },
  input: {
    height: H(150),
  },
  btn1: {
    backgroundColor: Colors.PRIMARY,
    marginVertical: H(20),
    marginHorizontal: W(10),
    alignSelf: 'baseline',
    alignSelf: 'flex-end',
    borderRadius: 6,
    paddingHorizontal: W(8),
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    marginVertical: H(20),
    marginHorizontal: W(10),
    alignSelf: 'baseline',
    alignSelf: 'center',
    borderRadius: 6,
    paddingHorizontal: W(8),
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
  headText2: {
    paddingStart: W(10),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    paddingVertical: H(20),
  },
  chipContainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 8,
    elevation: 2,
    paddingHorizontal: W(10),
    marginHorizontal: W(10),
    marginVertical: H(10),
    paddingVertical: H(10),
  },
});
export default styles;
