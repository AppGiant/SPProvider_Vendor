import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    flex: 1,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    paddingEnd: H(20),
  },
  subText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    paddingEnd: H(20),
  },
  headContainer: {
    paddingHorizontal: W(10),
    paddingVertical: H(10),
  },
  boldText: {
    alignSelf: 'flex-start',
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    fontWeight: 'bold',
  },
  dropdown: {
    borderWidth: 1,
    borderEndWidth: 1,
    borderRadius: 6,
    borderColor: colors.BLUE_GREY,
    height: H(55),
    zIndex: 1000,
  },
  dropdownView: {
    // alignSelf: 'baseline',
    marginStart: W(20),
    width: W(120),
    zIndex: 1000,
  },
  dropdownContainer: {
    alignItems: 'center',
    paddingHorizontal: W(10),
    zIndex: 2000,
  },
  normalText: {
    alignSelf: 'flex-start',
    paddingStart: W(10),
  },
  container: {
    marginBottom: H(20),
    zIndex: 4000,
  },
  normalHeadText: {
    alignSelf: 'flex-start',
    marginBottom: H(10),
  },
  text: {
    alignSelf: 'flex-end',
    marginBottom: H(15),
    paddingHorizontal: W(10),
    fontWeight: 'bold',
    color: colors.BLUE_GREY,
  },
  view: {
    marginTop: H(10),
  },
  checkBoxContainer: {
    // alignItems: 'center',
  },
  linkText: {
    marginStart: -W(18),
    alignSelf: 'center',
    color: colors.PRIMARY,
  },
  checkBox: {
    alignSelf: 'center',
  },
  updateBtn: {
    backgroundColor: colors.PRIMARY,
    alignSelf: 'baseline',
    borderRadius: 6,
    paddingHorizontal: W(4),
    alignSelf: 'flex-end',
    marginEnd: W(10),
  },
});

export default styles;
