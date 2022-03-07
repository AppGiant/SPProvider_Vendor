import {StyleSheet} from 'react-native';
import color from '../../Constants/color';
import {ApplicationStyles, Fonts} from '../../Themes';
import colors from '../../Themes/Colors';
import {H, W} from '../../utils/DimensionCalculator';
const styles = StyleSheet.create({
  container: {
     position:"absolute",
     top:H(210),
     width:W(413),
     height:H(1000),
    zIndex:1000,
    marginHorizontal:0,
    marginHorizontal: 0,
    // paddingHorizontal:W(10),
    // paddingVertical:H(10),
    backgroundColor: color.PRIMARY,
    borderTopLeftRadius: W(20),
    borderTopRightRadius: W(20),
  },
  headText: {
    ...ApplicationStyles.screen.headText,
    fontSize: Fonts.size.h4,
    color:color.WHITE,
    flex: 1,
    textAlign:"left"
  },
  header: {
    paddingHorizontal: H(10),
    marginTop: H(10),
    backgroundColor: 'transparent',
    paddingStart: W(20),
    alignItems: 'center',
  },
  grayBox: {
    backgroundColor: color.LIGHT_BG,

    alignItems: 'flex-start',
    flex: 0.4,
    marginHorizontal: 0,
  },
  selectedFilterTextContainer: {
    width: 170,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: color.WHITE,
    paddingVertical: H(10),
    marginBottom:0
  },
  filterTextContainer: {
   flexDirection:"row",
   alignItems:"center",
    backgroundColor: 'transparent',
    paddingVertical: H(10),
    marginBottom:0
  },
  lightText: {
    marginStart: W(30),
    ...ApplicationStyles.screen.subHeadText,
    flex:0.8,
    fontWeight: 'normal',
  },
  whiteBox: {
    flex: 0.5,
    paddingHorizontal: W(10),
  },
  filtersContainer:{
      height:H(600)
  }
});
export default styles;
