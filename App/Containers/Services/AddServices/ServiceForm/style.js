import {StyleSheet} from 'react-native';
import {Fonts, ApplicationStyles, Colors} from '../../../../Themes';
import {H, W} from '../../../../utils/DimensionCalculator';
import color from '../../../../Constants/color';
import {colors} from 'react-native-elements';
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: W(5),
    paddingVertical: H(10),
  },
  headText: {
    // marginStart:W(10),
    marginBottom: H(10),
    ...ApplicationStyles.screen.headText,
  },
  subHeadText: {
    ...ApplicationStyles.screen.subHeadText,
    //marginStart:H(10)
  },
  cardContainerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: H(10),
    borderRadius: 10,
    zIndex: 45,
  },
  buttonContainer: {
    ...ApplicationStyles.button.buttonContainer,
    backgroundColor: Colors.white,
    borderColor: color.PRIMARY,
    borderWidth: 1,
  },
  buttonTitle: {
    ...ApplicationStyles.button.buttonTitle,
    color: color.PRIMARY,
  },
  buttonContainerPrimary: {
    ...ApplicationStyles.button.buttonContainer,
  },
  buttonTitlePrimary: {
    ...ApplicationStyles.button.buttonTitle,
  },
  addImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: H(10),
    borderColor: color.BORDER,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginVertical: H(15),
  },
  cardsContainer: {
    marginBottom: H(30),
  },
  variationsImageContainer: {
    marginVertical: H(10),
    backgroundColor: Colors.transparent,
  },
  variationImage: {
    width: W(70),
    height: H(100),
    alignItems: 'flex-end',
    marginEnd: H(10),
  },
  allowedDropDownStyle: {
    // marginTop: H(20),
    // alignSelf: 'center',
    // paddingBottom: H(40),
    paddingTop: H(14),
    marginStart: W(10),
    width: W(200),
    zIndex: 2000,
  },
  unitDropdown: {
    borderColor: Colors.BLUE_GREY,
    height: H(65),
    zIndex: 1000,
  },
  varContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addText: {
    color: Colors.PRIMARY,
    marginBottom: H(10),
  },
});
export default styles;
