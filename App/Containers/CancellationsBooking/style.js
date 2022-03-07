import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: W(10),
    marginTop: H(20),
  },
  searchView: {
    borderRadius: 40,
    borderColor: colors.BLUE_GREY,
    borderWidth: 1,
    height: H(50),
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 0,
    // alignSelf: 'center',
    paddingTop: H(16),
    paddingHorizontal: W(10),
  },
  searchInputBox: {
    borderRadius: 40,
  },
  searchContainer: {
    alignItems: 'center',
  },
  mapIconContainer: {
    flex: 0.1,
    alignItems: 'center',
    // marginTop: H(10),
    marginBottom: H(20),
  },
  searchInputBoxContainer: {
    flex: 0.9,
  },
});
export default styles;
