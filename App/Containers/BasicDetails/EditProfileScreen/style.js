import {StyleSheet} from 'react-native';
import Colors from '../../../Constants/color';
import {ApplicationStyles, Fonts} from '../../../Themes';
import {H, W} from '../../../utils/DimensionCalculator';
import {Metrics} from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: W(10),
    marginVertical: H(24),
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
  logo: {
    height: Metrics.images.small,
    width: Metrics.images.small,
    resizeMode: 'contain',
    marginStart: W(16),
    // marginTop: H(20),
  },
  upload: {
    flex: 1,
    marginVertical: H(20),
    // paddingVertical: H(8),
    paddingHorizontal: W(8),
  },
  uploadText: {
    marginStart: H(20),
  },
});
export default styles;
