import {StyleSheet} from 'react-native';
import {Colors} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: W(20),
    marginTop: H(30),
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    marginHorizontal: W(20),
    paddingVertical: H(4),
  },
});

export default styles;
