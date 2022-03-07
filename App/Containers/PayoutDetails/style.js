import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    marginTop: H(40),
  },
  image: {
    alignItems: 'center',
    paddingTop: H(20),
    paddingBottom: H(10),
  },
  text: {
    marginVertical: H(10),
    textAlign: 'center',
    fontSize: Fonts.size.h8,
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(16),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.PRIMARY,
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    color: colors.white,
  },
});

export default styles;
