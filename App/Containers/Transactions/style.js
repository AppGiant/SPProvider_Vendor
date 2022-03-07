import {StyleSheet} from 'react-native';
import Colors from '../../Constants/color';
import {ApplicationStyles, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';
import {Metrics} from '../../Themes';
import color from '../../Constants/color';

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
  },
  container: {
    // paddingBottom: H(10),
    // marginBottom: H(10),
    flex: 1,
  },
  popup: {
    backgroundColor: 'transparent',
  },
  headerView: {
    paddingHorizontal: W(20),
    paddingVertical: H(16),
    // marginBottom: H(10),
    justifyContent: 'space-between',
    borderTopWidth: H(1),
    borderTopColor: 'gray',
  },
  dateView: {
    borderWidth: 1,
    borderColor: Colors.BLUE_GREY,
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: W(10),
  },
  calendarIcon: {
    paddingStart: W(14),
    color: Colors.GRAY,
  },
  dateText: {
    paddingEnd: W(14),
    // fontSize: Fonts.size.h7,
    // color: Colors.GRAY,
  },
});

export default styles;
