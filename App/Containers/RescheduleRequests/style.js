import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';
// import {config} from '../../Config/AppConfig';
import { ApplicationStyles, Fonts } from '../../Themes';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: W(1),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  failedText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  container: {
    marginHorizontal: W(10),
    marginTop: H(10),
  },
  modalView: {
    // padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: H(20),
    paddingHorizontal: W(10),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginEnd: W(8),
    backgroundColor: colors.white,
  },
  okText: {
    // marginEnd: W(16),
    // marginBottom: H(8),
    color: colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: Fonts.size.normal,
  },
  okBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: W(10),
    paddingVertical: H(2),
  },
  noText: {
    paddingTop: H(40),
  },
  transactionView: {
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    justifyContent: 'space-between',
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: colors.BLUE_GREY
  },
  transactionText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
  },
  dateView: {
    borderWidth: 1,
    borderColor: colors.BLUE_GREY,
    paddingHorizontal: W(10),
    paddingVertical: H(8),
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginEnd: W(10),
  },
  calendarIcon: {
    paddingStart: W(14),
    color: colors.GRAY,
  },
  dateText: {
    paddingEnd: W(14),
    // fontSize: Fonts.size.h7,
    // color: Colors.GRAY,
  },
});
export default styles;
