import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: W(15),
    paddingBottom: H(10),
    paddingTop: H(20),
  },
  mainContainer: {
    flex: 1,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    marginBottom: H(20),
    marginTop: H(10),
    borderRadius: 8,
    paddingVertical: H(2),
  },
  btn1: {
    backgroundColor: Colors.BLUE_GREY,
    marginBottom: H(20),
    marginTop: H(10),
    borderRadius: 8,
    paddingVertical: H(2),
  },
  input: {
    textAlign: 'left',
  },
  inputHeaderTitle: {
    // ...ApplicationStyles.screen.inputHeaderTitle,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: Colors.lightText,
    marginStart: W(2),
  },
  linkText: {
    marginStart: -W(15),
    alignSelf: 'center',
    color: Colors.lightText,
  },
  hView: {
    alignItems: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginStart: W(15),
    marginTop: H(-20),
    marginBottom: H(10),
    fontSize: Fonts.size.small,
  },
});
export default styles;
