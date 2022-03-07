import {StyleSheet} from 'react-native';
import {Fonts, ApplicationStyles, Colors} from '../../../../Themes';
import {H, W} from '../../../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: W(5),
    paddingVertical: H(10),
    zIndex: 2000,
  },
  headText: {
    // marginStart:W(10),
    marginBottom: H(10),
    ...ApplicationStyles.screen.headText,
  },
  subHeadText: {
    flex: 1,
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
  },
  buttonContainer: {
    ...ApplicationStyles.button.buttonContainer,
    // backgroundColor:Colors.white,
    // borderColor:color.PRIMARY,
    // borderWidth:1
    marginTop: H(20),
  },
  buttonTitle: {
    ...ApplicationStyles.button.buttonTitle,
    //color:color.PRIMARY
  },
  buttonContainerPrimary: {
    ...ApplicationStyles.button.buttonContainer,
  },
  buttonTitlePrimary: {
    ...ApplicationStyles.button.buttonTitle,
  },
  row: {
    marginBottom: H(20),
    flex: 1,
    flexWrap: 'wrap',
  },
  valueText: {
    flex: 1,
    paddingStart: 8,
    //alignSelf:"flex-end",

    //  textAlign:"right",
  },
});
export default styles;
