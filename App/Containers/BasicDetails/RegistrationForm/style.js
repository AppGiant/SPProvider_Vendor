import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/color';
import {ApplicationStyles, Fonts} from '../../../Themes';
import {H, W} from '../../../utils/DimensionCalculator';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: W(10),
  },
  linkText: {
    marginStart: -W(15),
    alignSelf: 'center',
  },
  hView: {},
  ...ApplicationStyles.button,
  footerText: {
    paddingTop: H(20),
    textAlign: 'center',
    paddingHorizontal: W(30),
    paddingBottom: H(20),
  },
  headText: {
    ...ApplicationStyles.screen.headText,
    marginBottom: H(20),
    marginStart: W(10),
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginStart: W(15),
    marginTop: H(-20),
    marginBottom: H(10),
  },
  inputHeaderTitle: {
    ...ApplicationStyles.screen.subHeadText,
    marginStart: H(10),
  },
  customCard: {
    ...ApplicationStyles.customCard,
  },
  radioBtn: {
    paddingBottom: H(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
