import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingTop: H(0),
  },
  container: {
    paddingVertical: H(20),
    marginTop: H(10),
    zIndex: 4000,
  },
  headText: {
    alignSelf: 'flex-start',
    paddingStart: W(10),
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    paddingVertical: H(20),
  },
  dropdownView: {
    alignSelf: 'baseline',
    marginStart: W(10),
    width: W(150),
    zIndex: 4000,
  },
  dropdown: {
    borderWidth: 1,
    borderEndWidth: 1,
    borderRadius: 6,
    borderColor: colors.BLUE_GREY,
    height: H(55),
    zIndex: 4000,
  },
  dropdownContainer: {
    flex: 1,
    marginEnd: W(20),
    zIndex: 4000,
  },
  text: {
    alignSelf: 'center',
    color: colors.BLUE_GREY,
  },
  dotView: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginVertical: H(16),
    marginHorizontal: W(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueText: {
    alignSelf: 'center',
    color: colors.PRIMARY,
    fontWeight: 'bold',
    borderBottomColor: colors.PRIMARY,
    borderBottomWidth: 1,
  },
});
export default styles;
