import React from 'react'
import {StyleSheet} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import color from "../../Constants/color"
import { H, W } from '../../utils/DimensionCalculator';
const styles=StyleSheet.create({
    container:{
        borderColor:color.GREEN,
        borderWidth:W(2),
        padding:W(10),
        paddingEnd:W(25),
        borderRadius:W(15),
        marginBottom:H(10)
    },
    head:{
        fontWeight:"bold",
        marginBottom:H(5),
        alignSelf:"flex-start"
    },
    title:{
        color:color.GREEN,
        marginBottom:H(5),
        alignSelf:"flex-start"
    },
    description:{
       // color:color.
      
       marginBottom:H(5),
       alignSelf:"flex-start"
    },
    link:{
        alignSelf:"flex-start",
        color:color.PRIMARY,
    
     
    },
    linkContainer:{
        // borderBottomColor:color.PRIMARY,
        // borderBottomWidth:1,
       
    },
    textContainer:{
   
        paddingStart:W(10)
    }
})
export default styles;