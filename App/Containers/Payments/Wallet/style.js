import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../../Themes';
import colors from '../../../Themes/Colors';
import {H, W} from '../../../utils/DimensionCalculator';
import color from '../../../Constants/color';
const styles = StyleSheet.create({
  roundCard: {
    borderRadius: 10,
    // marginBottom: H(10),
    paddingVertical: H(20),
    elevation: 2,
    margin: H(8),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    marginHorizontal: W(10),
  },
  walletView: {
    paddingHorizontal: W(12),
    paddingVertical: H(10),
    justifyContent: 'space-between',
  },

  walletText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
  },

  line: {
    width: '100%',
    backgroundColor: colors.steel,
    height: H(1),
  },
  balanceView: {
    paddingHorizontal: W(20),
    paddingVertical: H(10),
    justifyContent: 'space-between',
  },
  balanceText1: {
    color: colors.skyblue,
    fontSize: Fonts.size.regular,
  },
  balanceText2: {
    color: colors.skyblue,
    fontSize: Fonts.size.regular,
  },
  btnHolder: {
    marginVertical: H(10),
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    justifyContent: 'space-around',
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: color.WHITE,
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(4),
    borderRadius: 5,
    marginBottom: H(10),
    backgroundColor: color.PRIMARY,
    //marginHorizontal:W(10),
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    color: color.PRIMARY,
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
  },
  transactionView: {
    paddingHorizontal: W(20),
    paddingVertical: H(16),
    // marginBottom: H(10),
    justifyContent: 'space-between',
    borderTopWidth: H(1),
    borderTopColor: 'gray',
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
    marginEnd: W(10),
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
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    marginTop: H(40),
  },
  tableContainer: {
    flex: 1,
  },
  footerText: {
    borderBottomColor: colors.skyblue,
    fontSize: Fonts.size.small,
    color: colors.skyblue,
    borderBottomWidth: H(1),
    paddingVertical: W(10),
  },
  popup: {
    backgroundColor: 'transparent',
  },
});

export default styles;
