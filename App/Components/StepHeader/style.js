import {StyleSheet} from "react-native"
import color from "../../Constants/color";
import { ApplicationStyles ,Fonts} from "../../Themes";

import { H, W } from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({
container:{
    marginVertical:H(10),
    paddingHorizontal:W(10),
    marginBottom:H(20)
},
icon:{
width:W(30),
height:W(40),marginHorizontal:W(10)
},
title:{
    flex:1,
textAlign:"right",
fontWeight:"bold",
fontSize:Fonts.size.h4,
marginEnd:W(10),
alignSelf:"center",
color:color.PRIMARY
},
iconTitleContainer:
{alignSelf:"center",
    marginLeft:W(10)
},
iconSubtitleText:{
    color:color.PRIMARY,
    ...ApplicationStyles.screen.headText
},
iconTitleText:{
    fontWeight:"bold",
    ...ApplicationStyles.screen.subHeadText,
}

})
export default styles;