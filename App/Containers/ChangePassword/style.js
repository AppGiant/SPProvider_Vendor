import {StyleSheet} from "react-native"
import { ApplicationStyles, Fonts } from "../../Themes"
import Colors from "../../Constants/color"
import { H ,W} from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({ container:{
    paddingTop:W(10),
   
    marginHorizontal:W(10) 
},  headText:
    {
    fontWeight:"bold",
    fontSize:Fonts.size.h4,
    marginBottom:H(20)
    },
    subText:{
        marginTop:H(10),
        textAlign:"center"
    },
    rightAlign:
    {
    
    },
    linkText:
    {
        fontSize:14,color:Colors.PRIMARY,alignSelf:"flex-end",marginEnd:W(10)
    },
    error:{fontSize:12,color:'red',alignSelf:'flex-start',marginStart:W(15),marginTop:H(0),marginBottom:H(10)},
    ...ApplicationStyles.button
})
export default styles;