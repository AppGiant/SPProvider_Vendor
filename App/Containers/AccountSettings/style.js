import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    alignSelf: 'flex-start',
    marginVertical: H(20),
    paddingStart: W(10),
  },
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingBottom: H(0),
  },
  headContainer: {
    justifyContent: 'space-between',
    marginHorizontal: W(10),
    marginVertical: H(4),
  },
  title: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    paddingBottom: H(10),
  },
  view1: {
    flex: 3,
  },
  view2: {
    flex: 2,
  },
  boldText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingStart: W(10),
    marginTop: H(10),
  },
  boldText1: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingStart: W(10),
    marginTop: H(10),
  },
  normalText: {
    alignSelf: 'flex-start',
    paddingStart: W(10),
    marginTop: H(6),
  },
  view3: {
    marginBottom: H(20),
  },
  itemContainer1: {
    justifyContent: 'flex-start',
    paddingBottom: H(20),
  },
  view4: {
    justifyContent: 'center',
  },
  smallText: {
    fontSize: Fonts.size.small,
    alignSelf: 'flex-end',
    paddingHorizontal: W(10),
    paddingBottom: H(2),
  },
  headContainer1: {
    marginHorizontal: W(10),
    marginVertical: H(10),
    justifyContent: 'space-between',
  },
  blueText: {
    color: colors.PRIMARY,
    paddingHorizontal: W(6),
    fontSize: Fonts.size.h7,
  },
  docs: {
    width: W(60),
    height: H(80),
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginStart: W(10),
    marginTop: H(10),
    paddingStart: W(10),
  },
});
export default styles;
