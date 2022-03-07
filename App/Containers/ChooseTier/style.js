import {StyleSheet} from 'react-native';
import { ApplicationStyles, Fonts } from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';

const style = StyleSheet.create({
  container: {flex: 1, marginBottom: H(20)},
  wrapper: { marginTop:H(50),
   
    marginTop: 20,
  // height:H(750)
  //height:H(600)
   //height:H(620)
   height:W(750),
  },
headText:
{
fontWeight:"bold",
fontSize:Fonts.size.h4,
marginBottom:H(10)
},  
//   slide1: {
 
//     justifyContent: 'center',
//     alignItems: 'center',
   
//   },
//   slide2: {
  
//     justifyContent: 'center',
//     alignItems: 'center',
//   //  marginStart:W(-20)
   
//   },
//   slide3: {
   
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ...ApplicationStyles.button
});
export default style;
