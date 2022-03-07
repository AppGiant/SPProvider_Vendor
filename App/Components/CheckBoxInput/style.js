
import {StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'
import { H, W } from '../../utils/DimensionCalculator'
import color from "../../Constants/color"
const style=StyleSheet.create({
    checkBoxContainer:{
      paddingEnd:W(10)
    },
    startText:{
        color:Colors.lightText
    },
    midText:{
        marginStart:-W(11),
        color:Colors.lightText
    },
    endText:{
        textAlign:"right",
        flex:1,
        fontSize:Fonts.size.h5,
        fontWeight:"bold",
        
    }
})
export default style