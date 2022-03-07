import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    flex: 1,
  },
  card: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: 0,
    // paddingVertical: H(0),
    marginTop: H(40),
  },
  headView: {
    alignItems: 'center',
    paddingBottom: H(10),
    paddingHorizontal: W(10),
  },
  text: {
    alignSelf: 'flex-start',
    marginVertical: H(10),
    marginStart: W(10),
    fontSize: Fonts.size.h5,
    fontWeight: 'bold',
  },
  line: {
    height: H(1),
    backgroundColor: colors.steel,
  },
  dropdownContainer: {
    marginHorizontal: W(20),
    marginVertical: H(30),
    zIndex: 3000,
  },
  text1: {
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: colors.lightText,
  },
  text2: {
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: colors.lightText,
  },
  totalView: {
    justifyContent: 'space-between',
    marginHorizontal: W(20),
    marginVertical: H(20),
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    marginBottom: H(20),
    backgroundColor: colors.PRIMARY,
    marginHorizontal: W(20),
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
  },
  container1: {
    flex: 1,
  },
  container2: {
    // backgroundColor: 'transparent',
    // alignItems: 'center',
    paddingHorizontal: W(10),
  },
  name: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.h8,
    fontWeight: 'bold',
    paddingVertical: H(10),
    paddingHorizontal: W(10),
  },
  cardNo: {
    paddingVertical: H(10),
    paddingHorizontal: W(10),
    // alignSelf: 'flex-start',
    fontSize: Fonts.size.h8,
  },
  cardContainer: {
    justifyContent: 'space-between',
  },
  cardName: {
    paddingVertical: H(10),
    paddingHorizontal: W(10),
    // alignSelf: 'flex-start',
    fontSize: Fonts.size.h6,
    fontWeight: 'bold',
  },
});
export default styles;
