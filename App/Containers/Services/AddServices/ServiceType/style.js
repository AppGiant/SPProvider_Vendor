import {from} from 'seamless-immutable';
import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../../../Themes';
import {H, W} from '../../../../utils/DimensionCalculator';
import color from '../../../../Constants/color';
const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: H(10),
    paddingHorizontal: W(10),
  },
  icon: {
    marginEnd: W(10),
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: W(10),
    elevation: 2,
    borderColor: Colors.text,
    borderWidth: 1,
    paddingVertical: H(5),
    paddingHorizontal: W(10),
    marginHorizontal: W(10),
    marginVertical: H(10),
  },
  text: {
    color: Colors.text,
    fontWeight: 'bold',
    paddingHorizontal: W(8),
    paddingVertical: H(2),
  },
  headText: {
    fontSize: Fonts.size.h5,
    //marginTop:H(20),
    marginStart: W(16),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  ...ApplicationStyles.button,
});
export default styles;
