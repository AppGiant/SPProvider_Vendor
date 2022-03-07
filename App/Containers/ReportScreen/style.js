import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: W(10),
  },
  headText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    paddingTop: H(20),
    paddingBottom: H(16),
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
  applyText: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    borderRadius: 8,
    // fontSize: Fonts.size.h7,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    marginEnd: W(10),
  },
  clearText: {
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    borderRadius: 8,
    // fontSize: Fonts.size.h7,
    borderWidth: 1,
    borderColor: Colors.BLUE_GREY,
  },
  subContainer: {
    justifyContent: 'flex-start',
    paddingBottom: H(10),
  },
  exportView: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: Colors.BLUE_GREY,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: W(10),
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    marginTop: H(20),
    marginBottom: H(10),
  },
  exportText: {
    paddingStart: W(4),
    // fontSize: Fonts.size.h7,
  },
  exportIcon: {
    paddingEnd: W(4),
    color: Colors.GRAY,
  },
});

export default styles;
