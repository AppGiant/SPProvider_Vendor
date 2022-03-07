import {StyleSheet} from 'react-native';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';
import config from '../../Config/AppConfig';

const styles = StyleSheet.create({
  roundCard: {
    ...ApplicationStyles.customCard,
    paddingHorizontal: W(0),
    marginTop: H(40),
    paddingBottom: H(40),
  },
  headText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginStart: W(20),
    paddingVertical: H(10),
    fontSize: Fonts.size.h7,
  },
  input: {
    // marginTop: H(20),
    marginHorizontal: W(1),
  },
  inputView: {
    marginTop: H(20),
    marginHorizontal: W(15),
  },
  descInputView: {
    // marginTop: H(10),
    marginHorizontal: W(15),
  },
  descInput: {
    marginHorizontal: W(1),
    height: H(150),
  },
  validText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    alignSelf: 'flex-start',
    marginStart: W(20),
    paddingVertical: H(10),
    marginTop: H(10),
    marginBottom: H(20),
  },
  dropdown: {
    width: W(100),
    // marginTop: H(10),
    marginStart: W(20),
    // marginEnd: W(20),
    zIndex: 2000,
  },
  dayText: {
    marginStart: W(20),
  },
  container1: {
    justifyContent: 'flex-start',
    zIndex: 5000,
    // marginBottom: H(10),
  },
  text1: {
    alignSelf: 'flex-start',
    marginStart: W(24),
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    color: colors.lightText,
  },
  dropdownHeadText: {
    alignSelf: 'flex-start',
    marginStart: W(24),
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    color: colors.lightText,
  },
  container2: {
    // justifyContent: 'center',
    justifyContent: 'space-between',
    marginEnd: W(20),
    marginVertical: H(20),
    zIndex: 2000,
  },
  dateHolder: {
    marginHorizontal: W(20),
    marginBottom: H(20),
  },
  text: {
    alignSelf: 'flex-start',
    marginStart: W(4),
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    color: colors.lightText,
    marginBottom: H(10),
  },
  genderText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginStart: W(20),
    paddingVertical: H(10),
    fontSize: Fonts.size.medium,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: colors.BLUE_GREY,
    borderRadius: 8,
    paddingHorizontal: W(8),
    marginTop: H(10),
    zIndex: 5000,
  },
  selectBoxHolder: {
    marginHorizontal: W(20),
    marginBottom: H(20),
    zIndex: 5000,
  },
  btnHolder: {
    // marginVertical: H(10),
    paddingHorizontal: W(10),
    paddingVertical: H(10),
    justifyContent: 'space-around',
    marginBottom: H(40),
    marginTop: H(20),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.WHITE,
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    marginBottom: H(10),
    backgroundColor: colors.PRIMARY,
    //marginHorizontal:W(10),
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    color: colors.PRIMARY,
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
  },
  selectBoxBg: {
    backgroundColor: colors.DARK_CHARCOAL,
  },
  checkBoxText: {
    marginStart: W(-20),
    marginEnd: W(10),
  },
  dropdownHolder: {},
  dateBtn: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.BLUE_GREY,
    paddingVertical: H(10),
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
    backgroundColor: config.colors.rgbaBlack(0.4),
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
    fontSize: Fonts.size.h7,
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
  dateText: {
    borderWidth: 1,
    paddingHorizontal: W(10),
    paddingVertical: H(2),
    borderRadius: 6,
    fontWeight: 'bold',
    color: colors.PRIMARY,
  },
});

export default styles;
